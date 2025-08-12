//Write automation script to register for LinkedIn using the data from (registration-data) and (registration-page) files.

module.exports = {
  'LinkedIn Registration Test': function (browser) {
    
    //Import test data
    const regData = require('../test_data/registration-data');
    //To use elements and commands from page object
    const page = browser.page['registration-page']();

      page
        .openLinkedInPage() // 1-Open the page and verify page loaded
        .clickJoinNowButton() // 2-Click on join Now
        .enterEmailAndPassword(regData.email, regData.password) // 3-Enter email & password
        .clickAgreeAndJoinButton() // 4-Click Agree & join
        .enterFullName(regData.firstName, regData.lastName) // 5-Enter First and Last Name
        .continueAndCheckSecurity(); // 6-Click Continue and assert security verification is shown
      
      browser.end();  // End Test
  },
};
