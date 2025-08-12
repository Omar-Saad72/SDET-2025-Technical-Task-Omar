//Create Page Object file for LinkedIn registration page in Nightwatch format.
module.exports = {
  url: 'https://www.linkedin.com/',

  elements: {
    joinNowBtn: 'a[href*="header-join"]',
    emailInput: '#email-address',
    passwordInput: '#password',
    agreeJoinBtn: '#join-form-submit',
    firstNameInput: '#first-name',
    lastNameInput: '#last-name',
    continueBtn: '#join-form-submit',
    securityCheckFrame: 'iframe[title="Security verification"]'
  },

commands: [{
  openLinkedInPage() {
    return this
      .navigate()
      .waitForElementVisible('body', 5000)
      .assert.titleContains('LinkedIn');
  },

  clickJoinNowButton() {
    return this.click('@joinNowBtn');
  },

  enterEmailAndPassword(email, password) {
    return this
      .waitForElementVisible('@emailInput', 5000)
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password);
  },

  clickAgreeAndJoinButton() {
    return this.click('@agreeJoinBtn');
  },

  enterFullName(firstName, lastName) {
    return this
      .waitForElementVisible('@firstNameInput', 5000)
      .setValue('@firstNameInput', firstName)
      .setValue('@lastNameInput', lastName);
  },

  continueAndCheckSecurity() {
    
    this
        .click('@continueBtn')
        .waitForElementVisible('@securityCheckFrame', 10000);

    this.api
        .frame(this.elements.securityCheckFrame.selector)
        .waitForElementVisible('h1', 5000)
        .assert.textContains('h1', 'quick security check')
        .frame(null);

    return this;
  },
  }]
};