export default class PrivathaftpflichtPage {
    get ageInput() { return $('input[name="age"]'); }
    get birthdateInput() { return $('.su-calendar-input.input'); }
    get zipCodeInput() { return $('#prestep_postcode'); }
    get submitButton() {return $(`.calculator-form button[type="submit"]`); }
    get jetztVergleichenButton() {return $('//button[contains(text(), " Jetzt vergleichen")]'); }

      async clickSubmitButton() {
        await this.submitButton.waitForClickable();
        await this.submitButton.click();
      }

      async clickJetztVergleichenButton() {
        const element = await this.jetztVergleichenButton;
        await element.waitForClickable({ timeout: 20000 });
        await element.click();
      }
}
