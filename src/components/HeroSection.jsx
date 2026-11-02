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
        <span className="hero-credo">EARN WITH AYSH &bull; DIGITAL WEALTH &bull; STAND ON BUSINESS</span>
        <span className="hero-badge-diamond">✦</span>
      </div>

      {/* Main 2-Column Hero Grid */}
      <div className="hero-grid">
        {/* Left Column: Personal Introduction & Sales Copy */}
        <div className="hero-copy-col">
          <div className="hero-pretitle">
            <span className="hero-script-tag">Welcome to...</span>
            <span className="hero-badge-pill">OFFICIAL DIGITAL STORE</span>
          </div>

          <h1 className="hero-main-title hero-aysh-title">
            <span className="hero-title-highlight">Welcome to Earn with Aysh!</span>
            <span className="hero-title-heart">💖</span>
          </h1>

          {/* Personal Introduction Card */}
          <div className="hero-intro-card">
            <div className="hero-intro-header">
              <span className="hero-intro-avatar-sparkle">✨</span>
              <h2 className="hero-intro-greeting">Hey, I'm Aysh!</h2>
            </div>

            <p className="hero-intro-text">
              I'm here to share digital business education, online business opportunities and resources
              for beginners who want to learn how to build an online presence.
            </p>

            <p className="hero-intro-text">
              Whether you're exploring digital marketing, content creation or online business, I'm excited
              to share my journey and the resources that have helped me along the way.
            </p>

            <div className="hero-intro-callout">
              <span className="intro-callout-icon">🌸</span>
              <span className="intro-callout-text">
                Take a look around and find the resources that interest you!
              </span>
              <span className="intro-callout-icon">🌸</span>
            </div>
          </div>

          {/* 3 Core Value Pillars */}
          <div className="hero-perks-row">
            <div className="hero-perk-item">
              <span className="hero-perk-icon">📚</span>
              <div className="hero-perk-text">
                <strong>Digital Education</strong>
                <span>Beginner-friendly roadmaps</span>
              </div>
            </div>
            <div className="hero-perk-item">
              <span className="hero-perk-icon">💡</span>
              <div className="hero-perk-text">
                <strong>Online Business</strong>
                <span>Turn your phone into an asset</span>
              </div>
            </div>
            <div className="hero-perk-item">
              <span className="hero-perk-icon">💎</span>
              <div className="hero-perk-text">
                <strong>100% Profits</strong>
                <span>Keep every single dollar</span>
              </div>
            </div>
          </div>

          {/* Featured SOB Blueprint Callout Block */}
          <div className="hero-cta-block">
            <div className="hero-featured-card">
              <div className="hero-featured-badge-row">
                <span className="hero-featured-pill">🔥 #1 FEATURED BLUEPRINT</span>
                <span className="hero-featured-name">STANDIN' ON BUSINESS (SOB)</span>
              </div>

              {/* Discount Price Callout */}
              <div className="hero-discount-pill-row">
                <div className="hero-price-tag">
                  <span className="hero-price-original">$300</span>
                  <span className="hero-price-arrow">→</span>
                  <span className="hero-price-discounted">$147</span>
                </div>
                <span className="hero-savings-badge">SAVE 51% TODAY</span>
              </div>

              {/* Directive Pointer to Section Below */}
              <div className="hero-directive-card">
                <div className="directive-arrow-icon">👇</div>
                <div className="directive-text-wrap">
                  <span className="hero-directive-text">
                    EXPLORE WHAT SOB IS &amp; WHY IT'S DIFFERENT BELOW
                  </span>
                  <span className="hero-directive-subtext">
                    Scroll down to see why SOB is the best beginner-friendly system to generate 100% profits online!
                  </span>
                </div>
                <div className="directive-arrow-icon">👇</div>
              </div>

              <div className="hero-urgency-note">
                <span className="hero-urgency-star">💥</span>
                <span>Special Community Discount: $300 to $147 &bull; Instant Access &bull; 100% Resell Rights</span>
              </div>
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
              <span className="emblem-curator">FEATURED BY AYSH</span>
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
