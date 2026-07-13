import { createBrowserRouter, NavLink, Outlet } from "react-router";
import "../styles/launchpad.css";
import heroImg from "../imports/hero.jpg";
import missionImg from "../imports/Mission-log.jpg";

function Header() {
  const link = (to: string, label: string, end?: boolean) => (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        `site-nav__link${isActive ? " site-nav__link--active" : ""}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-header__logo">
          🚀 LAUNCHPAD
        </NavLink>
        <nav className="site-nav" aria-label="Primary">
          {link("/", "Home", true)}
          {link("/mission-log", "Mission Log")}
          {link("/star-charts", "Star Charts")}
        </nav>
      </div>
    </header>
  );
}

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <h1 className="hero__title">Your next launch deserves a launchpad, not a landing page</h1>
            <p className="hero__text">Launchpad is the three-page template that gets your client's big idea off the ground — no countdown required.</p>
            <p className="hero__text">Every mission opens with one clear transmission. This is yours: say what you do, for whom, in one breath.</p>
            <a href="#" className="btn btn--primary hero__cta">
              Begin Countdown
              <svg className="btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </a>
          </div>
          <div className="hero__media">
            <img src={heroImg} alt="Two people building something together at a table — every launch is a collaboration" className="hero__image" />
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="container">
          <h2 className="section-heading">The Flight Plan</h2>
          <div className="how-it-works__grid">
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <h3 className="feature-card__title">Plot the Trajectory</h3>
              <p className="feature-card__text">Three steps is all a first-time visitor can track. Orient them, reassure them, point them at the button.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h3 className="feature-card__title">Check the Instruments</h3>
              <p className="feature-card__text">Each card answers one quiet worry. Visitors don't read — they scan for signs the mission is safe.</p>
            </article>
            <article className="feature-card">
              <div className="feature-card__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="feature-card__title">Open the Hatch</h3>
              <p className="feature-card__text">Every section should end within reach of an airlock: one clear way forward, no maze.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mission">
        <div className="container">
          <p className="mission__text">A good landing page is a flight plan, not a brochure — every section exists to keep your visitor in orbit until they're ready to board.</p>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <h2 className="section-heading stats__heading">Numbers to Navigate By</h2>
          <div className="stats__grid">
            <div className="stat"><p className="stat__value">3</p><p className="stat__label">Pages in one complete mission</p></div>
            <div className="stat"><p className="stat__value">6</p><p className="stat__label">Sections, each with a single job</p></div>
            <div className="stat"><p className="stat__value">1</p><p className="stat__label">Call to action per screen — ever</p></div>
          </div>
        </div>
      </section>

      <section className="why-choose">
        <div className="container">
          <h2 className="section-heading">Why Crews Choose Launchpad</h2>
          <div className="why-choose__grid">
            <div className="benefit">
              <div className="benefit__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              </div>
              <div className="benefit__body">
                <h3 className="benefit__title">Built-In Gravity</h3>
                <p className="benefit__text">Proof, benefits, and reassurance are arranged to pull visitors toward the button — not scatter them into deep space</p>
              </div>
            </div>
            <div className="benefit">
              <div className="benefit__icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
              </div>
              <div className="benefit__body">
                <h3 className="benefit__title">Universal Docking</h3>
                <p className="benefit__text">Swap the copy, the palette, and the logo — the same skeleton docks with any client's brand in an afternoon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2 className="section-heading">Cleared for Launch?</h2>
          <p className="cta__text">Your client's mission is waiting on the pad. Strap in, swap the copy, and light the engines.</p>
          <a href="#" className="btn btn--primary">🚀 Launch</a>
        </div>
      </section>
    </>
  );
}

function MissionLog() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Mission Log</h1>
          <p className="page-hero__lede">Every mission needs a story the crew can retell. This page is where your client earns trust before they ask for anything.</p>
        </div>
      </section>

      <section className="mission-detail">
        <div className="container mission-detail__inner">
          <div className="mission-detail__content">
            <h2 className="mission-detail__heading">The Flight Record</h2>
            <p className="mission-detail__text">A second page exists for one reason: some visitors need more signal before they board. The Mission Log is where the work, the method, and the humans at the controls come into view — proof gathered from previous orbits.</p>
            <div className="mission-detail__points">
              <div className="benefit">
                <div className="benefit__icon benefit__icon--circle" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                </div>
                <div className="benefit__body">
                  <h3 className="benefit__title">Crewed by Humans</h3>
                  <p className="benefit__text">Name the people and show the process. Visitors trust missions with a visible crew.</p>
                </div>
              </div>
              <div className="benefit">
                <div className="benefit__icon benefit__icon--circle" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
                </div>
                <div className="benefit__body">
                  <h3 className="benefit__title">Telemetry, Not Talk</h3>
                  <p className="benefit__text">Show measured outcomes from past launches. One real number outweighs a page of promises.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mission-detail__media">
            <img src={missionImg} alt="Preview of the template page beside a laptop — the flight record in review" className="mission-detail__image" />
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container">
          <h2 className="section-heading impact__heading">What This Page Transmits</h2>
          <div className="impact__grid">
            <div className="impact-item">
              <div className="impact-item__icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>
              </div>
              <h3 className="impact-item__title">Altitude</h3>
              <p className="impact-item__text">How far the work has flown — reach, results, and milestones worth radioing home</p>
            </div>
            <div className="impact-item">
              <div className="impact-item__icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h3 className="impact-item__title">Crew</h3>
              <p className="impact-item__text">Who's flying the ship — the partnerships and people that make the mission credible</p>
            </div>
            <div className="impact-item">
              <div className="impact-item__icon" aria-hidden="true">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></svg>
              </div>
              <h3 className="impact-item__title">Signal</h3>
              <p className="impact-item__text">Why it matters — the mission's purpose, broadcast in plain language</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container cta__inner">
          <h2 className="section-heading">Ready to Board?</h2>
          <p className="cta__text">Every mission log ends the same way: with an invitation. Here's yours.</p>
          <a href="#" className="btn btn--primary">
            Join the Crew
            <svg className="btn__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
          </a>
        </div>
      </section>
    </>
  );
}

function StarCharts() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">Star Charts</h1>
          <p className="page-hero__lede">A resource page keeps visitors in your gravity between visits. Chart the knowledge clearly, and they'll navigate back on their own.</p>
        </div>
      </section>

      <section className="resources">
        <div className="container">
          <div className="resources__grid">
            <article className="resource-card">
              <div className="resource-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg>
              </div>
              <h2 className="resource-card__title">Pre-Flight Reading</h2>
              <ul className="resource-card__list"><li>What a landing page is (and isn't)</li><li>Anatomy of a hero section</li><li>The one-message-per-section rule</li><li>Common launch failures to avoid</li></ul>
            </article>
            <article className="resource-card">
              <div className="resource-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              </div>
              <h2 className="resource-card__title">Crew Favorites</h2>
              <ul className="resource-card__list"><li>Copywriting checklists</li><li>Palette and type pairings</li><li>Free image sources</li><li>CTA phrasing that converts</li></ul>
            </article>
            <article className="resource-card">
              <div className="resource-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
              </div>
              <h2 className="resource-card__title">Passenger Care</h2>
              <ul className="resource-card__list"><li>Accessibility basics</li><li>Readable contrast in monotone</li><li>Keyboard-friendly navigation</li><li>Alt text that actually helps</li></ul>
            </article>
            <article className="resource-card">
              <div className="resource-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="9" y1="18" x2="15" y2="18" /><line x1="10" y1="22" x2="14" y2="22" /><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14" /></svg>
              </div>
              <h2 className="resource-card__title">Test Flights</h2>
              <ul className="resource-card__list"><li>A/B testing on a budget</li><li>Reading analytics signals</li><li>Heatmaps and scroll depth</li><li>Knowing when to relaunch</li></ul>
            </article>
            <article className="resource-card">
              <div className="resource-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z" /><path d="M6 12v5c3 3 9 3 12 0v-5" /></svg>
              </div>
              <h2 className="resource-card__title">Flight School</h2>
              <ul className="resource-card__list"><li>HTML/CSS fundamentals</li><li>Working with templates</li><li>Handing off to clients</li><li>Maintaining after launch</li></ul>
            </article>
            <article className="resource-card">
              <div className="resource-card__icon" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              </div>
              <h2 className="resource-card__title">Mission Control</h2>
              <p className="resource-card__text">Text <span className="text-accent">LAUNCH</span> to <span className="text-accent">555-0123</span></p>
              <p className="resource-card__text">Ground crew standing by 24/7 for support and course corrections</p>
            </article>
          </div>
        </div>
      </section>

      <section className="cta cta--mint">
        <div className="container cta__inner">
          <h2 className="section-heading">Lost in Space?</h2>
          <p className="cta__text">The ground crew is here to plot your course to the right resource.</p>
          <a href="#" className="btn btn--primary">
            <svg className="btn__icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
            Hail Mission Control
          </a>
        </div>
      </section>
    </>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "mission-log", Component: MissionLog },
      { path: "star-charts", Component: StarCharts },
    ],
  },
]);
