import React from 'react';

export default function WhyCourse() {
  const whyPoints = [
    {
      icon: "✨",
      title: "No Experience? No Problem!",
      desc: "Whether you're a complete beginner or have some online business experience, this course will meet you where you are."
    },
    {
      icon: "📈",
      title: "Proven Techniques",
      desc: "These aren't theory-based tips. These are real strategies that generate results."
    },
    {
      icon: "🕊️",
      title: "True Freedom",
      desc: "Say goodbye to the 9-to-5 grind and unlock the freedom of earning from anywhere."
    }
  ];

  const whatYouLearn = [
    {
      number: "01",
      icon: "🌙",
      title: "Passive Income Mastery",
      desc: "Discover how to set up income streams that work for you, even when you sleep!"
    },
    {
      number: "02",
      icon: "💳",
      title: "Diversified Online Revenue",
      desc: "Build income through affiliate marketing, digital products, and more."
    },
    {
      number: "03",
      icon: "🗺️",
      title: "Step-by-Step Guides",
      desc: "Practical, easy-to-follow tutorials to help you get started quickly and efficiently."
    },
    {
      number: "04",
      icon: "👑",
      title: "Real-World Success Strategies",
      desc: "Learn from industry experts who've done it and want to see YOU succeed."
    }
  ];

  return (
    <section id="why-course" className="sob-section why-course-container">
      <div className="section-header-center">
        <span className="section-eyebrow">BUILT FOR RESULTS</span>
        <h2 className="section-title-large">Why This Course?</h2>
        <div className="section-title-script">Real strategies, real freedom, real results.</div>
      </div>

      <div className="why-content-wrapper">
        {/* Top 3 Core Reasons Cards */}
        <div className="why-pillars-row">
          {whyPoints.map((item, index) => (
            <div key={index} className="why-card">
              <div className="why-card-icon-wrap">{item.icon}</div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* What You'll Learn Sub-Section */}
        <div className="what-learn-block">
          <div className="what-learn-header">
            <span className="what-learn-tag">COMPREHENSIVE KNOWLEDGE ARSENAL</span>
            <h3 className="what-learn-title">What you'll learn in this course:</h3>
          </div>

          <div className="what-learn-grid">
            {whatYouLearn.map((item, index) => (
              <div key={index} className="what-learn-card">
                <div className="what-learn-card-top">
                  <span className="what-learn-num">{item.number}</span>
                  <span className="what-learn-icon">{item.icon}</span>
                </div>
                <h4 className="what-learn-card-title">{item.title}</h4>
                <p className="what-learn-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Independence Banner */}
        <div className="financial-future-banner">
          <div className="future-banner-content">
            <div className="future-banner-badge">📈 FINANCIAL INDEPENDENCE</div>
            <h3 className="future-banner-headline">
              Start building your financial future TODAY!
            </h3>
            <p className="future-banner-sub">
              Sign up now and start your journey toward financial independence.
            </p>
          </div>
          <div className="future-banner-cta">
            <div className="future-directive-card">
              <span className="future-directive-arrow">👇</span>
              <div className="future-directive-details">
                <span className="future-directive-tag">SPECIAL $147 OFFER</span>
                <span className="future-directive-main">COMPLETE PAYMENT IN FORM BELOW</span>
                <span className="future-directive-sub">Scroll to the bottom of the page to lock in $147 (was $300)</span>
              </div>
              <span className="future-directive-arrow">👇</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
