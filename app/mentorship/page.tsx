import Script from "next/script";
import { InnerHero, PageShell } from "../_components/site";

const MENTORSHIP_URL = "https://links.gabrealinc.com/widget/booking/MNEWAV51nyn7mifw3CBJ";

export const metadata = {
  title: "Mentorship Discovery Call",
  description: "Book a spiritual mentorship discovery call with Kaitlyn Robinson.",
};

export default function MentorshipBookingPage() {
  return (
    <PageShell><main>
      <InnerHero
        eyebrow="Spiritual mentorship"
        title="A conversation for what comes next."
        text="This discovery call is a space to meet, share what you are moving through, and feel into whether Kaitlyn’s private mentorship is the right container for you."
      />
      <section className="booking-page-section section-pad" id="book-mentorship">
        <div className="contact-embed booking-page-embed" aria-label="Book a mentorship discovery call with Kaitlyn">
          <div className="booking-intro"><span>✦</span><div><p className="eyebrow">Mentorship discovery call</p><h3>Choose a time that feels aligned.</h3></div></div>
          <iframe
            src={MENTORSHIP_URL}
            allow="payment"
            className="booking-iframe"
            scrolling="no"
            id="MNEWAV51nyn7mifw3CBJ_1787362131221"
            title="Book a mentorship discovery call with Kaitlyn"
          />
          <p className="booking-fallback">Calendar not appearing? <a href={MENTORSHIP_URL} target="_blank" rel="noreferrer">Open the mentorship calendar in a new window.</a></p>
          <Script src="https://links.gabrealinc.com/js/form_embed.js" strategy="afterInteractive" />
        </div>
      </section>
    </main></PageShell>
  );
}
