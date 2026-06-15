"use client";

import { useMemo, useState } from "react";
import { COUNTRIES, computeRisingSign, tzOffsetHours, RisingSignResult } from "@/lib/risingSign";
import { RISING_DESCRIPTIONS } from "@/lib/risingSignDescriptions";

// Site genelinde kullanılan WhatsApp numarası (WhatsAppButton.tsx ile aynı).
const WHATSAPP_NUMBER = "905076075017";
const YOUTUBE_CHANNEL = "https://www.youtube.com/@demet.baltaci";
const PAGE_URL = "https://www.demetbaltaci.com/yukselen-burc-hesaplama";

// Yükselen burç index'i (SIGNS sırası: Koç..Balık) → mevcut haftalık yorum sayfası slug'ı.
// Route yapısı: /haftalik-burc-yorumlari-astroloji/{id}-burcu-haftalik-yorumu
const WEEKLY_IDS = ["koc", "boga", "ikizler", "yengec", "aslan", "basak", "terazi", "akrep", "yay", "oglak", "kova", "balik"];
function weeklyHref(index: number): string {
  const id = WEEKLY_IDS[index];
  return id ? `/haftalik-burc-yorumlari-astroloji/${id}-burcu-haftalik-yorumu` : YOUTUBE_CHANNEL;
}

// Site paleti
const C = {
  primary: "#1E3A8A",
  primaryLight: "#3B82F6",
  gold: "#D4AF37",
  bg: "#F8FAFC",
  border: "#E2E8F0",
  text: "#1F2937",
  textDim: "#64748B",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: "16px",
  color: C.text,
  background: "white",
  border: `1px solid ${C.border}`,
  borderRadius: "10px",
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "13px",
  fontWeight: 600,
  color: C.primary,
  marginBottom: "6px",
};

