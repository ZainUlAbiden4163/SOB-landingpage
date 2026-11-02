import React from 'react';

export default function ProgramIntro() {
  const differences = [
    {
      num: "01",
      icon: "💎",
      title: "Keep 100% Of Every Dollar You Make",
      subtitle: "Full Private Label Rights (PLR) Included",
      desc: "Unlike traditional affiliate programs where you only get 10%–20% commission scraps, SOB includes full resell rights. You own the course outright, sell it under your own brand, and keep 100% of every sale directly in your pocket."
    },
    {
      num: "02",
      icon: "✨",
      title: "100% Beginner Friendly — Zero Experience Needed",
      subtitle: "No Tech Skills, No Existing Following",
      desc: "Never done digital marketing? Have zero followers? No problem! SOB was built from scratch for true beginners. Every single step—from creating your Stan Store to posting your first video—is explained simply with no confusing jargon."
    },
    {
      num: "03",
      icon: "📱",
      title: "Your Smartphone Is Your Entire Business",
      subtitle: "No Expensive Laptops or Fancy Cameras",
      desc: "You don't need expensive equipment or complex software setups. Learn how to launch, operate, and automate your entire digital business directly from the smartphone already in your hand."
    },
    {
      num: "04",
      icon: "🎭",
      title: "Faceless Marketing Or Personal Brand",
      subtitle: "Build 5–6 Figures Completely Anonymously",
      desc: "Camera shy? You don't have to show your face or dance on TikTok! SOB provides complete faceless marketing playbooks so you can generate substantial income behind the scenes."
    },
    {
      num: "05",
      icon: "⚙️",
      title: "Automated Stan Store Sales Machine",
      subtitle: "Make Money While You Sleep",
      desc: "Get the exact step-by-step blueprint to set up your Stan Store and automated checkout in under an hour. Payments process automatically and drop straight into your bank account 24/7."
    },
    {
      num: "06",
      icon: "👑",
      title: "Direct Access To 6-Figure Mentors in Skool",
      subtitle: "2,400+ Active Members Helping You Win",
      desc: "You're never alone on this journey. Join our thriving private Skool community where members share real-time winning hooks, trending templates, and daily support."
    }
  ];

  return (
    <section id="program-intro" className="sob-section program-intro-container">
      {/* Decorative luxury watermark */}
      <div className="section-watermark">STANDIN' ON BUSINESS</div>

      <div className="section-header-center">
        <span className="section-eyebrow">THE FOUNDATIONAL BLUEPRINT</span>
        <h2 className="section-title-large">What is Standin' On Business (SOB)?</h2>
        <div className="section-title-script">...And why it's completely different!</div>
      </div>

      <div className="program-intro-content">
        {/* Prominent 100% Beginner-Friendly Callout Banner */}
        <div className="beginner-friendly-banner">
          <div className="bf-badge-row">
            <span className="bf-sparkle">✨</span>
            <span className="bf-badge">100% BEGINNER FRIENDLY</span>
            <span className="bf-sparkle">✨</span>
          </div>
          <h3 className="bf-headline">
            No Experience? No Tech Skills? No Existing Audience? Zero Problem!
          </h3>
          <p className="bf-desc">
            SOB meets you right where you are. Whether you've never sold anything online or you're starting
            from absolute scratch, every module is designed with simple, step-by-step guidance so you can
            launch with total clarity and zero overwhelm.
          </p>
          <div className="bf-pills-row">
            <div className="bf-pill-item">
              <span className="bf-pill-icon">👶</span>
              <span>Designed for True Beginners</span>
            </div>
            <div className="bf-pill-item">
              <span className="bf-pill-icon">⚡</span>
              <span>Fast 1-Hour Setup</span>
            </div>
            <div className="bf-pill-item">
              <span className="bf-pill-icon">🛡️</span>
              <span>No Confusing Tech Jargon</span>
            </div>
          </div>
        </div>

        {/* Narrative Card: What is SOB? */}
        <div className="program-main-narrative-card">
          <div className="narrative-quote-icon">“</div>
          <p className="narrative-lead-paragraph">
            <strong>Standin' on Business (SOB)</strong> is more than just a course — it's your complete blueprint
            to financial freedom. Inside, you'll learn how to turn your phone into a true income-producing asset
            using digital products, social media, and automated online strategies that convert.
          </p>
          <p className="narrative-secondary-paragraph">
            From setting up your profile the right way to building a loyal audience, going live with confidence,
            and stacking multiple streams of income, SOB gives you the exact roadmap to stop watching everyone
            else win and start securing your own bag.
          </p>
        </div>

        {/* Sub-Header: Why SOB is Completely Different */}
        <div className="diff-header-center">
          <span className="diff-eyebrow">THE SOB ADVANTAGE</span>
          <h3 className="diff-title">Why SOB is Unlike Anything Else</h3>
          <p className="diff-subtext">
            Compare SOB to traditional online courses and see why our members see results so fast.
          </p>
        </div>

        {/* Why SOB is Different - 6 Cards Grid */}
        <div className="sob-diff-grid">
          {differences.map((item, idx) => (
            <div key={idx} className="sob-diff-card">
              <div className="diff-card-top">
                <span className="diff-num">{item.num}</span>
                <span className="diff-icon">{item.icon}</span>
              </div>
              <h4 className="diff-card-title">{item.title}</h4>
              <span className="diff-card-subtitle">{item.subtitle}</span>
              <p className="diff-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Turning Point Callout Banner */}
        <div className="program-callout-banner">
          <div className="callout-inner">
            <div className="callout-badge">YOUR TURNING POINT</div>
            <p className="callout-statement">
              If you're tired of struggling, tired of starting over, and ready to take control of your finances,
              this is your moment to stand on BUSINESS.
            </p>
            <div className="callout-action-row">
              <span className="callout-action-text">
                JOIN TODAY FOR ONLY $147 AND EARN 100% PROFITS &mdash; BECAUSE THIS TIME, YOU MOVE WITH PURPOSE.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
