export default class TariffsPage {
    get tariffs() { return $$('.content.redesign'); }
    get tariffsContainer() { return $('div.results-container'); }
    get totalTariffs() { return $('.filtered'); }
    get loadMoreButton() { return $('.button.load-more-button'); }
    get totalNumberTariffs() { return $('filtered-products-hint>span'); }
    get price() { return $$('.group-price .price'); }
    get tarifDetailsButton() { return $$('.group-price .price'); }
    static section = sectionName => `//li[contains(text(), "${sectionName}")]`;
    static button = buttonName => `//button[contains(text(), "${buttonName}")]`;

    async getTariffsCount() {
      return await this.tariffs.length;
    }

    async isLoadMoreButtonDisplayed(isDisplayed) {
      expect(await this.loadMoreButton.isDisplayed()).to.equal(isDisplayed);
    }

    async scrollToLoadMoreButton() {
      return await this.loadMoreButton.scrollIntoView();
    }

    async loadAllTariffs() {
      while (await this.isLoadMoreButtonDisplayed(true)) {
        await this.loadMoreButton.click();
      }
    }

    async getAllTariffsCount() {
      return await this.loadMoreButton.getText();
    }

    async isTariffsExist() {
        await this.tariffsContainer.waitForExist({ timeout: 30000 });
        await this.tariffsContainer.waitForDisplayed({ timeout: 30000 });
      }
}