export default function RisingSignCalculator() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [countryIdx, setCountryIdx] = useState("0"); // "manual" veya indeks
  const [cityIdx, setCityIdx] = useState(""); // boş = henüz şehir seçilmedi
  const [lat, setLat] = useState("");
  const [lon, setLon] = useState("");
  const [utc, setUtc] = useState("");
  const [error, setError] = useState("");
  const [result, setResult] = useState<RisingSignResult | null>(null);
  const [showShareFallback, setShowShareFallback] = useState(false);

  const isManual = countryIdx === "manual";
  const cities = useMemo(
    () => (isManual ? [] : COUNTRIES[+countryIdx].cities),
    [countryIdx, isManual]
  );

  function onCountryChange(value: string) {
    setCountryIdx(value);
    setResult(null);
    setShowShareFallback(false);
    setError("");
    if (value !== "manual") setCityIdx(""); // yeni ülkede şehir seçimini sıfırla
  }

  function shareText(sign: { tr: string; g: string }): string {
    return `Yükselenim ${sign.tr} ${sign.g} — sen de öğren: ${PAGE_URL}`;
  }

  async function handleShare(sign: { tr: string; g: string }) {
    const text = shareText(sign);
    // Mobil: native paylaşım
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      try {
        await navigator.share({
          title: `Yükselenim ${sign.tr}`,
          text,
          url: PAGE_URL,
        });
        return;
      } catch {
        // Kullanıcı iptal etti veya hata: fallback gösterme.
        return;
      }
    }
    // Masaüstü: fallback linkleri aç/kapat
    setShowShareFallback((v) => !v);
  }

  function calculate() {
    setError("");
    setResult(null);

    if (!date || !time || (!isManual && cityIdx === "")) {
      setError("Lütfen doğum tarihi, saati ve şehrinizi girin.");
      return;
    }
    const [Y, M, D] = date.split("-").map(Number);
    const [hh, mm] = time.split(":").map(Number);

    let latNum: number, lonNum: number, offset: number | null;

    if (isManual) {
      latNum = parseFloat(lat);
      lonNum = parseFloat(lon);
      offset = parseFloat(utc);
      if (isNaN(latNum) || isNaN(lonNum) || isNaN(offset)) {
        setError("Enlem, boylam ve saat dilimini doğru gir.");
        return;
      }
    } else {
      const c = COUNTRIES[+countryIdx].cities[+cityIdx];
      latNum = c[1];
      lonNum = c[2];
      offset = tzOffsetHours(c[3] as string, Y, M, D, hh, mm);
      if (offset === null) {
        setError("Saat dilimi okunamadı, lütfen 'Diğer' modundan elle gir.");
        return;
      }
    }

    setShowShareFallback(false);
    setResult(computeRisingSign(Y, M, D, hh, mm, latNum, lonNum, offset));
  }

  return (
    <section className="rising-calc" style={{ padding: "40px 0" }}>
      <div className="site-container">
        <div
          style={{
            maxWidth: "560px",
            margin: "0 auto",
            background: "white",
            borderRadius: "20px",
            boxShadow: "0 8px 40px rgba(30, 58, 138, 0.12)",
            overflow: "hidden",
          }}
        >
          {/* Başlık */}
          <div
            style={{
              padding: "28px 24px 8px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: C.gold,
                fontWeight: 600,
                margin: "0 0 10px",
              }}
            >
              Astrolog Demet Baltacı
            </p>
            <h1
              style={{
                fontSize: "clamp(26px, 6vw, 34px)",
                fontWeight: 700,
                color: C.primary,
                margin: "0 0 10px",
                lineHeight: 1.15,
              }}
            >
              Yükselen Burcunu Öğren
            </h1>
            <p
              style={{
                color: C.textDim,
                fontSize: "15px",
                lineHeight: 1.5,
                margin: "0 auto 8px",
                maxWidth: "44ch",
              }}
            >
              Yükselen burç, doğduğun an doğu ufkunda yükselen burçtur. Doğum bilgilerini gir, yükselenini saniyeler
              içinde bul.
            </p>
          </div>

          {/* Form */}
          <div style={{ padding: "16px 24px 28px" }}>
            <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="rs-date">
                  Doğum tarihi
                </label>
                <input id="rs-date" type="date" style={inputStyle} value={date} onChange={(e) => setDate(e.target.value)} />
              </div>
              <div style={{ flex: 1 }}>
                <label style={labelStyle} htmlFor="rs-time">
                  Doğum saati
                </label>
                <input id="rs-time" type="time" style={inputStyle} value={time} onChange={(e) => setTime(e.target.value)} />
              </div>
            </div>

            <div style={{ marginBottom: "16px" }}>
              <label style={labelStyle} htmlFor="rs-country">
                Ülke
              </label>
              <select id="rs-country" style={inputStyle} value={countryIdx} onChange={(e) => onCountryChange(e.target.value)}>
                {COUNTRIES.map((c, i) => (
                  <option key={c.name} value={i}>
                    {c.name}
                  </option>
                ))}
                <option value="manual">Diğer (elle koordinat gir)</option>
              </select>
            </div>

            {!isManual ? (
              <div style={{ marginBottom: "16px" }}>
                <label style={labelStyle} htmlFor="rs-city">
                  Şehir
                </label>
                <select id="rs-city" style={inputStyle} value={cityIdx} onChange={(e) => setCityIdx(e.target.value)}>
                  <option value="" disabled>
                    Şehir seçiniz
                  </option>
                  {cities.map((c, i) => (
                    <option key={`${c[0]}-${i}`} value={i}>
                      {c[0]}
                    </option>
                  ))}
                </select>
                <span style={{ fontSize: "12px", color: C.textDim, marginTop: "5px", display: "block", lineHeight: 1.4 }}>
                  Şehrini bulamazsan en yakın büyük şehri seç ya da ülkeden &quot;Diğer&quot; ile koordinat gir.
                </span>
              </div>
            ) : (
              <div style={{ marginBottom: "16px" }}>
                <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle} htmlFor="rs-lat">
                      Enlem
                    </label>
                    <input id="rs-lat" type="number" step="0.0001" style={inputStyle} placeholder="örn. 41.01" value={lat} onChange={(e) => setLat(e.target.value)} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle} htmlFor="rs-lon">
                      Boylam
                    </label>
                    <input id="rs-lon" type="number" step="0.0001" style={inputStyle} placeholder="örn. 28.98" value={lon} onChange={(e) => setLon(e.target.value)} />
                  </div>
                </div>
                <label style={labelStyle} htmlFor="rs-utc">
                  Saat dilimi (UTC farkı)
                </label>
                <input id="rs-utc" type="number" step="0.5" style={inputStyle} placeholder="örn. 3" value={utc} onChange={(e) => setUtc(e.target.value)} />
                <span style={{ fontSize: "12px", color: C.textDim, marginTop: "5px", display: "block", lineHeight: 1.4 }}>
                  Doğum anındaki saat farkını yaz (yaz saati varsa dahil et).
                </span>
              </div>
            )}

            <button
              type="button"
              onClick={calculate}
              style={{
                width: "100%",
                marginTop: "6px",
                padding: "15px",
                border: "none",
                cursor: "pointer",
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: "16px",
                color: "#1a1407",
                background: `linear-gradient(180deg, #E7CE83, ${C.gold})`,
                boxShadow: "0 14px 30px -12px rgba(212,175,55,.5)",
              }}
            >
              Yükselenimi Hesapla
            </button>

            {error && <div style={{ color: "#DC2626", fontSize: "13px", marginTop: "12px" }}>{error}</div>}

            {/* Sonuç */}
            {result && (
              <div
                style={{
                  marginTop: "22px",
                  textAlign: "center",
                  padding: "24px 16px",
                  background: C.bg,
                  borderRadius: "16px",
                  border: `1px solid ${C.border}`,
                }}
              >
                <div style={{ fontSize: "64px", lineHeight: 1, color: C.gold }}>{result.sign.g}</div>
                <div style={{ fontSize: "30px", fontWeight: 700, color: C.primary, marginTop: "10px" }}>
                  {result.sign.tr}
                  <span style={{ fontSize: "15px", fontWeight: 600, color: C.gold, marginLeft: "8px" }}>
                    {result.degreeInSign.toFixed(1)}°
                  </span>
                </div>
                <div style={{ color: C.textDim, fontSize: "14.5px", marginTop: "8px", lineHeight: 1.5 }}>
                  {result.sign.t}
                </div>
                <div style={{ fontSize: "12px", color: C.textDim, marginTop: "12px", letterSpacing: "0.04em" }}>
                  {result.sign.el} grubu · Yükselen {result.sign.tr} · UTC
                  {result.offset >= 0 ? "+" : ""}
                  {result.offset}
                </div>

                {/* Yükselen burç açıklama metni (SEO + kullanıcı) */}
                {RISING_DESCRIPTIONS[result.index] && (
                  <div
                    style={{
                      marginTop: "20px",
                      paddingTop: "20px",
                      borderTop: `1px solid ${C.border}`,
                      textAlign: "left",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "10px" }}>
                      <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: C.primary, margin: 0 }}>
                        {result.sign.tr} Yükselen
                      </h3>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: C.primary,
                          background: "rgba(212,175,55,0.16)",
                          border: `1px solid rgba(212,175,55,0.4)`,
                          borderRadius: "999px",
                          padding: "3px 10px",
                          whiteSpace: "nowrap",
                        }}
                      >
                        Yöneticisi: {RISING_DESCRIPTIONS[result.index].ruler}
                      </span>
                    </div>
                    <p style={{ color: "#475569", fontSize: "14.5px", lineHeight: 1.75, margin: 0 }}>
                      {RISING_DESCRIPTIONS[result.index].text}
                    </p>
                  </div>
                )}

                {/* CTA — Video: yükselen burca göre ilgili haftalık yorum sayfası (yoksa YouTube) */}
                {(() => {
                  const vHref = weeklyHref(result.index);
                  const external = !vHref.startsWith("/");
                  return (
                <a
                  className="rs-cta rs-cta-video"
                  href={vHref}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    marginTop: "16px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    textAlign: "left",
                    color: "white",
                    background: `linear-gradient(180deg, ${C.primaryLight}, ${C.primary})`,
                    boxShadow: "0 14px 30px -14px rgba(59,130,246,.6)",
                  }}
                >
                  <span aria-hidden="true" style={{ fontSize: "18px" }}>▶</span>
                  <span style={{ flex: 1 }}>
                    {result.sign.tr} yükselen için bu haftanın videosu
                    <small style={{ display: "block", fontWeight: 500, fontSize: "12.5px", opacity: 0.85, marginTop: "2px" }}>
                      {external ? "Demet Baltacı YouTube kanalı" : `${result.sign.tr} burcu haftalık yorum sayfası`}
                    </small>
                  </span>
                  <span aria-hidden="true" style={{ opacity: 0.75 }}>→</span>
                </a>
                  );
                })()}

                {/* CTA — WhatsApp / rektifikasyon */}
                <a
                  className="rs-cta rs-cta-wa"
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                    `Merhaba, yükselen burcum ${result.sign.tr} çıktı. Doğum saatimden tam emin değilim, rektifikasyon ve danışmanlık hakkında bilgi almak istiyorum.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    width: "100%",
                    marginTop: "10px",
                    padding: "14px 16px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    textAlign: "left",
                    color: "#06351b",
                    background: "linear-gradient(180deg, #2bdd72, #1eb257)",
                    boxShadow: "0 14px 30px -14px rgba(37,211,102,.6)",
                  }}
                >
                  <span aria-hidden="true" style={{ fontSize: "18px" }}>✆</span>
                  <span style={{ flex: 1 }}>
                    Tam saatinden emin değil misin?
                    <small style={{ display: "block", fontWeight: 500, fontSize: "12.5px", opacity: 0.85, marginTop: "2px" }}>
                      Demet Baltacı ile rektifikasyon — WhatsApp&apos;tan yaz
                    </small>
                  </span>
                  <span aria-hidden="true" style={{ opacity: 0.75 }}>→</span>
                </a>

                {/* Paylaşım butonu */}
                <button
                  type="button"
                  className="rs-cta rs-share-btn"
                  onClick={() => handleShare(result.sign)}
                  aria-expanded={showShareFallback}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "8px",
                    width: "100%",
                    marginTop: "10px",
                    padding: "13px 16px",
                    borderRadius: "12px",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "14px",
                    color: C.primary,
                    background: "white",
                    border: `2px solid ${C.border}`,
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                    <circle cx="18" cy="5" r="3" />
                    <circle cx="6" cy="12" r="3" />
                    <circle cx="18" cy="19" r="3" />
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                  </svg>
                  Sonucu Paylaş
                </button>

                {/* Masaüstü fallback paylaşım linkleri (navigator.share yoksa) */}
                {showShareFallback && (
                  <div style={{ display: "flex", gap: "8px", marginTop: "10px", justifyContent: "center", flexWrap: "wrap" }}>
                    <a
                      className="rs-share-link"
                      href={`https://wa.me/?text=${encodeURIComponent(shareText(result.sign))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, minWidth: "90px", textAlign: "center", padding: "10px", borderRadius: "10px", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "#06351b", background: "#dcfce7" }}
                    >
                      WhatsApp
                    </a>
                    <a
                      className="rs-share-link"
                      href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText(result.sign))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, minWidth: "90px", textAlign: "center", padding: "10px", borderRadius: "10px", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "#1F2937", background: "#E2E8F0" }}
                    >
                      X
                    </a>
                    <a
                      className="rs-share-link"
                      href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(PAGE_URL)}&quote=${encodeURIComponent(shareText(result.sign))}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ flex: 1, minWidth: "90px", textAlign: "center", padding: "10px", borderRadius: "10px", textDecoration: "none", fontSize: "13px", fontWeight: 600, color: "white", background: "#1877F2" }}
                    >
                      Facebook
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .rs-cta {
          transition: transform 0.12s ease;
        }
        .rs-cta:hover {
          transform: translateY(-1px);
        }
        /* Görünür klavye odağı (erişilebilirlik) */
        :global(.rising-calc) a:focus-visible,
        :global(.rising-calc) button:focus-visible,
        :global(.rising-calc) input:focus-visible,
        :global(.rising-calc) select:focus-visible {
          outline: 3px solid #1e3a8a;
          outline-offset: 2px;
        }
        @media (prefers-reduced-motion: reduce) {
          .rs-cta {
            transition: none;
          }
          .rs-cta:hover {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
