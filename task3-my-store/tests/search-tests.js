module.exports = {
  'Search for Dress Test': function (browser) {

    //To use elements and commands from pages objects
    const homePage = browser.page['home-page']();
    const searchPage = browser.page['search-page']();
    const searchItem = 'Dress';

    homePage
      .openMyStore()
      .searchForProduct(searchItem);

    searchPage
      .verifySearchResultsTitleAndCountAppears(searchItem.toUpperCase())
      .verifySearchResultsContainsSearchItem(searchItem);
      
    browser.pause(10000); // Bad Practice
  }
};