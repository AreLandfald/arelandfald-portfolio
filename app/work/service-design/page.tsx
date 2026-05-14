import type { Metadata } from "next";
import SlideMenu from "@/components/SlideMenu";
import FadeInObserver from "@/components/FadeInObserver";
import BodyClass from "@/components/BodyClass";

export const metadata: Metadata = {
  title: "Service design",
  description: "Service design project for Østensjø — Municipality of Oslo."
};

const userJourney = [
  {
    title: "1. Home",
    text: "User is isolated and physically inactive.",
    img: "/Assets/Ostensjo/brukerreise1.png"
  },
  {
    title: "2. Onboarding",
    text: "The user receives information where they are, through both analog and digital channels. Their doctor recommends publicly funded exercise programs.",
    img: "/Assets/Ostensjo/onboarding1.png"
  },
  {
    title: "3. DNT",
    text: "The user is welcomed by DNT\u2019s volunteers and introduced to a wide range of activities that meet different social and physical needs.",
    img: "/Assets/Ostensjo/dnt.logo.png"
  },
  {
    title: "4. Collaboration",
    text: "When users need assisted training, they are referred to the district\u2019s activity houses \u2014 places they already know through DNT events hosted there.",
    img: "/Assets/Ostensjo/Collaboration.png"
  },
  {
    title: "5. Activity House",
    text: "Associated with activity, not care.",
    img: "/Assets/Ostensjo/brukerreise5.png"
  }
];

