import React from 'react';

export default function ModulesCurriculum() {
  const highlightBadges = [
    { title: "Private Label Rights", icon: "🏷️", tag: "100% Ownership" },
    { title: "Secrets to a Bag on TikTok Live", icon: "🎙️", tag: "High Conversion" },
    { title: "TikTok Shop", icon: "🛍️", tag: "E-Commerce" },
    { title: "Grow Ya Followers 0-1k", icon: "👥", tag: "Audience Growth" },
    { title: "Standin' on Businesses", icon: "💼", tag: "Brand Infrastructure" },
    { title: "Brand Deals", icon: "🤝", tag: "Sponsorships" }
  ];

  const modulesList = [
    {
      num: "01",
      title: "Success Starts Here",
      category: "Foundations",
      summary: "Welcome to the family. Onboarding, navigating the academy, setting up your workspace, and establishing your business mindset."
    },
    {
      num: "02",
      title: "First Things First",
      category: "Foundations",
      summary: "Getting your feet wet, learning the fundamentals of digital marketing, and structuring your daily routine for consistent execution."
    },
    {
      num: "03",
      title: "Build Your Store",
      category: "Infrastructure",
      summary: "Step-by-step setup of your Stan Store or digital storefront. Configuring products, checkout flows, and automated payments."
    },
    {
      num: "04",
      title: "Setting up Ya Profile",
      category: "Brand Positioning",
      summary: "Optimizing your social media profile aesthetics, high-converting bio architecture, and establishing instant credibility."
    },
    {
      num: "05",
      title: "Create Ya Content",
      category: "Marketing",
      summary: "Practical frameworks for creating viral, engaging content that stops the scroll and naturally turns viewers into paying customers."
    },
    {
      num: "06",
      title: "Grow Ya Followers 0-1k",
      category: "Audience",
      summary: "The zero-ad-spend playbook for attracting your first 1,000 highly engaged, loyal followers who are ready to buy."
    },
    {
      num: "07",
      title: "Hidden Secrets",
      category: "Insider Tactics",
      summary: "Money Maker Bundle and covert insider strategies that elite creators use to scale revenue and unlock higher transaction values."
    },
    {
      num: "08",
      title: "AI for Beginners",
      category: "Automation",
      summary: "Harnessing artificial intelligence tools to automate content ideation, copywriting, customer workflows, and product design."
    },
    {
      num: "09",
      title: "Faceless Marketing",
      category: "Monetization",
      summary: "How to build a wildly profitable digital product empire and social presence without ever showing your face on camera."
    },
    {
      num: "10",
      title: "Standin' on Businesses",
      category: "Business Mastery",
      summary: "Structuring and operating legitimate digital businesses with longevity, multiple revenue streams, and solid operational foundations."
    },
    {
      num: "11",
      title: "Standin' on Healthcare Businesses",
      category: "Specialized Niche",
      summary: "Transitioning professional healthcare, nursing, and clinical skills into high-demand online consulting, digital products, and brands."
    },
    {
      num: "12",
      title: "Private Label Rights (PLR)",
      category: "Ownership",
      summary: "Mastering Private Label Rights: rebrand, customize, and resell ready-made high-demand digital products keeping 100% of profits."
    },
    {
      num: "13",
      title: "TikTok Shop",
      category: "E-Commerce",
      summary: "Setting up and scaling sales on TikTok Shop, product tagging, affiliate showcase integration, and viral shopping strategies."
    },
    {
      num: "14",
      title: "Amazon Influencer",
      category: "Passive Income",
      summary: "Qualifying for and earning substantial passive commissions by publishing short video reviews for the Amazon Influencer Program."
    },
    {
      num: "15",
      title: "Brand Deals",
      category: "Partnerships",
      summary: "Pitching, negotiating, and closing paid brand sponsorships, sponsored posts, and lucrative corporate partnerships."
    },
    {
      num: "16",
      title: "Becoming an Estie Bestie",
      category: "Beauty & Lifestyle",
      summary: "Monetizing beauty, aesthetics, skincare, and wellness expertise through high-ticket digital resources, booking, and products."
    },
    {
      num: "17",
      title: "Create Your Own Digital Products",
      category: "Product Creation",
      summary: "Designing, packaging, and pricing unique digital guides, templates, and courses from scratch that solve specific buyer problems."
    },
    {
      num: "18",
      title: "Standin' on WFH Businesses",
      category: "Remote Wealth",
      summary: "Building sustainable, work-from-home remote service and product businesses that grant you true geographic and time freedom."
    },
    {
      num: "19",
      title: "Print on Demand",
      category: "Physical Products",
      summary: "Launching customized apparel and physical merchandise lines with zero inventory, automatic fulfillment, and zero upfront risk."
    },
    {
      num: "20",
      title: "Mindset, Motivation and Engagement",
      category: "Leadership",
      summary: "Sustaining long-term entrepreneurial drive, overcoming imposter syndrome, building genuine community, and mastering social engagement."
    }
  ];

  const bonusRoadmap = [
    { title: "Secrets to a Bag on TikTok Live", tag: "Live Selling Mastery" },
    { title: "Banners for TikTok Live", tag: "Visual Conversion Assets" },
    { title: "Snow Globe Tumbler Startup", tag: "Physical Craft Business" },
    { title: "AND MUCH MORE!!....", tag: "Continuous Weekly Updates" }
  ];

  return (
    <section id="modules-curriculum" className="sob-section modules-container">
      {/* Section Header */}
      <div className="section-header-center">
        <div className="modules-badge-pill">
          <span className="badge-glow-dot" />
          <span>FULL CURRICULUM BREAKDOWN</span>
        </div>
        <h2 className="section-title-large">
          <span className="title-serif-italic">20 MODULES</span>
          <span className="title-script-pink"> and counting</span>
        </h2>
        <div className="section-title-script">What's inside the Standin' On Business Academy</div>
      </div>

      {/* Six Highlight Badges Row */}
      <div className="curriculum-badges-row">
        {highlightBadges.map((badge, idx) => (
          <div key={idx} className="curriculum-badge-card">
            <span className="badge-card-icon">{badge.icon}</span>
            <span className="badge-card-title">{badge.title}</span>
            <span className="badge-card-tag">{badge.tag}</span>
          </div>
        ))}
      </div>

      {/* The 20 Modules Grid */}
      <div className="modules-grid-20">
        {modulesList.map((mod, index) => (
          <div key={index} className="module-grid-card">
            <div className="mod-card-header">
              <span className="mod-badge">MODULE {mod.num}</span>
              <span className="mod-category">{mod.category}</span>
            </div>
            <h3 className="mod-title">{mod.title}</h3>
            <p className="mod-summary">{mod.summary}</p>
            <div className="mod-card-footer">
              <span className="mod-status-icon">✓</span>
              <span className="mod-status-text">Included in SOB Membership</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bonus & Roadmap Showcase Card */}
      <div className="curriculum-bonus-card">
        <div className="bonus-left-col">
          <span className="bonus-eyebrow">ROADMAP & BONUS MASTERCLASSES</span>
          <h3 className="bonus-heading">Modules Coming Soon & Exclusive Masterclasses</h3>
          <p className="bonus-desc">
            Your SOB membership gives you immediate access to everything currently inside plus continuous,
            unrestricted access to all upcoming masterclasses and expansions as the curriculum grows.
          </p>
        </div>

        <div className="bonus-right-grid">
          {bonusRoadmap.map((item, idx) => (
            <div key={idx} className="bonus-item-pill">
              <span className="bonus-star">✦</span>
              <div className="bonus-pill-text">
                <strong>{item.title}</strong>
                <span>{item.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Immediate Access Banner */}
      <div className="curriculum-cta-strip">
        <div className="cta-strip-text">
          <strong>READY TO ACCESS ALL 20 MODULES?</strong>
          <span>Join today and earn 100% profits on every digital product in your catalog.</span>
        </div>
        <div className="cta-strip-btn">
          <span>ENROLL IN SOB TODAY</span>
        </div>
      </div>
    </section>
  );
}
