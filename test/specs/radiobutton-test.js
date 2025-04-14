import landingpage from "../pageobjects/landingpage";
import elementspage from "../pageobjects/elementspage";
import radiobuttonpage from "../pageobjects/radiobuttonpage";

describe('Testing Check Box Page', function () {
    it('Launch the Landing Page', async () => {
        await landingpage.LaunchUrl();
        await expect(browser).toHaveTitle('DEMOQA');
        
    })
    it('Check Successfull Navigation of Elements Page', async () => {
        await landingpage.clickElements('Elements');
        await expect(await elementspage.$radioButtonMenu()).withContext('Expect Radio Button Menu To be Displayed').toBeDisplayed();
        // await browser.pause(4000);
    })
    it('Check successfull Navigation of Radio Button Page',async () =>
    {
        await elementspage.$radioButtonMenu().click();
        await expect((await elementspage.$pageTitle('Radio Button'))).toBeDisplayed();
    })
    it('Check If User can Select Yes Button', async () =>{
        await radiobuttonpage.clickRadioButton('Yes');
        await expect(await radiobuttonpage.$radiobuttonstatus('Yes')).withContext('The Yes Status to be displayed').toBeDisplayed();
    })
    it('Check If User can Select Impressive Button', async () =>{
        await radiobuttonpage.clickRadioButton('Impressive');
        await expect(await radiobuttonpage.$radiobuttonstatus('Impressive')).withContext('The Impressive Status to be displayed').toBeDisplayed();
    })
    })