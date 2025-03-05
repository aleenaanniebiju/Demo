describe("Verify an item is added to the cart", function () {
    it("Launch the Amazon India website", async function () {
        await browser.url('https://www.amazon.in/');
        const title = await browser.getTitle();
        expect(title).toContain("Amazon"); // Verifying the page has loaded
    });
});
