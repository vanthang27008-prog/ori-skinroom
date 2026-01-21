import type { Metadata } from "next";
import "./globals.css";

const SITE_NAME = "Ori Skinroom";
const SITE_URL = "http://localhost:3000";
const DESCRIPTION =
  "Ori Skinroom là spa chăm sóc da nhẹ nhàng, sạch sâu, phục hồi da nhạy cảm. Đặt lịch nhanh, tư vấn 1:1.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Spa chăm sóc da & facial chuyên sâu`,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  keywords: [
    "spa chăm sóc da",
    "facial",
    "làm sạch sâu",
    "phục hồi da nhạy cảm",
    "massage thư giãn",
    "spa gần đây",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: `${SITE_NAME} | Spa chăm sóc da & facial chuyên sâu`,
    description: DESCRIPTION,
    images: [
      {
        url: "/images/og.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Spa chăm sóc da & facial chuyên sâu`,
    description: DESCRIPTION,
    images: ["/images/og.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
