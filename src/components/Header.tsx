"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const menuItems = [
  {
    label: "Burç Yorumları",
    href: "/gunluk-burc-yorumlari",
    submenu: [
      { label: "Günlük Burç Yorumları", href: "/gunluk-burc-yorumlari" },
      { label: "Haftalık Burç Yorumları", href: "/haftalik-burc-yorumlari-astroloji" },
      { label: "Aylık Burç Yorumları", href: "/aylik-burc-yorumlari-astroloji" },
      { label: "2026 Burç Yorumları", href: "/2026-burc-yorumlari-astroloji" },
      { label: "Yeniay Yorumları", href: "/yeniay-burc-yorumu-astroloji" },
      { label: "Dolunay Yorumları", href: "/dolunay-burc-yorumu-astroloji" },
    ],
  },
  {
    label: "Burçlar",
    href: "/tum-burclar-astroloji",
    submenu: [
      { label: "Koç Burcu", href: "/tum-burclar-astroloji/koc-burcu-ozellikleri" },
      { label: "Boğa Burcu", href: "/tum-burclar-astroloji/boga-burcu-ozellikleri" },
      { label: "İkizler Burcu", href: "/tum-burclar-astroloji/ikizler-burcu-ozellikleri" },
      { label: "Yengeç Burcu", href: "/tum-burclar-astroloji/yengec-burcu-ozellikleri" },
      { label: "Aslan Burcu", href: "/tum-burclar-astroloji/aslan-burcu-ozellikleri" },
      { label: "Başak Burcu", href: "/tum-burclar-astroloji/basak-burcu-ozellikleri" },
      { label: "Terazi Burcu", href: "/tum-burclar-astroloji/terazi-burcu-ozellikleri" },
      { label: "Akrep Burcu", href: "/tum-burclar-astroloji/akrep-burcu-ozellikleri" },
      { label: "Yay Burcu", href: "/tum-burclar-astroloji/yay-burcu-ozellikleri" },
      { label: "Oğlak Burcu", href: "/tum-burclar-astroloji/oglak-burcu-ozellikleri" },
      { label: "Kova Burcu", href: "/tum-burclar-astroloji/kova-burcu-ozellikleri" },
      { label: "Balık Burcu", href: "/tum-burclar-astroloji/balik-burcu-ozellikleri" },
    ],
  },
  {
    label: "Danışmanlık",
    href: "/dogum-haritasi-astroloji-danismanlik",
    submenu: [
      { label: "Doğum Haritası Analizi", href: "/astroloji-danismanlik" },
      { label: "Sinastri (İlişki Uyumu)", href: "/danismanlik/iliski-astroloji-sinastri" },
      { label: "Solar Return", href: "/danismanlik/solar-return-yillik-ongoru" },
      { label: "Çocuk Haritası", href: "/danismanlik/bebek-cocuk-ergen-dogum-haritasi" },
    ],
  },
  { label: "Eğitimler", href: "/temel-seviye-astroloji-egitim" },
  { label: "Yükselen Burcunu Bul", href: "/yukselen-burc-hesaplama" },
  { label: "SSS", href: "/astroloji-sikca-sorulan-sorular-sss", disabled: true },
  { label: "Hakkımda", href: "/hakkimizda", disabled: true },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: "white", boxShadow: "0 1px 3px rgba(0,0,0,0.1)" }}>
      {/* Top Bar */}
      <div style={{ backgroundColor: "#1E3A8A", color: "white" }}>
        <div className="header-container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "40px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              <a
                href="https://www.youtube.com/@demet.baltaci"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "white", textDecoration: "none" }}
                title="YouTube"
              >
                <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="social-label">YouTube</span>
              </a>
              <a
                href="https://www.instagram.com/demetbaltaci_"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "white", textDecoration: "none" }}
                title="Instagram"
              >
                <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                <span className="social-label">Instagram</span>
              </a>
              <a
                href="https://www.facebook.com/demet.baltaci.astroloji"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "white", textDecoration: "none" }}
                title="Facebook"
              >
                <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="social-label">Facebook</span>
              </a>
              <a
                href="https://x.com/demetbaltaci"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "white", textDecoration: "none" }}
                title="X"
              >
                <svg style={{ width: "14px", height: "14px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span className="social-label">X</span>
              </a>
              <a
                href="https://www.linkedin.com/in/astrolog-demet-baltac%C4%B1-astroloji/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "13px", color: "white", textDecoration: "none" }}
                title="LinkedIn"
              >
                <svg style={{ width: "16px", height: "16px" }} fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="social-label">LinkedIn</span>
              </a>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontSize: "14px" }}>
              <Link href="/" style={{ color: "white", textDecoration: "none", fontWeight: 500 }}>TR</Link>
              <span style={{ opacity: 0.5 }}>|</span>
              <span style={{ color: "white", opacity: 0.5, cursor: "default" }}>EN</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div style={{ borderBottom: "1px solid #f3f4f6" }}>
        <div className="header-container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "80px" }}>
            {/* Logo */}
            <Link href="/" style={{ flexShrink: 0 }}>
              <Image
                src="/images/logo1.png"
                alt="Demet Baltacı"
                width={200}
                height={70}
                style={{ height: "60px", width: "auto" }}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="nav-menu" style={{ display: "none" }}>
              {menuItems.map((item) => (
                <div key={item.href} style={{ position: "relative" }} className="group">
                  <Link href={item.href} className="nav-item">
                    {item.label}
                    {item.submenu && (
                      <svg style={{ width: "12px", height: "12px", marginLeft: "4px", opacity: 0.5, display: "inline" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Desktop Nav - visible on xl screens */}
            <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              {menuItems.map((item) => (
                <div key={item.href} style={{ position: "relative" }} className="dropdown">
                  {item.disabled ? (
                    <span
                      style={{
                        padding: "8px 16px",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#9CA3AF",
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                        cursor: "default"
                      }}
                    >
                      {item.label}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      style={{
                        padding: "8px 16px",
                        fontSize: "14px",
                        fontWeight: 500,
                        color: "#374151",
                        textDecoration: "none",
                        whiteSpace: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        gap: "4px"
                      }}
                    >
                      {item.label}
                      {item.submenu && (
                        <svg style={{ width: "12px", height: "12px", opacity: 0.5 }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                  )}
                  {item.submenu && (
                    <div className="dropdown-menu">
                      <div style={{ padding: "8px 0" }}>
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            style={{
                              display: "block",
                              padding: "10px 16px",
                              fontSize: "14px",
                              color: "#374151",
                              textDecoration: "none"
                            }}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: "8px",
                color: "#1E3A8A",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                display: "none"
              }}
              className="mobile-menu-btn"
              aria-label="Menu"
            >
              <svg style={{ width: "24px", height: "24px" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{ backgroundColor: "white", borderTop: "1px solid #f3f4f6", maxHeight: "80vh", overflowY: "auto" }}>
          <nav style={{ padding: "16px 0" }}>
            {menuItems.map((item) => (
              <div key={item.href} style={{ borderBottom: "1px solid #f9fafb" }}>
                {item.submenu ? (
                  <>
                    <button
                      onClick={() => setOpenSubmenu(openSubmenu === item.href ? null : item.href)}
                      style={{
                        width: "100%",
                        padding: "12px 32px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontSize: "16px",
                        fontWeight: 500,
                        color: "#374151"
                      }}
                    >
                      <span>{item.label}</span>
                      <svg
                        style={{
                          width: "16px",
                          height: "16px",
                          transition: "transform 0.2s",
                          transform: openSubmenu === item.href ? "rotate(180deg)" : "rotate(0)"
                        }}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openSubmenu === item.href && (
                      <div style={{ backgroundColor: "#EFF6FF", padding: "8px 0" }}>
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.href}
                            href={subitem.href}
                            style={{
                              display: "block",
                              padding: "10px 48px",
                              fontSize: "14px",
                              color: "#4B5563",
                              textDecoration: "none"
                            }}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {subitem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : item.disabled ? (
                  <span
                    style={{
                      display: "block",
                      padding: "12px 32px",
                      fontWeight: 500,
                      color: "#9CA3AF",
                      cursor: "default"
                    }}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    style={{
                      display: "block",
                      padding: "12px 32px",
                      fontWeight: 500,
                      color: "#374151",
                      textDecoration: "none"
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}

      <style jsx>{`
        .social-label {
          display: none;
        }
        @media (min-width: 640px) {
          .social-label {
            display: inline;
          }
        }
        @media (max-width: 1279px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
        @media (min-width: 1280px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}
