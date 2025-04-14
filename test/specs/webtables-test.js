import landingpage from "../pageobjects/landingpage";
import elementspage from "../pageobjects/elementspage";
import webTablesPage from "../pageobjects/webTablesPage"

describe('Testing Check Box Page', function () {
    it('Launch the Landing Page', async () => {
        // await browser.url('https://demoqa.com/');
        // await browser.maximizeWindow();
        // await expect(browser).toHaveTitle('DEMOQA');
        await landingpage.LaunchUrl();
    })
    it('Check Successful Navigation of Element Page', async () => {
        // await browser.pause(4000);
        // await $('//h5[text()="Elements"]').scrollIntoView({block : 'center'});
        // await browser.pause(4000);
        // await $('//h5[text()="Elements"]').click();
        // const checkBoxName = await $('//span[text()="Check Box"]');
        await landingpage.clickElements('Elements');
        await expect(await elementspage.$checkboxMenu()).withContext('Expect Check Box Menu To be Displayed').toBeDisplayed();
        // await browser.pause(4000);
    })
    it('Check Navigation to WebTables Page', async () => {
        await elementspage.$webTablesMenu().click();
        await expect(await webTablesPage.checkSorted()).withContext('Values should be sorted').toBe(true);
    });
});
