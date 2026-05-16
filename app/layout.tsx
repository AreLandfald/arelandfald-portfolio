import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff"
};

export const metadata: Metadata = {
  metadataBase: new URL("https://arelandfald.no"),
  title: {
    default: "Are Landfald — Portfolio",
    template: "%s — Are Landfald"
  },
  description:
    "Portfolio of Are Landfald, a design student at the Oslo School of Architecture and Design (AHO).",
  applicationName: "Are Landfald",
  appleWebApp: {
    capable: true,
    title: "Are Landfald",
    statusBarStyle: "default"
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" }
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "Are Landfald — Portfolio",
    description:
      "Portfolio of Are Landfald, a design student at the Oslo School of Architecture and Design (AHO).",
    url: "https://arelandfald.no",
    siteName: "Are Landfald",
    locale: "no_NO",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no">
      <body>
        {children}
      </body>
    </html>
  );
}
