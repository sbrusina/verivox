import CookieBanner from '../pages/CookieBanner.js';
import { Given } from '@wdio/cucumber-framework';

const cookieBanner = new CookieBanner();

Given('I can open www.verivox.de', async () => {
    await browser.url('https://www.verivox.de/');
    await browser.maximizeWindow();
    const element = await cookieBanner.allesAkzeptierenButton;
    await element.waitForClickable({ timeout: 30000 });
    await element.click();
  });