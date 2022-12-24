describe("Android elements tests", () => {
  beforeEach(async () => {
    await driver.launchApp();
  });

  it("Find element by accessibility ID", async () => {
    //find element by id
    const appOption = await $("~App");
    await appOption.click();

    const actionBar = await $("~Action Bar");
    expect(actionBar).toBeExisting();
  });

  it("Find element by className", async () => {
    //find element by className
    const className = await $("android.widget.TextView");

    expect(className).toHaveText("API Demos");
  });

  it("Find elements by xPath", async () => {
    const appOption = await $("~App");
    await appOption.click();
    //find element by content-desc
    await $("//android.widget.TextView[@content-desc='Alert Dialogs']").click();
    //find element by resource-id
    await $(
      "//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']"
    ).click();
    //find element by text
    await $("//android.widget.TextView[@text='Command two']").click();
    //find by class
    const textAssertions = await $("//android.widget.TextView");

    expect(textAssertions).toHaveText("You selected: 1 , Command two");
  });

  it("Find elements by UIAutomator", async () => {
    const appOption = await $("~App");
    await appOption.click();
    await $('android=new UiSelector().textContains("Alert")').click();
  });

  afterEach(async () => {
    await driver.closeApp();
  });
});

// describe('Sample', () => {
//     it('First', () => {

//     })
// })

// import LoginPage from '../pageobjects/login.page.js'
// import SecurePage from '../pageobjects/secure.page.js'

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })
