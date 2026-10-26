import React from 'react';
import sobEmblem from '../assets/sob/sob_luxury_emblem.jpg';

export default function DiscountOffer() {
  const valueItems = [
    {
      title: "All 20 SOB In-Depth Video Modules",
      desc: "Complete step-by-step masterclass covering setup, content, live streaming, and high-ticket scaling.",
      value: "$997 VALUE"
    },
    {
      title: "Private Label Rights (PLR) 100% Profit License",
      desc: "Full legal rights to rebrand, customize, and resell the course under your own name and keep every cent.",
      value: "$497 VALUE"
    },
    {
      title: "Private SOB Skool Community & Inner Circle",
      desc: "Direct networking with 2,400+ members and 6-figure monthly earners who share daily wins and exact playbooks.",
      value: "$397 VALUE"
    },
    {
      title: "Stan Store & Automated Funnel Setup Blueprint",
      desc: "The exact money machine setup so payments drop straight into your bank account while you sleep.",
      value: "$297 VALUE"
    },
    {
      title: "Viral TikTok Shop & Faceless Marketing Guides",
      desc: "Proven frameworks to generate hundreds of thousands in sales without showing your face or paying for ads.",
      value: "$247 VALUE"
    },
    {
      title: "Lifetime Access + All Future Module Expansions",
      desc: "Never pay for another update. As new strategies emerge, new modules are added at zero extra charge.",
      value: "$497 VALUE"
    }
  ];

  return (
    <section id="discount-offer" className="sob-section discount-offer-container">
      {/* Background glow ambiance */}
      <div className="discount-glow-orb" />

      {/* Section Header */}
      <div className="section-header-center">
        <div className="discount-eyebrow-badge">
          <span className="discount-badge-fire">🔥</span>
          <span>SPECIAL COMMUNITY DISCOUNT &bull; 51% OFF</span>
          <span className="discount-badge-fire">🔥</span>
        </div>

        <h2 className="section-title-large">
          <span className="discount-title-serif">Limited Time Offer:</span>
          <span className="discount-title-script"> From $300 to Just $147</span>
        </h2>

        <p className="section-title-subtext">
          We believe financial freedom should be accessible to everyone ready to do the work. Take advantage of this exclusive flash discount before the doors close.
        </p>
      </div>

      {/* Main Luxury Offer Box */}
      <div className="discount-main-card">
        {/* Top Urgency Ribbon */}
        <div className="discount-card-ribbon">
          <span className="ribbon-sparkle">✦</span>
          <span>SPECIAL FLASH SALE: SAVE $153 TODAY &bull; LIMITED ENROLLMENT SPOTS</span>
          <span className="ribbon-sparkle">✦</span>
        </div>

        <div className="discount-card-grid">
          {/* Left Column: What's Included Value Stack */}
          <div className="discount-value-col">
            <div className="discount-value-header">
              <span className="value-header-tag">THE COMPLETE BLUEPRINT ARSENAL</span>
              <h3 className="value-header-title">Everything You Receive Today:</h3>
              <p className="value-header-desc">
                No monthly subscriptions. No upsells. One single investment unlocks the entire SOB wealth system.
              </p>
            </div>

            <div className="discount-items-list">
              {valueItems.map((item, idx) => (
                <div key={idx} className="discount-item-row">
                  <div className="discount-check-wrap">
                    <span className="discount-check-icon">✓</span>
                  </div>
                  <div className="discount-item-content">
                    <div className="discount-item-top">
                      <h4 className="discount-item-title">{item.title}</h4>
                      <span className="discount-item-value">{item.value}</span>
                    </div>
                    <p className="discount-item-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="discount-total-value-row">
              <span className="total-value-label">TOTAL REAL-WORLD VALUE:</span>
              <span className="total-value-amount">$2,932+</span>
            </div>
          </div>

          {/* Right Column: Pricing & Checkout Stack */}
          <div className="discount-pricing-col">
            <div className="pricing-box">
              <div className="pricing-emblem-badge">
                <img
                  src={sobEmblem}
                  alt="SOB Luxury Emblem"
                  className="pricing-emblem-img"
                />
              </div>

              <div className="pricing-sale-tag">
                <span>EXCLUSIVE ENROLLMENT PASS</span>
              </div>

              <h4 className="pricing-plan-title">STANDIN' ON BUSINESS</h4>
              <p className="pricing-plan-subtitle">Complete Academy & Resell Rights</p>

              {/* Price Display */}
              <div className="price-display-wrapper">
                <div className="price-was-row">
                  <span className="price-was-label">REGULAR PRICE:</span>
                  <span className="price-was-amount">$300</span>
                </div>

                <div className="price-current-row">
                  <span className="price-currency">$</span>
                  <span className="price-big-number">147</span>
                  <span className="price-type">/ one-time</span>
                </div>

                <div className="price-save-badge">
                  <span>YOU SAVE $153 (51% OFF)</span>
                </div>
              </div>

              {/* Offer Perks */}
              <div className="pricing-perks-list">
                <div className="pricing-perk">
                  <span className="perk-check">✦</span>
                  <span>Instant Lifetime Access to All 20 Modules</span>
                </div>
                <div className="pricing-perk">
                  <span className="perk-check">✦</span>
                  <span>100% Profit Resell Rights (PLR Included)</span>
                </div>
                <div className="pricing-perk">
                  <span className="perk-check">✦</span>
                  <span>VIP Access to SOB Skool Community</span>
                </div>
                <div className="pricing-perk">
                  <span className="perk-check">✦</span>
                  <span>Zero Monthly Fees or Hidden Costs</span>
                </div>
              </div>

              {/* Informational Directive Box pointing to Stan payment form below */}
              <div className="discount-directive-box">
                <div className="directive-arrow-header">
                  <span className="directive-down-arrow">👇</span>
                  <span className="directive-down-arrow">👇</span>
                  <span className="directive-down-arrow">👇</span>
                </div>
                <span className="directive-headline">COMPLETE ENROLLMENT IN THE FORM BELOW</span>
                <span className="directive-subline">
                  Fill out your name, email & payment details in the checkout form directly underneath to lock in $147!
                </span>
                <div className="directive-action-pill">
                  <span>INSTANT $147 ENROLLMENT &bull; NO CLICK NEEDED</span>
                </div>
              </div>

              {/* Urgency & Security Badges */}
              <div className="pricing-urgency-note">
                <span className="pricing-fire-icon">💥</span>
                <span>Spots are strictly limited at $147! Price will increase back to $300 soon.</span>
              </div>

              <div className="pricing-trust-seals">
                <div className="trust-seal-item">
                  <span className="seal-icon">🔒</span>
                  <span>256-Bit SSL Encrypted</span>
                </div>
                <div className="trust-seal-item">
                  <span className="seal-icon">⚡</span>
                  <span>Instant Digital Delivery</span>
                </div>
                <div className="trust-seal-item">
                  <span className="seal-icon">💎</span>
                  <span>100% Profit Rights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
