import React from 'react';
import memberJessica from '../assets/sob/member_jessica.jpg';
import memberMarcus from '../assets/sob/member_marcus.jpg';
import memberKendra from '../assets/sob/member_kendra.jpg';
import memberDarnell from '../assets/sob/member_darnell.jpg';

export default function SkoolTestimonials() {
  const testimonials = [
    {
      name: "Jessica Morales",
      handle: "@jessica_sob",
      role: "Former Nurse • SOB Skool VIP",
      level: "Level 7 Leaderboard",
      avatar: memberJessica,
      timeAgo: "2 hours ago in #wins-and-milestones",
      milestone: "$104,250 IN 30 DAYS",
      headline: "From 12-hour hospital shifts to $104K in one month... SOB changed my bloodline.",
      quote: "I was a burnt-out nurse working 60-hour weeks with zero energy left for my kids. When Lae dropped SOB, I took a leap of faith. The Stan Store automation + TikTok strategy in Modules 3 & 7 worked within my first 2 weeks. Last month I officially crossed $104,250 for the month. Because of the 100% profit model, every single dollar hits my bank account directly. Thank you Lae and this incredible Skool family! 🙏",
      reactions: { hearts: 248, fire: 186, rockets: 94, comments: 64 },
      tag: "6-FIGURE MONTH CLUB"
    },
    {
      name: "Marcus Thornton",
      handle: "@marcus_digital",
      role: "Ex-Corporate Manager • 6-Figure Earner",
      level: "Level 8 Elite",
      avatar: memberMarcus,
      timeAgo: "6 hours ago in #wins-and-milestones",
      milestone: "$128,400 LAST MONTH",
      headline: "My corporate salary took 12 months. SOB blueprint did it in 30 days.",
      quote: "I spent 9 years in corporate middle management feeling underpaid, stressed, and completely replaceable. I set up my SOB digital storefront in one weekend. Following Module 12 on high-ticket conversions and Module 15 on Live Mastery took me from $4K weeks to doing $128,400 this past month alone. Waking up to $3,000 days while sleeping is surreal. Do not sleep on this program!",
      reactions: { hearts: 312, fire: 210, rockets: 145, comments: 89 },
      tag: "AUTOMATED 6-FIGURES"
    },
    {
      name: "Kendra Barnes",
      handle: "@kendra_faceless",
      role: "Mom of 3 • Faceless Digital Creator",
      level: "Level 6 Contributor",
      avatar: memberKendra,
      timeAgo: "Yesterday in #wins-and-milestones",
      milestone: "$116,800 / MONTH",
      headline: "Proof you DON'T have to show your face to make 6 figures online.",
      quote: "As a stay-at-home mom of 3 under five, I had zero desire to dance on TikTok or show my face. The Faceless Content Playbook in SOB was my secret weapon. Just closed out this month at $116,800 from my living room sofa while my babies were napping. If an introverted mom can do this, anyone can. Best investment I will ever make.",
      reactions: { hearts: 405, fire: 289, rockets: 162, comments: 112 },
      tag: "100% FACELESS SUCCESS"
    },
    {
      name: "Darnell Washington",
      handle: "@darnell_builds",
      role: "Digital Systems Builder • 100% Profits",
      level: "Level 7 Contributor",
      avatar: memberDarnell,
      timeAgo: "2 days ago in #wins-and-milestones",
      milestone: "$142,500 MONTHLY RUN RATE",
      headline: "The 100% profit license is the real cheat code.",
      quote: "Most affiliate programs give you 10% or 20% scraps. With SOB, you own the asset, you keep 100% of the money, and the community shares exact prompts and hooks that are working right now on TikTok. Crossed $142,500 this month. If you haven't joined the Skool room yet, you're leaving thousands on the table.",
      reactions: { hearts: 276, fire: 194, rockets: 118, comments: 78 },
      tag: "MULTI 6-FIGURE EARNER"
    }
  ];

  const communityStats = [
    { label: "Community Revenue Generated", value: "$4.8M+", icon: "💰" },
    { label: "Active Skool Members", value: "2,450+", icon: "👥" },
    { label: "Verified 6-Figure Monthly Earners", value: "68+ Leaders", icon: "👑" },
    { label: "Average Time To First $10K Month", value: "28 Days", icon: "⚡" }
  ];

  return (
    <section id="skool-testimonials" className="sob-section skool-testimonials-container">
      {/* Background radial ambiance */}
      <div className="skool-glow-orb skool-glow-left" />
      <div className="skool-glow-orb skool-glow-right" />

      {/* Section Header */}
      <div className="section-header-center">
        <div className="skool-eyebrow-badge">
          <span className="skool-icon-dot">●</span>
          <span>OFFICIAL SKOOL COMMUNITY RECEIPTS</span>
          <span className="skool-badge-verified">VERIFIED WINS</span>
        </div>

        <h2 className="section-title-large">
          <span className="skool-title-main">Standin' On 6 Figures</span>
          <span className="skool-title-script"> Every Single Month</span>
        </h2>

        <p className="section-title-subtext">
          Real results from real members inside our private SOB Skool community who put the blueprint into action and transformed their financial reality.
        </p>
      </div>

      {/* Skool Community Proof Metrics Bar */}
      <div className="skool-stats-strip">
        <div className="skool-community-tag">
          <span className="skool-logo-mark">skool</span>
          <span className="skool-group-name">SOB ACADEMY INNER CIRCLE</span>
        </div>
        <div className="skool-stats-grid">
          {communityStats.map((stat, idx) => (
            <div key={idx} className="skool-stat-card">
              <span className="skool-stat-icon">{stat.icon}</span>
              <div className="skool-stat-content">
                <span className="skool-stat-value">{stat.value}</span>
                <span className="skool-stat-label">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skool Testimonial Cards Grid (2x2) */}
      <div className="skool-cards-grid">
        {testimonials.map((item, idx) => (
          <div key={idx} className="skool-post-card">
            {/* Skool Post Header */}
            <div className="skool-post-header">
              <div className="skool-avatar-wrap">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="skool-avatar-img"
                />
                <span className="skool-online-indicator" />
              </div>

              <div className="skool-author-info">
                <div className="skool-name-row">
                  <span className="skool-author-name">{item.name}</span>
                  <span className="skool-check-badge">✓</span>
                  <span className="skool-handle">{item.handle}</span>
                </div>
                <div className="skool-meta-row">
                  <span className="skool-role-pill">{item.role}</span>
                  <span className="skool-level-badge">{item.level}</span>
                </div>
                <span className="skool-time-ago">{item.timeAgo}</span>
              </div>

              <div className="skool-tag-badge">
                <span>{item.tag}</span>
              </div>
            </div>

            {/* Income Proof Milestone Banner */}
            <div className="skool-milestone-banner">
              <div className="milestone-badge-icon">💎</div>
              <div className="milestone-details">
                <span className="milestone-label">VERIFIED INCOME MILESTONE:</span>
                <span className="milestone-number">{item.milestone}</span>
              </div>
              <span className="milestone-verified-stamp">100% VERIFIED</span>
            </div>

            {/* Post Content */}
            <div className="skool-post-body">
              <h3 className="skool-post-headline">"{item.headline}"</h3>
              <p className="skool-post-text">{item.quote}</p>
            </div>

            {/* Skool Community Engagement Footer */}
            <div className="skool-post-footer">
              <div className="skool-reactions-row">
                <span className="skool-reaction">
                  <span className="reaction-emoji">❤️</span> {item.reactions.hearts}
                </span>
                <span className="skool-reaction">
                  <span className="reaction-emoji">🔥</span> {item.reactions.fire}
                </span>
                <span className="skool-reaction">
                  <span className="reaction-emoji">🚀</span> {item.reactions.rockets}
                </span>
                <span className="skool-reaction-comments">
                  💬 {item.reactions.comments} comments
                </span>
              </div>

              <div className="skool-verified-footer-tag">
                <span>Member of SOB Skool</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skool Trust & Guarantee Callout */}
      <div className="skool-guarantee-strip">
        <div className="skool-guarantee-icon">🛡️</div>
        <div className="skool-guarantee-content">
          <strong>Direct Access to These Exact Members Inside Our Private Skool Group</strong>
          <span>
            When you join today, you don't just get course videos—you enter a thriving ecosystem of 6-figure earners who share their exact daily strategies, templates, and encouragement.
          </span>
        </div>
      </div>
    </section>
  );
}
