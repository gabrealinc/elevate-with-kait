import { ArrowLink, InnerHero, PageShell } from "../_components/site";

export const metadata = { title: "Weekly Classes", description: "View weekly yoga, breathwork, and sound healing classes with Kait." };

export default function SchedulePage() {
  return (
    <PageShell><main>
      <InnerHero eyebrow="Weekly practice" title="A rhythm your nervous system can trust." text="Return to breath, movement, and presence in community. Kait’s weekly classes are designed to meet you in real life, not ask you to perform your way out of it." image="/images/kait-retreat-opt.jpg" imageAlt="Kait gathering with retreat guests" />
      <section className="schedule-section section-pad">
        <div className="schedule-copy"><p className="section-label">Class calendar</p><h2>Come practice with Kait.</h2><p>The live weekly class schedule and registration calendar will appear here. Once connected, you will be able to browse current offerings and reserve your place without leaving the page.</p><ArrowLink href="/contact" dark>Ask about a class</ArrowLink></div>
        <div className="embed-placeholder" aria-label="Weekly class schedule coming soon">
          <span>✦</span><p className="eyebrow">Live schedule</p><h3>Class calendar coming soon</h3><p>GoHighLevel schedule connection ready.</p>
        </div>
      </section>
      <section className="practice-principles section-pad dark-section">
        <p className="section-label light">What to expect</p>
        <div><h3>Arrive as you are.</h3><p>No prior experience is required. Options, consent, and self-trust are part of the practice.</p></div>
        <div><h3>Move from within.</h3><p>Practice is guided by curiosity and awareness, not performance or comparison.</p></div>
        <div><h3>Leave more connected.</h3><p>Each class creates space for grounding, integration, and community.</p></div>
      </section>
    </main></PageShell>
  );
}
