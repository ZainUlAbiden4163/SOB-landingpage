import React from 'react';
import HeroSection from './components/HeroSection';
import ProgramIntro from './components/ProgramIntro';
import WhyCourse from './components/WhyCourse';
import LearningExperience from './components/LearningExperience';
import ModulesCurriculum from './components/ModulesCurriculum';
import PainPoints from './components/PainPoints';
import CreatorStory from './components/CreatorStory';
import SkoolTestimonials from './components/SkoolTestimonials';
import DiscountOffer from './components/DiscountOffer';
import FinalCta from './components/FinalCta';
import MarqueeBanner from './components/MarqueeBanner';
import './App.css';

export default function App() {
  return (
    <main id="landing-page">
      {/* Top Global Discount Announcement Ribbon */}
      <div className="top-discount-ribbon">
        <div className="top-discount-content">
          <span className="top-discount-fire">🔥</span>
          <span className="top-discount-pill">SPECIAL COMMUNITY OFFER</span>
          <span className="top-discount-text">
            Regular Price <span className="top-discount-strike">$300</span> &bull; <strong>Today Only $147</strong> (Save $153 / 51% OFF)
          </span>
          <span className="top-discount-seats">⚡ Limited Academy Seats At $147</span>
        </div>
      </div>

      {/* 1. Impactful Hero Section */}
      <HeroSection />

      {/* Static Luxury Marquee Ribbon */}
      <MarqueeBanner variant="magenta" />

      {/* 2. SOB Program Introduction */}
      <ProgramIntro />

      <div className="sob-divider" />

      {/* 3. Why This Course & Value Pillars */}
      <WhyCourse />

      <div className="sob-divider" />

      {/* 4. Visual Presentation of the Learning Experience */}
      <LearningExperience />

      <div className="sob-divider" />

      {/* 5. The 20 Modules Comprehensive Curriculum */}
      <ModulesCurriculum />

      {/* Static Luxury Marquee Ribbon */}
      <MarqueeBanner variant="gold" />

      {/* 6. Audience Pain Points ("If this is you... START TODAY!") */}
      <PainPoints />

      <div className="sob-divider" />

      {/* 7. The Creator's Story (Lae) */}
      <CreatorStory />

      <div className="sob-divider" />

      {/* 8. Skool Community Testimonials (People Making 6 Figures/Month) */}
      <SkoolTestimonials />

      <div className="sob-divider" />

      {/* 9. Exclusive Discount Offer ($300 to $147 Value Stack) */}
      <DiscountOffer />

      <div className="sob-divider" />

      {/* 10. Strong Final Call to Action */}
      <FinalCta />

      {/* Static Luxury Closing Ribbon */}
      <MarqueeBanner variant="magenta" />
    </main>
  );
}
