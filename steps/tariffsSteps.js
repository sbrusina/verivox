import TariffsPage from '../pages/tariffsPage.js';
import { Then, When } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import Waiters from '../utils/waiters.js';

const tariffsPage = new TariffsPage();

Then(/^I should see a page that lists the available tariffs for my selection$/, async () => {
   // await tariffsPage.isTariffsExist();
   await browser.pause(30000);
  });

Then(/^Verify that at least 5 tariffs are shown$/, async () => {
    expect(await tariffsPage.getTariffsCount()).to.equal(5);
  });

  Then(/^I should see the total number of available tariffs listed above all the result list$/, async () => {
    const totalTariffs = await tariffsPage.totalTariffs.getText();
    expect(totalTariffs).to.match(/\d+/);
  });

  Then(/^I should see only the first 20 tariffs displayed$/, async () => {
    const tariffs = await tariffsPage.tariffs;
    expect(tariffs.length).to.equal(20);
  });

  When(/^I click on the button labeled 20 weitere Tarife laden$/, async () => {
    const loadMoreButton = await tariffsPage.loadMoreButton;
    expect(loadMoreButton.isDisplayed()).to.be.true;
    await loadMoreButton.click();
    await Waiters.waitForPageStability();
  });

  Then(/^I should see the next 20 tariffs displayed$/, async () => {
    const tariffs = await tariffsPage.tariffs;
    expect(tariffs.length).to.equal(40);
  });

  When(/^I scroll to the end of the result list page$/, async () => {
    await tariffsPage.scrollToLoadMoreButton();
  });

  When(/^I can continue to load any additional tariffs until all tariffs have been displayed$/, async () => {
    await tariffsPage.loadAllTariffs();
  });

  When(/^Verify that the weitere Tarife laden button is no longer displayed when all the tariffs are visible$/, async () => {
    await tariffsPage.isLoadMoreButtonDisplayed(false);
  });

  When(/^Verify that the total number of tariffs displayed matches the total listed number of tariffs above result list$/, async () => {
    expect(tariffsPage.getAllTariffsCount()).to.contain(TariffsPage.tariffs.length);
  });

  When(/^I should see the tariff price of the first tariff$/, async () => {
    expect(tariffsPage.price[1].isDisplayed()).to.be.true;
  });

  When(/^I see tariff details section "([^"]*)"$/, async (sectionName) => {
    const status = await $(tariffsPage.section(sectionName)).isDisplayed();
    expect(status).to.be.true;
  });

  When(/^I see the "([^"]*)" button$/, async (buttonName) => {
    const status = await $(tariffsPage.button(buttonName)).isDisplayed();
    expect(status).to.be.true;
  });

  When(/^Verify that the offer page displays both In 5 Minuten online wechseln buttons$/, async () => {
    //don't understand

  });

  When(/^Verify that the offer page displaysthe expected page contents and tariff details for your selected tariff$/, async () => {
    //don't understand
  });

  When(/^I open tariff details$/, async () => {
    tariffsPage.tarifDetailsButton[1].click()
  });