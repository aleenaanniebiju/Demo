import landingpage from "../pageobjects/landingpage";
import elementspage from "../pageobjects/elementspage";
import checkboxpage from "../pageobjects/checkboxpage";

describe('Testing Check Box Page', function () {
    it('Launch the Landing Page', async () => {
        // await browser.url('https://demoqa.com/');
        // await browser.maximizeWindow();
        // await expect(browser).toHaveTitle('DEMOQA');
        await landingpage.LaunchUrl();
    })
    it('Check Successfull Navigation of Element Page', async () => {
        // await browser.pause(4000);
        // await $('//h5[text()="Elements"]').scrollIntoView({block : 'center'});
        // await browser.pause(4000);
        // await $('//h5[text()="Elements"]').click();
        // const checkBoxName = await $('//span[text()="Check Box"]');
        await landingpage.clickElements('Forms');
        await expect(await elementspage.$checkboxMenu()).withContext('Expect Check Box Menu To be Displayed').toBeDisplayed();
        // await browser.pause(4000);
    })
    xit('Check Successfull Navigation of Check Box Page', async () => {
        await elementspage.$checkboxMenu().click();
        const checBoxTitle = await $('//h1[text()="Check Box"]');
        await expect(checBoxTitle).withContext('Expect to Check Box Page Title to be Displayed').toBeDisplayed();
        // await browser.pause(4000);
    })
    xit('Check User can Select Home Check Box', async () => {
        // await $('//label[@for="tree-node-home"]').click();
        // await $('//label[@for="tree-node-home"]').scrollIntoView();
        // const homeCheckBoxStatus = await $('//input[@id="tree-node-home"]');

        // if (!(await homeCheckBoxStatus.isSelected())) {
        //     await $('//label[@for="tree-node-home"]').click();
        // }
        // console.log('homeCheckBoxStatus',homeCheckBoxStatus.isSelected());
        await checkboxpage.clickHomeSelectBox();
        await expect(await checkboxpage.$homeSelectBoxStatus().isSelected()).toBe(true);
    })
    xit('Check Successfull Selection for Desktop Option', async () => {
        await checkboxpage.clicktoggleButton('Home');
        await checkboxpage.clickHomeSelectBox('desktop');
        await expect(await checkboxpage.$desktopSelectBoxStatus().isSelected()).toBe(true);
        // await browser.pause(5000);
    })
})
