import React from 'react';
import sobEmblem from '../assets/sob/sob_luxury_emblem.jpg';

export default function FinalCta() {
  const valueChecklist = [
    "Full Instant Access to All 20 Modules and Future Expansions",
    "Private Label Rights (PLR) — Resell & Keep 100% of Every Sale",
    "Step-by-Step Stan Store & Payment Automation Setup Guide",
    "TikTok Shop, Live Secrets & High-Converting Content Playbooks",
    "Faceless Marketing Strategies for Private Creators",
    "Exclusive Access to the SOB Community & Mentorship"
  ];

  return (
    <section id="final-cta" className="sob-section final-cta-container">
      {/* Background radial ambiance */}
      <div className="final-cta-glow" />

      <div className="final-cta-card">
        {/* Top Emblem Thumbnail */}
        <div className="final-cta-emblem-wrap">
          <img
            src={sobEmblem}
            alt="Standin' On Business"
            className="final-cta-emblem-img"
          />
        </div>

        <div className="final-cta-eyebrow">
          <span>THE TIME TO STAND ON BUSINESS IS NOW</span>
        </div>

        <h2 className="final-cta-headline">
          Start Building Your Financial Future TODAY!
        </h2>

        <p className="final-cta-subhead">
          Sign up now and start your journey toward financial independence.
        </p>

        {/* Value Stack Grid */}
        <div className="final-value-stack">
          {valueChecklist.map((item, idx) => (
            <div key={idx} className="value-stack-item">
              <span className="value-check-badge">✓</span>
              <span className="value-text">{item}</span>
            </div>
          ))}
        </div>

        {/* Master CTA Button */}
        <div className="final-cta-btn-block">
          <div className="final-master-btn">
            <span className="master-btn-main">
              JOIN TODAY AND EARN 100% PROFITS
            </span>
            <span className="master-btn-sub">
              BECAUSE THIS TIME, YOU MOVE WITH PURPOSE.
            </span>
          </div>

          <div className="final-urgency-banner">
            <span className="final-urgency-icon">💥</span>
            <span className="final-urgency-text">
              Spots are limited! Don't wait—take the first step toward financial freedom today!
            </span>
          </div>
        </div>

        {/* Creed Seal */}
        <div className="final-creed-seal">
          <span className="creed-star">✦</span>
          <span className="creed-motto">STAND FIRM &bull; STAND TALL &bull; STAND ON BUSINESS</span>
          <span className="creed-star">✦</span>
        </div>
      </div>
    </section>
  );
}
