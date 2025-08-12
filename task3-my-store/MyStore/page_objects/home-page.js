module.exports = {
  url: 'http://automationpractice.multiformis.com/',

  elements: {
    searchInput: '#search_query_top',
    searchBtn: 'button[name="submit_search"]'
  },

  commands: [{
    openMyStore() {
      return this
        .navigate()
        .waitForElementVisible('body', 5000,);
    },

    searchForProduct(searchQuery) {
      return this
        .waitForElementVisible('@searchInput', 5000)
        .waitForElementVisible('@searchBtn', 5000)
        .setValue('@searchInput', searchQuery)
        .click('@searchBtn')
    }
  }]
};