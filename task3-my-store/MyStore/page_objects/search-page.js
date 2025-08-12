module.exports = {

  elements: {
    searchResultsTitle: 'span.lighter',
    searchResultsList: '#product_list',
    searchResults: '.product-container .product-name',
    searchResultsCount: '.heading-counter'
  },

  commands: [{
    verifySearchResultsTitleAndCountAppears(searchItem) {
      return this
        .waitForElementVisible('@searchResultsCount', 5000)
        .waitForElementVisible('@searchResultsTitle', 5000)
        .assert.textContains('@searchResultsTitle', searchItem);

    },

    async verifySearchResultsContainsSearchItem(searchItem) {

      const searchResults = await this.api.element.findAll('@searchResults');

      for (let i = 0; i < searchResults.length; i++) {
        const text = await searchResults[i].getText();
        await this.api.assert.ok(text.includes(searchItem), `Expected "${text}" to contain "${searchItem}"`);
      }

      return this;

    },

    endTest() {
      return this.api.end();
    }
  }]
};