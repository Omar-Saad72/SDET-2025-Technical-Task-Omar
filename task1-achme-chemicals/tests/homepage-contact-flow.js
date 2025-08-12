module.exports = {
  'Contact to Homepage Navigation Flow': function (browser) {

    const homepageUrl = "http://s3-design-sample-site.s3-website-us-west-2.amazonaws.com/";
    const flashMessage = 'tr div[align="center"]';
    const contactButton = 'a[href="contact.html"]';
    const emailContact = 'p.style10';
    
    browser
        // Open the page and verify page loaded
        .url(homepageUrl)
        .waitForElementVisible('body', 5000)
        .assert.urlEquals(homepageUrl)
        // .waitForElementVisible(flashMessage,10000)
        //Navigate to Contact and assert contact page loaded
        .waitForElementVisible(contactButton, 10000)
        .click(contactButton)
        .waitForElementVisible(emailContact, 10000)
        .assert.textContains(emailContact,'Please contact us')
        .assert.urlContains('contact.html')
        //Click Back from browser and assert user at home page
        .back()
        // .waitForElementVisible(flashMessage,10000)
        .assert.urlEquals(homepageUrl)
        .end();
        
  }
};