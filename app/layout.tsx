import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://arelandfald.no"),
  title: {
    default: "Are Landfald — Portfolio",
    template: "%s — Are Landfald"
  },
  description:
    "Portfolio of Are Landfald, a design student at the Oslo School of Architecture and Design (AHO).",
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
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
