// YouTube API Configuration
const YOUTUBE_API_KEY = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY || "";
const CHANNEL_ID = "UCQPOQyi95rqf9foC4Nr2Cdg";
const DAILY_PLAYLIST_ID = "PL4kKxVfkjqJoha2BBocgSRNp-DhDr2bEg";

export interface ChannelStats {
  subscriberCount: string;
  videoCount: string;
  viewCount: string;
}

export interface VideoInfo {
  videoId: string;
  title: string;
  description: string;
  publishedAt: string;
  thumbnailUrl: string;
}

// Format large numbers (e.g., 230000 -> 230K, 91564001 -> 91.5M)
export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(0) + "K";
  }
  return num.toLocaleString("tr-TR");
}

// Get channel statistics
export async function getChannelStats(): Promise<ChannelStats> {
  // Default values if API is not available
  const defaultStats: ChannelStats = {
    subscriberCount: "230K",
    videoCount: "34.129",
    viewCount: "91.5M",
  };

  if (!YOUTUBE_API_KEY) {
    return defaultStats;
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      console.error("YouTube API error:", response.statusText);
      return defaultStats;
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return defaultStats;
    }

    const stats = data.items[0].statistics;

    return {
      subscriberCount: formatNumber(parseInt(stats.subscriberCount)),
      videoCount: parseInt(stats.videoCount).toLocaleString("tr-TR"),
      viewCount: formatNumber(parseInt(stats.viewCount)),
    };
  } catch (error) {
    console.error("Error fetching channel stats:", error);
    return defaultStats;
  }
}

// Get full video description from video ID
async function getVideoFullDescription(videoId: string): Promise<string> {
  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return "";
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return "";
    }

    return data.items[0].snippet.description || "";
  } catch (error) {
    console.error("Error fetching video description:", error);
    return "";
  }
}

