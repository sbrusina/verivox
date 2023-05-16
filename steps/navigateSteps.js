import HomePage from '../pages/homePage.js';
import Waiters from '../utils/waiters.js';
import { Then } from '@wdio/cucumber-framework';

Then(/^I navigate to "([^"]*)" and select "([^"]*)"$/, async (menuItem, menuSubItem) => {
   // await Waiters.waitForPageStability();
    const homePage = new HomePage();
    await homePage.openSubMenuPage(menuItem, menuSubItem);
  });