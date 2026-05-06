import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";

export const metadata: Metadata = {
  title: "Service design",
  description: "Service design project (in progress)."
};

export default function ServiceDesignPage() {
  return (
    <>
      <SlideMenu activeSlug="service-design" />
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px",
          textAlign: "center"
        }}
      >
        <div>
          <h1 style={{ fontFamily: "GeistRegular, sans-serif", fontSize: "2.4rem", margin: "0 0 16px" }}>
            Service design
          </h1>
          <p style={{ opacity: 0.55, fontSize: "1rem" }}>Coming soon.</p>
        </div>
      </main>
    </>
  );
}