// Get latest video from daily playlist
export async function getLatestDailyVideo(): Promise<VideoInfo> {
  // Default video if API is not available
  const defaultVideo: VideoInfo = {
    videoId: "dQw4w9WgXcQ", // Placeholder
    title: "Günlük Burç Yorumu",
    description: "Bugünün burç yorumları için videoyu izleyin.",
    publishedAt: new Date().toISOString(),
    thumbnailUrl: "",
  };

  if (!YOUTUBE_API_KEY) {
    return defaultVideo;
  }

  try {
    // First get the latest video from playlist
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${DAILY_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(playlistUrl, { next: { revalidate: 3600 } }); // Cache for 1 hour

    if (!response.ok) {
      console.error("YouTube API error:", response.statusText);
      return defaultVideo;
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return defaultVideo;
    }

    const video = data.items[0].snippet;
    const videoId = video.resourceId.videoId;

    // Get full description from videos API
    const fullDescription = await getVideoFullDescription(videoId);

    return {
      videoId: videoId,
      title: video.title,
      description: fullDescription || video.description,
      publishedAt: video.publishedAt,
      thumbnailUrl:
        video.thumbnails?.maxres?.url ||
        video.thumbnails?.high?.url ||
        video.thumbnails?.medium?.url ||
        "",
    };
  } catch (error) {
    console.error("Error fetching latest video:", error);
    return defaultVideo;
  }
}

// Açıklamayı Udemy linkinden sonra kes (Udemy linki dahil)
export function truncateDescriptionAtUdemy(description: string): string {
  // Udemy linkini bul
  const udemyPattern = /(https?:\/\/(?:www\.)?udemy\.com\/[^\s]+)/i;
  const match = description.match(udemyPattern);

  if (match) {
    const udemyLink = match[1];
    const udemyIndex = description.indexOf(udemyLink);
    // Udemy linkinin sonuna kadar al
    return description.substring(0, udemyIndex + udemyLink.length);
  }

  return description;
}

// Get latest video from any playlist
export async function getLatestVideoFromPlaylist(playlistId: string, defaultTitle: string = "Burç Yorumu"): Promise<VideoInfo> {
  const defaultVideo: VideoInfo = {
    videoId: "dQw4w9WgXcQ",
    title: defaultTitle,
    description: "Burç yorumları için videoyu izleyin.",
    publishedAt: new Date().toISOString(),
    thumbnailUrl: "",
  };

  if (!YOUTUBE_API_KEY) {
    return defaultVideo;
  }

  try {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${playlistId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(playlistUrl, { next: { revalidate: 3600 } });

    if (!response.ok) {
      console.error("YouTube API error:", response.statusText);
      return defaultVideo;
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return defaultVideo;
    }

    const video = data.items[0].snippet;
    const videoId = video.resourceId.videoId;

    // Get full description
    const fullDescription = await getVideoFullDescription(videoId);

    return {
      videoId: videoId,
      title: video.title,
      description: fullDescription || video.description,
      publishedAt: video.publishedAt,
      thumbnailUrl:
        video.thumbnails?.maxres?.url ||
        video.thumbnails?.high?.url ||
        video.thumbnails?.medium?.url ||
        "",
    };
  } catch (error) {
    console.error("Error fetching video from playlist:", error);
    return defaultVideo;
  }
}

// Get video by ID (for single videos, not playlists)
export async function getVideoById(videoId: string, defaultTitle: string = "Burç Yorumu"): Promise<VideoInfo> {
  const defaultVideo: VideoInfo = {
    videoId: videoId,
    title: defaultTitle,
    description: "Burç yorumları için videoyu izleyin.",
    publishedAt: new Date().toISOString(),
    thumbnailUrl: "",
  };

  if (!YOUTUBE_API_KEY) {
    return defaultVideo;
  }

  try {
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(url, { next: { revalidate: 3600 } });

    if (!response.ok) {
      console.error("YouTube API error:", response.statusText);
      return defaultVideo;
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return defaultVideo;
    }

    const video = data.items[0].snippet;

    return {
      videoId: videoId,
      title: video.title,
      description: video.description || "",
      publishedAt: video.publishedAt,
      thumbnailUrl:
        video.thumbnails?.maxres?.url ||
        video.thumbnails?.high?.url ||
        video.thumbnails?.medium?.url ||
        "",
    };
  } catch (error) {
    console.error("Error fetching video by ID:", error);
    return defaultVideo;
  }
}

// Format date in Turkish
export function formatDateTurkish(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("tr-TR", options);
}

// Format date in English
export function formatDateEnglish(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

// Video açıklamasından Udemy linkini çıkar
export function extractUdemyLink(description: string): string | null {
  const udemyPattern = /(https?:\/\/(?:www\.)?udemy\.com\/[^\s]+)/i;
  const match = description.match(udemyPattern);
  return match ? match[1] : null;
}

// Varsayılan Udemy linki (API çalışmazsa kullanılır)
const DEFAULT_UDEMY_LINK = "https://www.udemy.com/course/astrolog-demet-baltaci-astroloji-egitimi/";

// Eğitim playlist'inden güncel Udemy linkini al
export async function getUdemyLinkFromEducationPlaylist(): Promise<string> {
  // Eğitim playlist ID
  const EDUCATION_PLAYLIST_ID = "PL4kKxVfkjqJoJHjKChw59pzIG7JA4FR8B";

  if (!YOUTUBE_API_KEY) {
    return DEFAULT_UDEMY_LINK;
  }

  try {
    const playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${EDUCATION_PLAYLIST_ID}&key=${YOUTUBE_API_KEY}`;
    const response = await fetch(playlistUrl, { next: { revalidate: 3600 } });

    if (!response.ok) {
      return DEFAULT_UDEMY_LINK;
    }

    const data = await response.json();

    if (!data.items || data.items.length === 0) {
      return DEFAULT_UDEMY_LINK;
    }

    const videoId = data.items[0].snippet.resourceId.videoId;

    // Get full description
    const fullDescription = await getVideoFullDescription(videoId);

    // Extract Udemy link from description
    const udemyLink = extractUdemyLink(fullDescription);

    return udemyLink || DEFAULT_UDEMY_LINK;
  } catch (error) {
    console.error("Error fetching Udemy link:", error);
    return DEFAULT_UDEMY_LINK;
  }
}
