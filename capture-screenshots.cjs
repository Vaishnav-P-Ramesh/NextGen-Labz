const { chromium } = require('playwright-core');
const path = require('path');

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

const sites = [
  { name: 'thewlpens',      url: 'https://www.thewlpens.com' },
  { name: 'western-store',  url: 'https://western-store.vercel.app' },
  { name: 'rjenterprises',  url: 'https://www.rjenterprisesinpune.services/' },
  { name: 'google-project', url: 'https://share.google/UUy8wmIBT5jgztJWr' },
  { name: 'healthcare',     url: 'https://health-care-services-three.vercel.app/' },
  { name: 'leadx',          url: 'https://lead-x-three.vercel.app' },
  { name: 'codepunk',       url: 'https://codepunk.droidclub.in' },
  { name: 'codepunk-v1',    url: 'https://code-punk-v1-0.vercel.app' },
  { name: 'talenthunt',     url: 'https://talenthunt-navy.vercel.app' },
];

const OUTPUT_DIR = 'D:\\NextGen-Labz\\src\\assets\\works';

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: CHROME_PATH,
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage', '--disable-gpu']
  });

  for (const site of sites) {
    const outPath = path.join(OUTPUT_DIR, `${site.name}.png`);
    console.log(`Capturing: ${site.url}`);
    try {
      const page = await browser.newPage();
      await page.setViewportSize({ width: 1280, height: 720 });
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 25000 });
      await page.waitForTimeout(3000);
      await page.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 720 } });
      await page.close();
      console.log(`  OK: ${outPath}`);
    } catch (err) {
      console.error(`  FAIL (${site.name}): ${err.message.split('\n')[0]}`);
      // still try to take a screenshot even on partial load
      try {
        const page2 = await browser.newPage();
        await page2.setViewportSize({ width: 1280, height: 720 });
        await page2.goto(site.url, { waitUntil: 'domcontentloaded', timeout: 15000 }).catch(() => {});
        await page2.waitForTimeout(2000);
        await page2.screenshot({ path: outPath, clip: { x: 0, y: 0, width: 1280, height: 720 } });
        await page2.close();
        console.log(`  OK (fallback): ${outPath}`);
      } catch (e2) {
        console.error(`  SKIP: ${e2.message.split('\n')[0]}`);
      }
    }
  }

  await browser.close();
  console.log('\nDone!');
})();
