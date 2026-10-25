import React from 'react';

export default function LearningExperience() {
  const foundationModules = [
    {
      num: "#1",
      badge: "START HERE",
      title: "Success Starts Here",
      tag: "Community Onboarding",
      desc: "Welcome to the FAM! Start here and learn how to navigate through the community.",
      progress: "100% READY",
      accent: "gold"
    },
    {
      num: "#2",
      badge: "FIRST THINGS, FIRST",
      title: "Mindset & Academy Setup",
      tag: "Foundation & Mindset",
      desc: "This is where you get your feet wet, learn the basics, and get your mind right!",
      progress: "ESSENTIAL",
      accent: "pink"
    },
    {
      num: "#3",
      badge: "HOW TO BUILD YOUR STAN STORE",
      title: "Build Your Money Machine",
      tag: "Tech & Storefront",
      desc: "Learn how to set up your Money Machine step by step. Simple!",
      progress: "CORE SYSTEM",
      accent: "gold"
    },
    {
      num: "#4",
      badge: "SETTING UP YA PROFILE",
      title: "High-Converting Positioning",
      tag: "Brand Identity",
      desc: "From setting up your profile the right way to building instant authority and trust.",
      progress: "STRATEGY",
      accent: "pink"
    },
    {
      num: "#5",
      badge: "CREATE YA CONTENT",
      title: "Content Creation Mastery",
      tag: "Organic Reach",
      desc: "Learn how to create content that converts views into active buyers consistently.",
      progress: "HIGH CONVERTING",
      accent: "gold"
    },
    {
      num: "#6",
      badge: "GROW YA FOLLOWERS 0-1K",
      title: "Audience Monetization",
      tag: "Growth Blueprint",
      desc: "The proven method to build your initial audience and secure the bag with zero ad spend.",
      progress: "ACCELERATOR",
      accent: "pink"
    }
  ];

  return (
    <section id="learning-experience" className="sob-section learning-container">
      {/* Framework Banner: INVEST • LEARN • EARN */}
      <div className="framework-triad-banner">
        <div className="framework-triad-item">
          <span className="triad-num">01</span>
          <span className="triad-word">INVEST</span>
          <span className="triad-desc">In Yourself & Your Future</span>
        </div>
        <div className="framework-triad-divider">✦</div>
        <div className="framework-triad-item">
          <span className="triad-num">02</span>
          <span className="triad-word triad-active">LEARN</span>
          <span className="triad-desc">Proven Real-World Systems</span>
        </div>
        <div className="framework-triad-divider">✦</div>
        <div className="framework-triad-item">
          <span className="triad-num">03</span>
          <span className="triad-word">EARN</span>
          <span className="triad-desc">Keep 100% Of Your Profits</span>
        </div>
      </div>

      <div className="section-header-center">
        <span className="section-eyebrow">INSIDE THE SOB ACADEMY</span>
        <h2 className="section-title-large">The Learning Experience</h2>
        <div className="section-title-script">A structured, seamless portal built for your success.</div>
      </div>

      {/* High-Fidelity Academy Portal Mockup */}
      <div className="portal-mockup-frame">
        {/* Mockup Window Header */}
        <div className="portal-window-bar">
          <div className="portal-dots">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
          </div>
          <div className="portal-browser-title">
            <span className="portal-lock">🔒</span>
            <span>sob-academy.portal/classroom &bull; Standin' On Business</span>
          </div>
          <div className="portal-status-pill">
            <span className="status-live-dot" />
            <span>MEMBER ACCESS ACTIVE</span>
          </div>
        </div>

        {/* Portal Internal Nav */}
        <div className="portal-inner-nav">
          <div className="portal-brand">
            <span className="portal-brand-logo">SOB</span>
            <span className="portal-brand-text">Standin' on Business Academy</span>
          </div>

          <div className="portal-nav-tabs">
            <span className="portal-tab tab-active">Classroom</span>
            <span className="portal-tab">Community</span>
            <span className="portal-tab">Calendar</span>
            <span className="portal-tab">Leaderboards</span>
            <span className="portal-tab">Members</span>
            <span className="portal-tab">About</span>
          </div>

          <div className="portal-user-badge">
            <span className="portal-avatar">👑</span>
            <span className="portal-username">VIP Member</span>
          </div>
        </div>

        {/* Portal Classroom Grid */}
        <div className="portal-cards-grid">
          {foundationModules.map((item, idx) => (
            <div key={idx} className={`portal-module-card border-${item.accent}`}>
              <div className="card-top-tag">
                <span className="card-num-badge">{item.num}</span>
                <span className="card-category-tag">{item.tag}</span>
                <span className={`card-accent-pill pill-${item.accent}`}>{item.progress}</span>
              </div>

              <div className="card-badge-banner">{item.badge}</div>
              <h4 className="card-title">{item.title}</h4>
              <p className="card-desc">{item.desc}</p>

              <div className="card-footer-bar">
                <div className="card-progress-track">
                  <div className="card-progress-fill" style={{ width: `${(idx + 1) * 16}%` }} />
                </div>
                <span className="card-access-label">Instant VIP Access</span>
              </div>
            </div>
          ))}
        </div>

        {/* Insider Secrets Strip */}
        <div className="portal-insider-strip">
          <div className="insider-badge">⚡ BONUS ACCELERATORS INCLUDED</div>
          <div className="insider-items-row">
            <div className="insider-pill">
              <strong>HIDDEN SECRETS:</strong> Tips, tricks, and secrets that take you to the NEXT LEVEL. Go live like a BOSS.
            </div>
            <div className="insider-pill">
              <strong>PRIVATE LABEL RIGHTS (PLR):</strong> Full rights to customize and sell products under your own brand for 100% profits.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
