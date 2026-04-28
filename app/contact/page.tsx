import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Are Landfald."
};

export default function ContactPage() {
  return (
    <>
      <header className="project-header">
        <Link href="/" className="back-link">
          ← Back to portfolio
        </Link>
      </header>

      <main className="section-centered" style={{ paddingTop: 140 }}>
        <h1 style={{ fontSize: "2.4rem", marginBottom: 40 }}>Contact</h1>
        <p>Get in touch for design projects, collaborations, or general inquiries.</p>

        <h2 style={{ marginTop: 40 }}>Email</h2>
        <p>
          <a href="mailto:are.landfald@gmail.com">are.landfald@gmail.com</a>
        </p>

        <h2 style={{ marginTop: 40 }}>Location</h2>
        <p>Oslo, Norway</p>
      </main>
    </>
  );
}
