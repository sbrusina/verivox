import PrivathaftpflichtPage from '../pages/privathaftpflichtPage.js';
import { Then } from '@wdio/cucumber-framework';

const privathaftpflichtPage = new PrivathaftpflichtPage();

Then(/^I enter "([^"]*)" age and Single ohne Kinder$/, async (age) => {
    await privathaftpflichtPage.ageInput.setValue(age);
  });

  Then(/^I go to the Privathaftpflicht personal information page$/, async () => {
    await privathaftpflichtPage.clickSubmitButton();
  });

  Then(/^I enter "([^"]*)" birthdate$/, async (birthdate) => {
    await privathaftpflichtPage.birthdateInput.setValue(birthdate);
  });

  Then(/^I enter "([^"]*)" zip code$/, async (zip) => {
    await privathaftpflichtPage.zipCodeInput.setValue(zip);
  });

  Then(/^I click the "Jetzt vergleichen" button$/, async () => {
    await privathaftpflichtPage.clickJetztVergleichenButton();
    await browser.pause(30000);
  });