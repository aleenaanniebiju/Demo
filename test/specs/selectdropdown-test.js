import selectdropdownpage from "../pageobjects/selectdropdownpage";
import landingpage from "../pageobjects/landingpage";
import elementspage from "../pageobjects/elementspage";
import widgetlandingpage from "../pageobjects/widgetlandingpage";


describe('Testing Check Box Page', function () {
    it('Launch the Landing Page', async () => {
        await landingpage.LaunchUrl();
        await expect(browser).toHaveTitle('DEMOQA');
        
    })
    it('Check Successfull Navigation of Widget Page', async () => {
        await landingpage.clickElements('Widgets');
        await expect(await widgetlandingpage.$selectMenu()).withContext('Expect Select Menu To be Displayed').toBeDisplayed();
        // await browser.pause(4000);
    })
    it('Check successfull Navigation of Select Page',async () =>
    {
        await widgetlandingpage.$selectMenu().click();
        await expect(await selectdropdownpage.$selectMenuTitle()).withContext('Expect Select Menu To be Displayed').toBeDisplayed();
    })
    it('Check if User can select desired color from the dropdown',async () =>{
        await selectdropdownpage.selectColor('3');
        const colorselected = await selectdropdownpage.$selectcolordropdown().getValue();
        await expect(colorselected).withContext('Value of color Selected should be 3').toBe('3');
        // await selectdropdownpage.selcttoview();
        
    })

})