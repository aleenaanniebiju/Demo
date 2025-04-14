class LandingPage {
    constructor() {
        this.$elementwidget = (widgettext) => $(`//h5[text()="${widgettext}"]`);
        this.$formswidget = () => $(`//h5[text()="Forms"]`);
    }

    async LaunchUrl() {
        await browser.url('https://demoqa.com/');
        // await browser.pause(30000);
        await browser.maximizeWindow();
        await expect(browser).toHaveTitle('DEMOQA');
        
    }

    async clickElements(widgettext) {
        const element = await this.$elementwidget(widgettext);
        await element.scrollIntoView({ block: 'start' });
        await element.waitForDisplayed({ timeout: 5000, timeoutMsg: `${widgettext} widget is not displayed within the timeout` });
        await element.click();
    }
}

export default new LandingPage();
