"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RedirectPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/temel-seviye-astroloji-egitimi/");
  }, [router]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "50vh",
      flexDirection: "column",
      gap: "16px"
    }}>
      <div style={{
        width: "40px",
        height: "40px",
        border: "4px solid #E2E8F0",
        borderTopColor: "#1E3A8A",
        borderRadius: "50%",
        animation: "spin 1s linear infinite"
      }} />
      <p style={{ color: "#64748B" }}>Yönlendiriliyorsunuz...</p>
      <style jsx>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
