import Link from "next/link";
import { ArrowLink, InnerHero, PageShell } from "../_components/site";
import { getWeeklyClasses } from "../../lib/classes";

export const metadata = { title: "Weekly Classes", description: "View weekly yoga, breathwork, and sound healing classes with Kaitlyn." };
export const revalidate = 300;

export default async function SchedulePage() {
  const classes = await getWeeklyClasses();

  return (
    <PageShell><main>
      <InnerHero eyebrow="Weekly practice" title="A rhythm your nervous system can trust." text="Return to breath, movement, and presence in community. Kaitlyn’s weekly classes are designed to meet you in real life, not ask you to perform your way out of it." image="/images/kait-yoga-kneeling-opt.jpg" imageAlt="Kaitlyn practicing yoga beside the ocean" />
      <section className="schedule-section section-pad">
        <div className="schedule-copy"><p className="section-label">Class calendar</p><h2>Come practice with Kaitlyn.</h2><p>Browse Kaitlyn’s current weekly offerings below. Choose a class to visit the host studio and reserve your place.</p><ArrowLink href="mailto:kait@elevatewithkait.com?subject=Weekly%20Class%20Question" dark>Ask about a class</ArrowLink><p className="schedule-sync">This schedule updates automatically from Kaitlyn’s live class calendar.</p></div>
        <div className="class-calendar" aria-label="Live weekly class schedule">
          {classes.map((weeklyClass, index) => (
            <article className="class-card" key={`${weeklyClass.day}-${weeklyClass.time}-${weeklyClass.studio}-${index}`}>
              <div className="class-when"><p className="eyebrow">{weeklyClass.day}</p><strong>{weeklyClass.time}</strong></div>
              <div className="class-details"><h3>{weeklyClass.className}</h3><p>{weeklyClass.studio}<span> · {weeklyClass.location}</span></p></div>
              <Link className="class-signup" href={weeklyClass.signUpUrl} target={weeklyClass.signUpUrl.startsWith("http") ? "_blank" : undefined} rel={weeklyClass.signUpUrl.startsWith("http") ? "noreferrer" : undefined} aria-label={`Sign up for ${weeklyClass.className} on ${weeklyClass.day} at ${weeklyClass.time}`}>↗</Link>
            </article>
          ))}
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
