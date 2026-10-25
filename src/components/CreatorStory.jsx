import React from 'react';
import laePortrait from '../assets/sob/lae_creator_portrait.png';

export default function CreatorStory() {
  return (
    <section id="creator-story" className="sob-section creator-container">
      <div className="section-header-center">
        <span className="section-eyebrow">MEET YOUR MENTOR</span>
        <h2 className="section-title-large">
          <span className="creator-title-serif">ABOUT</span>
          <span className="creator-title-script"> the Creator</span>
        </h2>
        <div className="section-title-script">From healthcare to financial sovereignty.</div>
      </div>

      <div className="creator-profile-card">
        {/* Left Column: Authentic Portrait */}
        <div className="creator-portrait-col">
          <div className="portrait-frame">
            <img
              src={laePortrait}
              alt="Lae — Mom, Entrepreneur, and Founder of Standin' On Business (SOB)"
              className="portrait-img"
            />
            <div className="portrait-badge-overlay">
              <span className="neon-icon">✨</span>
              <span className="neon-text">She Means Business</span>
            </div>
          </div>
          <div className="portrait-caption">
            <span className="caption-name">LAE</span>
            <span className="caption-role">Founder & Digital Marketing Strategist</span>
          </div>
        </div>

        {/* Right Column: Founder Biography & Mission */}
        <div className="creator-bio-col">
          <div className="bio-pretitle-tag">
            <span>OFFICIAL FOUNDER BIOGRAPHY</span>
          </div>

          <h3 className="bio-headline">
            Turning Passion Into Purpose & Financial Liberation
          </h3>

          <div className="bio-body-text">
            <p className="bio-lead-paragraph">
              Lae, a mom and entrepreneur who has been in the digital marketing space for the last year saw
              her passion grow in digital marketing. With her nursing background, Lae turned her passion from
              helping people in their sick bed to helping people break free of the financial burdens and
              stresses of society.
            </p>

            <p className="bio-secondary-paragraph">
              Lae created SOB for the beginner, the action takers and the money makers. Stop waiting and start
              earning with SOB.
            </p>
          </div>

          {/* 3 Core Founder Highlights */}
          <div className="creator-highlights-row">
            <div className="creator-hl-box">
              <span className="hl-icon">🩺</span>
              <div className="hl-text">
                <strong>Nursing Background</strong>
                <span>From patient care to breaking societal financial burdens</span>
              </div>
            </div>

            <div className="creator-hl-box">
              <span className="hl-icon">👩‍👧‍👦</span>
              <div className="hl-text">
                <strong>Mom & Entrepreneur</strong>
                <span>Building multi-stream wealth around family priorities</span>
              </div>
            </div>

            <div className="creator-hl-box">
              <span className="hl-icon">💎</span>
              <div className="hl-text">
                <strong>100% Profit Architecture</strong>
                <span>Empowering members with products they own outright</span>
              </div>
            </div>
          </div>

          {/* Direct Creed Callout */}
          <div className="creator-creed-callout">
            <div className="creed-icon">💫</div>
            <div className="creed-content">
              <strong>"SOB was created for the beginner, the action takers, and the money makers."</strong>
              <span>Stop waiting. Stand on Business and claim your financial independence today.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
