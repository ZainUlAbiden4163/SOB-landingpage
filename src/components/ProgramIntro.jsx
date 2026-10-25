import React from 'react';

export default function ProgramIntro() {
  return (
    <section id="program-intro" className="sob-section program-intro-container">
      {/* Decorative luxury watermark */}
      <div className="section-watermark">STANDIN' ON BUSINESS</div>

      <div className="section-header-center">
        <span className="section-eyebrow">THE FOUNDATIONAL OVERVIEW</span>
        <h2 className="section-title-large">What is Standin' On Business?</h2>
        <div className="section-title-script">SOB isn't just a program... It's the Blueprint!</div>
      </div>

      <div className="program-intro-content">
        {/* Main Editorial Narrative Card */}
        <div className="program-main-narrative-card">
          <div className="narrative-quote-icon">“</div>
          <p className="narrative-lead-paragraph">
            Inside, you'll learn how to turn your phone into a true income-producing asset using digital
            products, Social Media, and proven online strategies that convert. From setting up your profile the
            right way, to building a loyal audience, going live with confidence, and stacking multiple
            streams of income, SOB gives you the exact steps to stop watching everyone else win and start
            winning for yourself.
          </p>

          <p className="narrative-secondary-paragraph">
            Standin' on Business (SOB) is more than just a program — it's your blueprint to financial
            freedom. Inside, you'll learn how to turn your phone into a money machine using digital products,
            TikTok, and proven online strategies. From setting up your profile the right way to building a loyal
            following, going live with confidence, and stacking multiple streams of income, SOB gives you the
            exact steps to stop watching others win and finally secure your own bag.
          </p>
        </div>

        {/* 3 Core Philosophical Pillars */}
        <div className="program-pillars-grid">
          <div className="program-pillar-card">
            <div className="pillar-num">01</div>
            <div className="pillar-icon">🎯</div>
            <h3 className="pillar-title">No Fluff. No Guessing. No Shortcuts.</h3>
            <p className="pillar-desc">
              Every lesson is structured with direct, actionable, step-by-step guidance designed to eliminate
              confusion and get you operating immediately with total confidence.
            </p>
          </div>

          <div className="program-pillar-card">
            <div className="pillar-num">02</div>
            <div className="pillar-icon">⚖️</div>
            <h3 className="pillar-title">Discipline, Consistency & Reliability</h3>
            <p className="pillar-desc">
              This is about discipline, consistency, and building income you can rely on. Long-term sustainable
              wealth generated through proven frameworks that scale.
            </p>
          </div>

          <div className="program-pillar-card">
            <div className="pillar-num">03</div>
            <div className="pillar-icon">📲</div>
            <h3 className="pillar-title">Your Phone As An Income Engine</h3>
            <p className="pillar-desc">
              Stop endlessly scrolling and start monetizing. Transform your everyday smartphone into a full-scale
              digital storefront that generates revenue 24/7.
            </p>
          </div>
        </div>

        {/* Stand On Business Moment Banner */}
        <div className="program-callout-banner">
          <div className="callout-inner">
            <div className="callout-badge">YOUR TURNING POINT</div>
            <p className="callout-statement">
              If you're tired of struggling, tired of starting over, and ready to take control of your finances,
              this is your moment to stand on BUSINESS.
            </p>
            <div className="callout-action-row">
              <span className="callout-action-text">
                JOIN TODAY AND EARN 100% PROFITS — BECAUSE THIS TIME, YOU MOVE WITH PURPOSE.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
