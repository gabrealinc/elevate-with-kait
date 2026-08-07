import { ArrowLink, BOOKING_URL, InnerHero, PageShell } from "../_components/site";

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
        <div className="embed-placeholder contact-embed" aria-label="Book a session with Kaitlyn"><span>✦</span><p className="eyebrow">Book with Kaitlyn</p><h3>Choose a time that feels aligned.</h3><p className="booking-copy">View Kaitlyn’s availability and reserve a time for your private session. For groups, events, or retreat facilitation, use the direct email option beside this calendar.</p><ArrowLink href={BOOKING_URL} dark external>Open booking calendar</ArrowLink></div>
      </section>
      <section className="contact-close section-pad"><p>You don’t have to have the right words.</p><h2>Presence is enough.<br />Curiosity is enough.<br />You are enough.</h2></section>
    </main></PageShell>
  );
}
