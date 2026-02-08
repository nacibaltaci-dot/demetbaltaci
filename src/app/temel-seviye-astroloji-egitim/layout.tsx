import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yönlendiriliyor...",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.demetbaltaci.com/temel-seviye-astroloji-egitimi/",
  },
};

export default function RedirectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
