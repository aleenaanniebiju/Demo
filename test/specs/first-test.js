describe('Sauce Demo App Testing', function () {
    it('Check Login Page is Launched', async function () {
        await browser.url('https://www.saucedemo.com/');
        //resolved,pending,rejected
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('Swag Labs');
    })
    xit('Check Login successfully with correct username and password', async () => {
        //Locate Using Id 
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');

        //Locate Using Class Name
        await $('.btn_action').click();
        await expect((await $('=Products'))).withContext('Expect Products to be Displayed').toBeDisplayed();
        await $('=Open Menu').click();
        // await browser.pause(4000);
        // await browser.pause(4000);
        await $('=Logout').click();
        // await browser.pause(4000);
    })
    xit('Check Error Message for correct username and No password', async () => {
        await $('#user-name').setValue('standard_user');
        await $('.btn_action').click();
        //Locate with Partial Link Text
        await expect((await $('*=Password is required'))).withContext('Expect Password Required Error Message').toBeDisplayed();
    })
    xit('Check Error Message for correct password and No username', async () => {
        await $('#password').setValue('secret_sauce');
        await $('.btn_action').click();
        //Locate using Xpath //tagname[@Attribute='value']
        await expect((await $('//div[@class="error-message-container error"]'))).withContext('Expect Error message to be displayed').toBeDisplayed();
        ////input[@data-test='username']
        //input[@type='submit']
    })
    xit('Check Error Message for Wrong Username and Wrong Password', async () => {
        await $('#user-name').setValue('abcd');
        await $('#password').setValue('abcd');
        await $('.btn_action').click();
        const Error_Message = await $('//h3[@data-test="error"]');
        // await expect(Error_Message).toHaveText('Epic sadface: Username and password do not match any user in this service');
        // await expect(Error_Message).toHaveText(expect.stringContaining('Username and password do not match any user in this service'));
        await expect(Error_Message).toHaveText(expect.stringContaining('Username and password do not match any user in this service'));
        // await browser.pause(2000);
    })
    xit('Check Login using performance Glitch User', async () => {
        await $('#user-name').setValue('performance_glitch_user');
        await $('#password').setValue('secret_sauce');
        await $('.btn_action').click();
        const product_Title = await $('=Products');
        await product_Title.waitForDisplayed({ timeout: 6000, timeoutMsg: 'product Title is not displayed after 6 sec' });
        await expect(product_Title).toBeDisplayed();
    })
    xit('Check Login using performance Glitch User with wait for exist', async () => {
        await $('#user-name').setValue('performance_glitch_user');
        await $('#password').setValue('secret_sauce');
        await $('.btn_action').click();
        const product_Title = await $('=Products');
        await product_Title.waitForExist({ timeout: 7000, timeoutMsg: 'Product Title Element not exist after 7 sec' });
        await expect(product_Title).toBeDisplayed();
    })
    it('Check Login using performance Glitch User with wait for exist', async () => {
        await $('#user-name').setValue('performance_glitch_user');
        await $('#password').setValue('secret_sauce');
        await $('.btn_action').click();
        const product_Title = await $('=Products');
        // await $(product_Title).waitUntil(async function () {
        //     return (await product_Title.getText()) === 'Products'
        // },
        //  { timeout: 6000, timeoutMsg: 'Product Title Element not exist after 7 sec' });
        await product_Title.waitUntil(async () => {
            return (await product_Title.getText()) === 'Products';
        },
            { timeout: 7000, timeoutMsg: 'Product Title Element not exist after 7 sec' });
        await expect(product_Title).toBeDisplayed();
    })
})
