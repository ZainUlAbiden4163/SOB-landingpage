import React from 'react';

export default function MarqueeBanner({ variant = "magenta" }) {
  const items = [
    "JOIN TODAY",
    "EARN 100% PROFITS",
    "STAND FIRM • STAND TALL • STAND ON BUSINESS",
    "MOVE WITH PURPOSE",
    "UNLOCK MULTIPLE STREAMS OF INCOME",
    "JOIN TODAY",
    "EARN 100% PROFITS",
    "NO FLUFF • NO SHORTCUTS",
    "STAND ON BUSINESS"
  ];

  return (
    <div className={`marquee-ribbon marquee-${variant}`}>
      <div className="marquee-content">
        {items.map((item, idx) => (
          <span key={idx} className="marquee-item">
            <span className="marquee-star">✦</span>
            <span className="marquee-text">{item}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
