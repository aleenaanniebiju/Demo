describe('Learn General Concept', function () {
    it('Check Dismiss Alert functionality in a Page', async () => {
        await browser.url('https://demoqa.com/alerts');
        await browser.maximizeWindow();
        const alertbutton = await $(`#promtButton`);
        await alertbutton.click();
        const alertText = await alertbutton.getAlertText();
        console.log('Alert Text = ', alertText);
        // await browser.pause(5000);
        await browser.acceptAlert();
    })

    xit('Check drag and drop functionality', async () => {
        await browser.url('https://the-internet.herokuapp.com/drag_and_drop');
        await browser.maximizeWindow();
        // await browser.pause(5000);
        const fromelement = await $('#column-a');
        const toelement = await $('#column-b');
        await fromelement.dragAndDrop(toelement);
        // await browser.pause(5000);
    })
})
