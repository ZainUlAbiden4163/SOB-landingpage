import React from 'react';
import sobEmblem from '../assets/sob/sob_luxury_emblem.jpg';
import heroPhoto from '../assets/sob/hero_editorial_luxury.jpg';

export default function HeroSection() {
  return (
    <section id="hero-section" className="sob-section hero-container">
      {/* Ambient background glow */}
      <div className="hero-glow-orb hero-glow-left" />
      <div className="hero-glow-orb hero-glow-right" />

      {/* Top Brand Monogram & Credo Header */}
      <div className="hero-top-badge">
        <span className="hero-badge-diamond">✦</span>
        <span className="hero-credo">STAND FIRM &bull; STAND TALL &bull; STAND ON BUSINESS</span>
        <span className="hero-badge-diamond">✦</span>
      </div>

      {/* Main 2-Column Hero Grid */}
      <div className="hero-grid">
        {/* Left Column: Sales Copy & Action Stack */}
        <div className="hero-copy-col">
          <div className="hero-pretitle">
            <span className="hero-script-tag">Welcome to...</span>
            <span className="hero-badge-pill">OFFICIAL ACADEMY BLUEPRINT</span>
          </div>

          <h1 className="hero-main-title">
            <span className="hero-title-highlight">Standin' On Business</span>
            <span className="hero-title-sub">(SOB)</span>
          </h1>

          <div className="hero-hook-card">
            <div className="hero-hook-icon">🚀</div>
            <h2 className="hero-hook-title">
              Unlock Multiple Streams of Income Online: Transform Your Financial Future! 💰
            </h2>
          </div>

          <p className="hero-description">
            Tired of living paycheck to paycheck? Want to build sustainable wealth and financial freedom—on
            your own terms? It's time to take control and learn how to generate multiple streams of income
            online.
          </p>

          <div className="hero-perks-row">
            <div className="hero-perk-item">
              <span className="hero-perk-icon">💎</span>
              <div className="hero-perk-text">
                <strong>100% Profits</strong>
                <span>Keep every dollar you make</span>
              </div>
            </div>
            <div className="hero-perk-item">
              <span className="hero-perk-icon">📱</span>
              <div className="hero-perk-text">
                <strong>Turn Your Phone</strong>
                <span>Into a true income asset</span>
              </div>
            </div>
            <div className="hero-perk-item">
              <span className="hero-perk-icon">📚</span>
              <div className="hero-perk-text">
                <strong>20 Modules</strong>
                <span>And counting inside</span>
              </div>
            </div>
          </div>

          {/* Primary Directive Block with Discount Pricing */}
          <div className="hero-cta-block">
            {/* Discount Price Callout */}
            <div className="hero-discount-pill-row">
              <div className="hero-price-tag">
                <span className="hero-price-original">$300</span>
                <span className="hero-price-arrow">→</span>
                <span className="hero-price-discounted">$147</span>
              </div>
              <span className="hero-savings-badge">SAVE 51% TODAY</span>
            </div>

            {/* Directive Banner Pointing to Form Below */}
            <div className="hero-directive-card">
              <div className="directive-arrow-icon">👇</div>
              <div className="directive-text-wrap">
                <span className="hero-directive-text">
                  JOIN TODAY FOR ONLY $147 &bull; FILL OUT THE FORM BELOW
                </span>
                <span className="hero-directive-subtext">
                  Scroll down to complete your details in the checkout form & start earning 100% profits!
                </span>
              </div>
              <div className="directive-arrow-icon">👇</div>
            </div>

            <div className="hero-urgency-note">
              <span className="hero-urgency-star">💥</span>
              <span>Special Discount: $300 to $147. Fill out the checkout form below to secure your spot!</span>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Showcase */}
        <div className="hero-visual-col">
          {/* SOB Emblem Showcase Card */}
          <div className="hero-emblem-card">
            <div className="hero-emblem-wrapper">
              <img
                src={sobEmblem}
                alt="Standin' On Business (SOB) Luxury 3D Emblem"
                className="hero-emblem-img"
              />
            </div>
            <div className="hero-emblem-caption">
              <span className="emblem-tag">ESTABLISHED DIGITAL BLUEPRINT</span>
              <span className="emblem-title">THE SOB MASTERCLASS</span>
            </div>
          </div>

          {/* Hero Editorial Photography Card */}
          <div className="hero-editorial-card">
            <img
              src={heroPhoto}
              alt="Confident women entrepreneurs standing on business"
              className="hero-photo-img"
            />
            <div className="hero-photo-overlay">
              <div className="hero-photo-creed">
                <span className="photo-creed-label">THE MOVEMENT</span>
                <span className="photo-creed-quote">"Stop watching everyone else win. Secure your own bag."</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
