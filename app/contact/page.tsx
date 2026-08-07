import { ArrowLink, InnerHero, PageShell } from "../_components/site";

export const metadata = { title: "Contact + Booking", description: "Connect with Kaitlyn to book a session, class, retreat, or private group experience." };

export default function ContactPage() {
  return (
    <PageShell><main>
      <InnerHero eyebrow="Contact + booking" title="Tell me where you are. We’ll begin there." text="Whether you know exactly what you want or only know that something needs to shift, you are welcome to reach out." />
      <section className="contact-layout section-pad">
        <div className="contact-options">
          <p className="section-label">Choose your doorway</p>
          <h2>What are you reaching for?</h2>
          <div className="contact-option"><span>01</span><div><h3>Private healing support</h3><p>Breathwork, Reiki, quantum energy work, sound healing, or mentorship.</p></div></div>
          <div className="contact-option"><span>02</span><div><h3>Classes + community</h3><p>Weekly yoga and upcoming group practices.</p></div></div>
          <div className="contact-option"><span>03</span><div><h3>Groups + facilitation</h3><p>Planning a private group session, event, or retreat? Invite Kaitlyn to create and facilitate a custom experience for your people.</p><ArrowLink href="mailto:kait@elevatewithkait.com?subject=Private%20Group%20or%20Facilitation%20Inquiry" dark>Email Kaitlyn</ArrowLink></div></div>
          <div className="contact-option"><span>04</span><div><h3>Retreats</h3><p>Questions about Egypt, Costa Rica, or future journeys.</p></div></div>
        </div>
        <div className="embed-placeholder contact-embed" aria-label="Contact and booking form coming soon"><span>✦</span><p className="eyebrow">Start a conversation</p><h3>Contact + booking portal coming soon</h3><p>This space is ready for the GoHighLevel form and scheduling embed.</p></div>
      </section>
      <section className="contact-close section-pad"><p>You don’t have to have the right words.</p><h2>Presence is enough.<br />Curiosity is enough.<br />You are enough.</h2></section>
    </main></PageShell>
  );
}
