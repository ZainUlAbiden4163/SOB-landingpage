import React from 'react';

export default function PainPoints() {
  const painPoints = [
    {
      num: "01",
      icon: "💸",
      text: "Tired of living paycheck to paycheck...",
      context: "Constantly stressing over bills, counting every dollar, and feeling like no matter how hard you work, you never get ahead."
    },
    {
      num: "02",
      icon: "⏳",
      text: "Working so hard you miss your family...",
      context: "Sacrificing precious moments with your children and loved ones just to trade your hours for a stagnant hourly wage."
    },
    {
      num: "03",
      icon: "🏢",
      text: "Clocking into a job that will replace you tomorrow...",
      context: "Giving your prime energy, creativity, and loyalty to a company that would post your job opening before your obituary."
    },
    {
      num: "04",
      icon: "🛑",
      text: "Feeling financially stuck...",
      context: "Wanting to scale your income, travel, provide for your family, and build wealth, but having zero roadmap or blueprint to do it."
    },
    {
      num: "05",
      icon: "👀",
      text: "Watching others win while you wait...",
      context: "Endlessly scrolling social media seeing everyday women securing the bag online, knowing deep down that you belong in the winners' circle."
    }
  ];

  return (
    <section id="pain-points" className="sob-section pain-points-container">
      {/* Section Header */}
      <div className="section-header-center">
        <div className="pain-eyebrow-badge">
          <span>THE REALITY CHECK</span>
        </div>
        <h2 className="section-title-large">
          <span className="pain-title-script">If this is you...</span>
          <span className="pain-title-serif"> START TODAY!</span>
        </h2>
        <div className="section-title-subtext">
          Recognize the pattern, break the cycle, and take decisive action for your household.
        </div>
      </div>

      {/* Pain Points Cards Stack */}
      <div className="pain-cards-stack">
        {painPoints.map((item, idx) => (
          <div key={idx} className="pain-point-row-card">
            <div className="pain-card-left">
              <span className="pain-check-icon">✓</span>
              <span className="pain-number">{item.num}</span>
            </div>

            <div className="pain-card-center">
              <h3 className="pain-card-headline">{item.text}</h3>
              <p className="pain-card-context">{item.context}</p>
            </div>

            <div className="pain-card-right">
              <span className="pain-badge-urgent">BREAK FREE</span>
            </div>
          </div>
        ))}
      </div>

      {/* Resolution & Lock-In Callout */}
      <div className="pain-resolution-box">
        <div className="resolution-top-quote">
          <span className="resolution-star">✦</span>
          <span className="resolution-text">
            Opportunities like this don't wait. Stand on Business and lock in your future now.
          </span>
          <span className="resolution-star">✦</span>
        </div>

        <p className="resolution-subtext">
          Don't let this opportunity pass you by. Stand on Business and Secure your future!
        </p>

        <div className="resolution-cta-row">
          <div className="resolution-directive-card">
            <span className="resolution-arrow">👇</span>
            <div className="resolution-directive-content">
              <strong>READY TO BREAK FREE? COMPLETE YOUR ENROLLMENT BELOW</strong>
              <span>Claim the special $147 launch offer ($300 value) in the secure checkout form directly below!</span>
            </div>
            <span className="resolution-arrow">👇</span>
          </div>
        </div>
      </div>
    </section>
  );
}
