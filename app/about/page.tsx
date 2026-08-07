import Image from "next/image";
import { ArrowLink, InnerHero, PageShell } from "../_components/site";

export const metadata = { title: "About Kaitlyn", description: "Meet Kaitlyn Robinson, the facilitator and guide behind Elevate with Kait." };

export default function AboutPage() {
  return (
    <PageShell><main>
      <InnerHero eyebrow="Kaitlyn Robinson" title="A guide who knows the way back because she has walked it, too." text="Breathwork facilitator. Reiki Master. Yoga teacher. Quantum energy healer. Sound healer. Spiritual mentor. Community builder." image="/images/kait-portrait-opt.jpg" imageAlt="Portrait of Kaitlyn Robinson" />
      <section className="about-story section-pad">
        <div className="about-story-sticky"><p className="section-label">Her story</p><h2>From the pace of the corporate world to the wisdom of the body.</h2></div>
        <div className="about-story-copy">
          <p className="dropcap">Kaitlyn’s earlier career in the corporate world gave her a clear view of what happens when achievement outpaces connection. That experience grew into a deep passion for guiding people back home to themselves: toward the heart, the body, and a life that feels authentically their own.</p>
          <p>Her background in health and fitness evolved into a holistic practice that weaves mindful movement, breathwork, nervous system awareness, subconscious reprogramming, brain-heart coherence, and energy healing.</p>
          <p>After receiving her yoga education in Bali, Indonesia, Kaitlyn began incorporating philosophy and spiritual awareness more deeply into her teaching. She works from the understanding that the mind, body, and spirit are not separate projects, and that meaningful change asks to be felt, not only understood.</p>
          <p>Kaitlyn is also a natural community leader. She loves bringing people together around deeper connection and shared purpose, whether inside a weekly class, a private healing space, or a transformational retreat across the world.</p>
          <blockquote>Her role is not to rush the process. It is to create the safety, presence, and permission for your own wisdom to rise.</blockquote>
        </div>
      </section>
      <section className="about-gallery section-pad">
        <div className="gallery-tall"><Image src="/images/kait-costa-rica-opt.jpg" alt="Kaitlyn in tropical Costa Rica" fill sizes="(max-width: 760px) 100vw, 40vw" className="cover-image" /></div>
        <div className="gallery-small"><Image src="/images/kait-retreat-opt.jpg" alt="Kaitlyn smiling at a retreat" fill sizes="(max-width: 760px) 100vw, 28vw" className="cover-image" /></div>
        <div className="gallery-words"><p>Presence over productivity.</p><p>Compassion over force.</p><p>Depth over quick fixes.</p></div>
      </section>
      <section className="split-cta section-pad dark-section"><div><p className="section-label light">Work with Kaitlyn</p><h2>Ready to meet yourself more fully?</h2></div><div><p>Explore the practices, join a weekly class, or begin a conversation about the kind of support you are seeking.</p><ArrowLink href="/contact" light>Begin the conversation</ArrowLink></div></section>
    </main></PageShell>
  );
}