export default function ServiceDesignPage() {
  return (
    <>
      <BodyClass className="light-hero" />
      <FadeInObserver />
      <SlideMenu activeSlug="service-design" />

      <section className="hero-section">
        <img
          src="/Assets/Ostensjo/ostensjo.forsidebilde.jpg"
          alt="Service design — Østensjø"
          className="hero-image-full"
        />
        <div className="hero-title-overlay">
          <h1 className="project-title-hero">Service design</h1>
        </div>
        <div className="hero-meta-overlay">
          <span>Type: Service design</span>
          <span className="meta-divider">|</span>
          <span>Year: 2025</span>
          <span className="meta-divider">|</span>
          <span>Role: Designer</span>
          <span className="meta-divider">|</span>
          <span>Client: Municipality of Oslo</span>
        </div>
        <div className="scroll-indicator">↓</div>
      </section>

      <main className="project-main">
        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Design a service for early retirees (60&ndash;75) in Østensjø, aimed at facilitating organised physical activity to help them stay independent from public healthcare for as long as possible &mdash; with one constraint: no budget.
          </h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Background</h2>
          </div>
          <div className="section-content">
            <p>
              An aging population is growing. We&apos;re living longer and there are more of us. This is fundamentally positive, but it challenges how we organize society. The public sector cannot bear full responsibility for the elderly alone.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Research by visiting Østensjø, and meeting:
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px", marginBottom: 200 }}>
          <div className="we-have-met-grid">
            {[
              { n: 6, label: "Employees from organized training groups for retirees" },
              { n: 7, label: "Users from target group" },
              { n: 20, label: "Informal conversations with target group" }
            ].map((c) => (
              <div
                key={c.n}
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background: "#F4FFAD",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "12%",
                  color: "#3D4A00"
                }}
              >
                <div style={{ fontSize: "clamp(3.5rem, 9vw, 6rem)", fontWeight: 700, lineHeight: 1 }}>{c.n}</div>
                <div style={{ fontSize: "clamp(0.85rem, 1.1vw, 1.05rem)", marginTop: 16, lineHeight: 1.35 }}>{c.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 800, padding: "0 40px", marginBottom: 200 }}>
          <div className="we-have-met-images">
            <img src="/Assets/Ostensjo/we.have.met.jpg" alt="Visit at Østensjø" />
            <img src="/Assets/Ostensjo/we.have.met2.jpg" alt="Visit at Østensjø" />
            <img src="/Assets/Ostensjo/we.have.met3.jpg" alt="Visit at Østensjø" />
            <img src="/Assets/Ostensjo/we.have.met4.jpg" alt="Visit at Østensjø" />
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            The research revealed four key findings that shaped the design of our solution.
          </h2>
        </section>

        <section className="section-full fade-in findings-section">
          <div className="findings-grid">
            {[
              {
                title: "Community",
                text: "Social connection is a primary motivation for attending organised training groups.",
                img: "/Assets/Ostensjo/nokkelfunn1.png"
              },
              {
                title: "Information",
                text: "Communication should not only provide information, but also help the target group feel both reached and seen.",
                img: "/Assets/Ostensjo/nokkelfunn2.png"
              },
              {
                title: "Prevention",
                text: "Recommendations for physical activity are often introduced only after people begin experiencing health issues.",
                img: "/Assets/Ostensjo/nokkelfunn3.png"
              },
              {
                title: "Identity",
                text: "The target group needs to feel represented.",
                img: "/Assets/Ostensjo/nokkelfunn4.png"
              }
            ].map((f) => (
              <article key={f.title} className="findings-card">
                <h3 className="findings-card-title">{f.title}</h3>
                <p className="findings-card-text">{f.text}</p>
                <div className="findings-card-image">
                  <img src={f.img} alt={f.title} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Free activities exist, yet many retirees never join.
          </h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>DNT + Østensjø = &lt;3</h2>
          </div>
          <div className="section-content">
            <p>
              Although many free activities already existed, they remained underused. Our solution was to connect public exercise programs for retirees with DNT to create a more engaging and socially motivating service.
            </p>
            <p>
              DNT holds a strong position in Norwegian culture and is widely associated with nature, community, and an active lifestyle. For many, it represents an organization they aspire to be part of &mdash; something that can feel more inspiring and identity-building than a publicly funded exercise program for older adults.
            </p>
            <div className="dnt-concept-diagram">
              <div className="dnt-concept-item">
                <img src="/Assets/Ostensjo/dnt.logo.png" alt="DNT logo" />
              </div>
              <div className="dnt-concept-plus" aria-hidden="true">+</div>
              <div className="dnt-concept-item">
                <img src="/Assets/Ostensjo/ostensjo.kart.png" alt="Map of Østensjø" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Our solution.
          </h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>The concept.</h2>
          </div>
          <div className="section-content">
            <p>
              Our concept includes onboarding, collaboration, a structured transition, rebranding, community events, and volunteer hiking hosts.
            </p>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px", marginBottom: 200 }}>
          <div className="we-have-met-grid">
            {["Rebranding", "Onboarding", "Collaboration"].map((label) => (
              <div
                key={label}
                style={{
                  aspectRatio: "1 / 1",
                  borderRadius: "50%",
                  background: "#F4FFAD",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  padding: "12%",
                  color: "#3D4A00",
                  fontSize: "clamp(1.5rem, 2.6vw, 2.4rem)",
                  fontWeight: 700,
                  lineHeight: 1.1
                }}
              >
                {label}
              </div>
            ))}
          </div>
        </section>

        <section className="section-full fade-in findings-section findings-section--5col">
          <div className="findings-grid findings-grid--5col">
            {userJourney.map((step) => (
              <article key={step.title} className="findings-card">
                <h3 className="findings-card-title">{step.title}</h3>
                <p className="findings-card-text">{step.text}</p>
                <div className="findings-card-image">
                  <img src={step.img} alt={step.title} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Rebranding &mdash; <em>Those who need the services the most are often the least likely to use them.</em>
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 800, padding: "0 40px", margin: "0 auto 80px" }}>
          <img
            src="/Assets/Ostensjo/rebranding.png"
            alt="DNT rebranding"
            style={{ width: "85%", height: "auto", display: "block", margin: "0 auto" }}
          />
        </section>

        <section className="section-with-heading section-with-heading--tight fade-in">
          <div className="section-heading">
            <h2>DNT More Approachable</h2>
          </div>
          <div className="section-content">
            <p>
              We redesigned DNT to feel more welcoming and less intimidating to people with little experience in physical activity.
            </p>
          </div>
        </section>

        <section className="section-with-heading section-with-heading--tight-top fade-in">
          <div className="section-heading">
            <h2>Renaming the Program</h2>
          </div>
          <div className="section-content">
            <p>
              We renamed DNT Senior to DNT Godt Voksen to create a more inspiring identity that the target group would want to be part of.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Posters embody DNT&apos;s rebranded identity.
          </h2>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Posters for activities</h2>
          </div>
          <div className="section-content">
            <p>
              The activities are offered at different levels of difficulty and social intensity. Some are designed to appeal to more introverted participants, while others emphasize community and social connection.
            </p>
            <div className="poster-row">
              <img src="/Assets/Ostensjo/poster.aktivitet2.png" alt="Activity poster" />
              <img src="/Assets/Ostensjo/poster.aktivitet1.png" alt="Activity poster" />
              <img src="/Assets/Ostensjo/poster.aktivitet3.png" alt="Activity poster" />
            </div>
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Posters for individual training</h2>
          </div>
          <div className="section-content">
            <p>
              Not everyone is comfortable joining group activities. We therefore designed multilingual posters near local walking routes to introduce walking as an accessible form of physical activity, particularly relevant in Østensjø, where many residents have minority backgrounds.
            </p>
            <div className="poster-row">
              <img src="/Assets/Ostensjo/poster.fast1.png" alt="Walking poster" />
              <img src="/Assets/Ostensjo/poster.fast2.png" alt="Walking poster" />
              <img src="/Assets/Ostensjo/poster.fast3.png" alt="Walking poster" />
            </div>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Rebranding &mdash; public senior centers for exercise.
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 800, padding: "0 40px", margin: "0 auto 80px" }}>
          <img
            src="/Assets/Ostensjo/man57.png"
            alt="Rebranded senior activity center"
            style={{ width: "85%", height: "auto", display: "block", margin: "0 auto" }}
          />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Changing associations</h2>
          </div>
          <div className="section-content">
            <p>
              To make the service feel more relevant, we renamed Oppsal Treffsenter 60+, a municipal training center for older adults, to Oppsal Activity House. Together with a broader range of activities and small adjustments to the daily schedule, this could help attract more retirees in need of assisted exercise.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Onboarding &mdash; <em>reaching more inactive early retirees and including them in public activity programs.</em>
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 800, padding: "0 40px", margin: "0 auto 80px" }}>
          <div className="image-pair">
            <img src="/Assets/Ostensjo/poster.aktivitet2.png" alt="Activity poster" />
            <img src="/Assets/Ostensjo/lege.png" alt="Doctor referral" />
          </div>
        </section>

        <section className="section-with-heading section-with-heading--ultra-tight fade-in">
          <div className="section-heading">
            <h2>Analog marketing</h2>
          </div>
          <div className="section-content">
            <p>
              Promote the service through printed materials in places where the target group already spends time, such as GP clinics, shopping centers, hair salons, grocery stores, and pharmacies.
            </p>
          </div>
        </section>

        <section className="section-with-heading section-with-heading--ultra-tight section-with-heading--ultra-tight-top fade-in">
          <div className="section-heading">
            <h2>Prescription on exercise</h2>
          </div>
          <div className="section-content">
            <p>
              Introduce a more systematic way for doctors to share information about local exercise programs, for example by handing out brochures to all patients over 60.
            </p>
          </div>
        </section>

        <section className="section-with-heading section-with-heading--ultra-tight-top fade-in">
          <div className="section-heading">
            <h2>Staff training</h2>
          </div>
          <div className="section-content">
            <p>
              Train doctors and other health professionals to refer older adults to DNT or local activity houses based on their physical ability and needs.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            Collaboration &mdash; seamless transition between DNT and local activity houses.
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 800, padding: "0 40px", margin: "0 auto 80px" }}>
          <img
            src="/Assets/Ostensjo/Collaboration.png"
            alt="Collaboration between DNT and local activity houses"
            style={{ width: "85%", height: "auto", display: "block", margin: "0 auto" }}
          />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Relationship between services</h2>
          </div>
          <div className="section-content">
            <ol style={{ paddingLeft: "1.4em", margin: 0 }}>
              <li style={{ marginBottom: 20 }}>
                DNT uses available spaces in local activity houses to host events and activities.
              </li>
              <li>
                Participants experience the activity houses firsthand, helping them form a positive impression and feel more comfortable using them as they grow older.
              </li>
            </ol>
          </div>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px", margin: "0 auto 80px" }}>
          <img
            src="/Assets/Ostensjo/overgang.png"
            alt="Transition between DNT and local activity houses"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Transition</h2>
          </div>
          <div className="section-content">
            <p>
              Those who need additional support are referred to local activity houses, while those who do not require individual follow-up can participate in DNT&apos;s programs.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            An exchange of resources.
          </h2>
        </section>

        <section className="section-full fade-in" style={{ maxWidth: 1400, padding: "0 40px", margin: "0 auto 80px" }}>
          <img
            src="/Assets/Ostensjo/samarbeid.nettside.png"
            alt="Partnership between DNT and Østensjø district"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Sponsoring</h2>
          </div>
          <div className="section-content">
            <p>
              The collaboration would work as a partnership between DNT and Østensjø district.
            </p>
            <p>
              Selected DNT activities would be sponsored by the district and offered free of charge to residents aged 60&ndash;75.
            </p>
            <p>
              Municipal staff confirmed that the district could contribute facilities, recruitment, equipment, and marketing in return. BUA&apos;s existing partnership with DNT also suggests that this type of collaboration is feasible.
            </p>
          </div>
        </section>

        <section className="section-statement fade-in">
          <h2 className="statement-text section-tabloid-heading" style={{ fontSize: "3rem" }}>
            We have made dramatic build-up to a physically active retirement in Østensjø.
          </h2>
        </section>

        <section className="section-full fade-in findings-section findings-section--5col">
          <div className="findings-grid findings-grid--5col">
            {userJourney.map((step) => (
              <article key={`journey2-${step.title}`} className="findings-card">
                <h3 className="findings-card-title">{step.title}</h3>
                <p className="findings-card-text">{step.text}</p>
                <div className="findings-card-image">
                  <img src={step.img} alt={step.title} />
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-with-heading fade-in">
          <div className="section-heading">
            <h2>Credits</h2>
          </div>
          <div className="section-content">
            <p>
              My contributions included service design, concept development, interviews, client meetings, drawing user journeys, and the final presentation.
            </p>
            <p style={{ marginTop: 40, fontSize: "0.95rem", opacity: 0.75 }}>
              A huge thank you to Kester Hvattum-Hermansen, Ingeborg Tangen, and Frida Braathen.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
