# Demet Baltacı Astroloji Web Sitesi - Proje Kuralları

## YouTube Video Açıklamaları

- YouTube'dan alınan tüm videoların altında açıklama alanı olacak
- Açıklama metni Udemy linkinden sonra kesilecek (Udemy linki dahil edilecek)
- Bu kural `truncateDescriptionAtUdemy()` fonksiyonu ile uygulanır (`src/lib/youtube.ts`)

## Video Açıklama Linkleri

Açıklama alanındaki şu öğeler tıklanabilir olacak:
- URL'ler (http/https)
- Hashtag'ler (#tag) - YouTube hashtag aramasına yönlendirir
- Timestamp'ler (0:00) - Videonun o saniyesine yönlendirir

## SEO Kuralları

Her sayfa için şunlar olmalı:
- **Title**: Hedef keyword + marka (max 60 karakter)
- **Description**: Hedef keyword ile başlayan açıklama (max 160 karakter)
- **Keywords**: En çok aranan terimler (`src/lib/seo-config.ts`)
- **OpenGraph**: Sosyal medya paylaşımları için
- **Tarih**: Burç yorumlarında güncel tarih kullan

### En Çok Aranan Keyword'ler:
- Günlük: "günlük burç yorumu", "bugünün burç yorumu"
- Haftalık: "haftalık burç yorumu", "bu hafta burç yorumları"
- Aylık: "aylık burç yorumu", "bu ay burç yorumları"
- Burç: "[burç adı] burcu özellikleri", "[burç adı] burcu kadın erkek"
- Danışmanlık: "astroloji danışmanlık", "doğum haritası analizi"

## Teknik Notlar

- YouTube API Key: `.env.local` dosyasında `NEXT_PUBLIC_YOUTUBE_API_KEY`
- Kanal ID: `UCQPOQyi95rqf9foC4Nr2Cdg`
- Günlük Yorumlar Playlist ID: `PL4kKxVfkjqJoha2BBocgSRNp-DhDr2bEg`
- Haftalık Playlist'ler: `src/lib/playlist-config.ts`
- SEO Keyword Config: `src/lib/seo-config.ts`
