import Image from "next/image";
import { ArrowLink, InnerHero, PageShell } from "../_components/site";

const MENTORSHIP_DISCOVERY_URL = "/mentorship#book-mentorship";

const offers = [
  { id: "regulate", num: "01", title: "Breathwork", subtitle: "Move beyond the mind and into the wisdom of the body.", text: "Kaitlyn’s 90-minute breathwork journeys are intentionally paced and deeply held. Guided conscious breathing may be woven with grounding, sound, visualization, gentle movement, rest, and integration.", tags: ["Private", "Small groups", "90 minutes"] },
  { id: "reconnect", num: "02", title: "Reiki + Quantum Energy", subtitle: "A quiet recalibration for the parts of you words cannot reach.", text: "Subtle-energy sessions create a restorative space to slow down, receive, and reconnect. Kaitlyn works intuitively, honoring your boundaries, your inner authority, and the pace your system is ready for.", tags: ["1:1", "Energetic support", "Intuitive"] },
  { id: "sound", num: "03", title: "Sound Healing", subtitle: "Let resonance carry what effort cannot.", text: "Crystal bowls and vibrational sound invite deep rest, energetic clearing, and integration. Sound healing is available as its own experience and is often woven through breathwork, gatherings, and retreats.", tags: ["Private", "Groups", "Events"] },
  { id: "movement", num: "04", title: "Yoga + Mindful Movement", subtitle: "Movement as listening, not performance.", text: "Kaitlyn’s classes weave mindful movement, breath, philosophy, and spiritual awareness. The practice centers presence, nervous system balance, and an honest relationship with the body you are in today.", tags: ["Weekly classes", "Private", "Retreats"] },
  { id: "mentorship", num: "05", title: "Spiritual Mentorship", subtitle: "Support for the threshold between who you were and who you’re becoming.", text: "A private, grounded container for self-inquiry, subconscious pattern work, brain-heart coherence, and embodied integration. The aim is not dependence on a guide, but deeper trust in your own guidance.", tags: ["1:1", "Integration", "Ongoing"] },
  { id: "facilitation", num: "06", title: "Private Groups + Facilitation", subtitle: "Gatherings that become more than a moment on the calendar.", text: "Kaitlyn curates breathwork, sound, movement, ceremony, and connection for private group sessions, events, workshops, and retreats. Each experience is shaped around the people, purpose, and energy in the room.", tags: ["Custom", "Groups", "Events + Retreats"] },
];

export const metadata = { title: "Offers", description: "Explore breathwork, Reiki, quantum energy work, sound healing, yoga, mentorship, and facilitation with Kaitlyn." };

export default function OffersPage() {
  return (
    <PageShell><main>
      <InnerHero eyebrow="Ways to work together" title="Meet yourself where you are." text="Every offering is a doorway. The modality matters, but the way you are held matters more: with consent, compassion, presence, and respect for your own timing." image="/images/kait-sound-healing-opt.jpg" imageAlt="Kaitlyn offering sound healing by the ocean" />
      <section className="offers-intro section-pad">
        <p className="section-label">A different starting point</p>
        <h2>Choose by what your system is asking for, not by what you think you should do.</h2>
      </section>
      <section className="offer-list section-pad">
        {offers.map((offer) => (
          <article className="offer-row" id={offer.id} key={offer.num}>
            <div className="offer-number">{offer.num}</div>
            <div><p className="eyebrow">{offer.subtitle}</p><h2>{offer.title}</h2></div>
            <div className="offer-details"><p>{offer.text}</p><div className="tag-row">{offer.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{offer.id === "mentorship" && <ArrowLink href={MENTORSHIP_DISCOVERY_URL} dark>Book a discovery call</ArrowLink>}{offer.id === "facilitation" && <ArrowLink href="mailto:kait@elevatewithkait.com?subject=Private%20Group%20or%20Facilitation%20Inquiry" dark>Inquire about facilitation</ArrowLink>}</div>
          </article>
        ))}
      </section>
      <section className="split-cta section-pad dark-section">
        <div><p className="section-label light">Not sure where to begin?</p><h2>You do not need to arrive with the answer.</h2></div>
        <div><p>Share what you are moving through and what you are longing to feel. Together, you and Kaitlyn can choose the experience that meets you there.</p><ArrowLink href="/contact" light>Connect with Kaitlyn</ArrowLink></div>
      </section>
      <section className="wide-image"><Image src="/images/kait-sound-seated-opt.jpg" alt="Kaitlyn offering sound healing in the desert" fill sizes="100vw" className="cover-image" /></section>
    </main></PageShell>
  );
}
