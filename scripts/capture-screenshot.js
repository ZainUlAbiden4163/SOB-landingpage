import puppeteer from 'puppeteer-core';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const TARGET_PORTS = [5173, 5174];
const OUTPUT_DIR = path.resolve('exports');

async function findActiveUrl() {
  for (const port of TARGET_PORTS) {
    try {
      const res = await fetch(`http://localhost:${port}/`);
      if (res.ok) return `http://localhost:${port}/`;
    } catch (e) {}
  }
  return 'http://localhost:5173/';
}

async function main() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  const slicesDir = path.join(OUTPUT_DIR, 'slices');
  if (!fs.existsSync(slicesDir)) {
    fs.mkdirSync(slicesDir, { recursive: true });
  }

  const TARGET_URL = await findActiveUrl();
  console.log(`🌐 Using active dev server URL: ${TARGET_URL}`);

  console.log('🚀 Launching Google Chrome...');
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--hide-scrollbars'
    ]
  });

  const page = await browser.newPage();

  // Set 1440px canvas viewport
  await page.setViewport({
    width: 1440,
    height: 1200,
    deviceScaleFactor: 1
  });

  console.log(`🌐 Navigating to ${TARGET_URL}...`);
  await page.goto(TARGET_URL, { waitUntil: 'networkidle0', timeout: 30000 });

  // Ensure all fonts and images are completely loaded
  await page.evaluate(async () => {
    await document.fonts.ready;
    const images = Array.from(document.querySelectorAll('img'));
    await Promise.all(
      images.map(img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      })
    );
  });

  // Small pause to ensure rendering stability
  await new Promise(r => setTimeout(r, 1500));

  const totalHeight = await page.evaluate(() => {
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.querySelector('#landing-page')?.scrollHeight || 0
    );
  });

  console.log(`📏 Total Page Height detected: ${totalHeight}px`);

  // 1. Capture Full Page Screenshot
  const fullPagePath = path.join(OUTPUT_DIR, 'SOB_Landing_Page_FULL.png');
  console.log(`📸 Capturing complete full-page screenshot to ${fullPagePath}...`);
  await page.screenshot({
    path: fullPagePath,
    fullPage: true
  });
  console.log(`✅ Full page screenshot saved successfully! (${fs.statSync(fullPagePath).size} bytes)`);

  // 2. Capture Clean Stan Store Slices (by section ID)
  console.log('📸 Capturing clean section slices for Stan Store...');

  const sections = [
    { id: 'hero-section', name: '01_Hero_Section.png' },
    { id: 'program-intro', name: '02_Program_Intro.png' },
    { id: 'why-course', name: '03_Why_This_Course.png' },
    { id: 'learning-experience', name: '04_Learning_Experience.png' },
    { id: 'modules-curriculum', name: '05_Modules_Curriculum.png' },
    { id: 'pain-points', name: '06_Pain_Points.png' },
    { id: 'creator-story', name: '07_Creator_Story.png' },
    { id: 'skool-testimonials', name: '08_Skool_Testimonials_6Figures.png' },
    { id: 'discount-offer', name: '09_Discount_Offer_300_to_147.png' },
    { id: 'final-cta', name: '10_Final_CTA_Payment_Directive.png' }
  ];

  for (const sec of sections) {
    try {
      const el = await page.$(`#${sec.id}`);
      const slicePath = path.join(slicesDir, sec.name);
      if (el) {
        await el.screenshot({ path: slicePath });
        console.log(`  ✓ Saved slice: ${sec.name}`);
      } else {
        if (fs.existsSync(slicePath)) {
          fs.unlinkSync(slicePath);
          console.log(`  ℹ️ Section #${sec.id} is commented out, removed old ${sec.name}`);
        }
      }
    } catch (err) {
      console.warn(`  ⚠️ Could not capture #${sec.id}: ${err.message}`);
    }
  }

  // 3. Capture Large Multi-Section Bundles (Ideal for Stan Store Upload)
  console.log('📸 Capturing large bundles...');
  
  const hasCurriculum = await page.$('#modules-curriculum') !== null;
  const bundleConfigs = [
    { name: 'SOB_Stan_Part_1_Welcome_Intro.png', startSelector: '#hero-section', endSelector: '#program-intro' },
    { name: 'SOB_Stan_Part_1_Intro_Learning.png', startSelector: '#hero-section', endSelector: '#program-intro' },
    hasCurriculum
      ? { name: 'SOB_Stan_Part_2_Curriculum_PainPoints.png', startSelector: '#modules-curriculum', endSelector: '#pain-points' }
      : { name: 'SOB_Stan_Part_2_PainPoints.png', startSelector: '#pain-points', endSelector: '#pain-points' },
    { name: 'SOB_Stan_Part_3_Proof_Offer_FinalCTA.png', startSelector: '#creator-story', endSelector: '#final-cta' }
  ];

  for (const bundle of bundleConfigs) {
    try {
      const clip = await page.evaluate((startSel, endSel) => {
        const startEl = document.querySelector(startSel);
        const endEl = document.querySelector(endSel);
        if (!startEl || !endEl) return null;
        const startRect = startEl.getBoundingClientRect();
        const endRect = endEl.getBoundingClientRect();
        const top = window.scrollY + startRect.top;
        const bottom = window.scrollY + endRect.bottom;
        return {
          x: 0,
          y: Math.max(0, top),
          width: 1440,
          height: bottom - top
        };
      }, bundle.startSelector, bundle.endSelector);

      if (clip && clip.height > 0) {
        const bundlePath = path.join(OUTPUT_DIR, bundle.name);
        await page.screenshot({ path: bundlePath, clip });
        console.log(`  ✓ Saved bundle: ${bundle.name} (${Math.round(clip.height)}px tall)`);
      }
    } catch (err) {
      console.warn(`  ⚠️ Error capturing bundle ${bundle.name}: ${err.message}`);
    }
  }

  await browser.close();
  console.log('🎉 All screenshots generated successfully in /exports!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
