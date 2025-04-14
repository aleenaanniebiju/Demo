class WidgetLandingPage{
    constructor()
    {
        this.$selectMenu = () => $(`//span[text()='Select Menu']`);
        this.$widgetsSideMenu = () => $(`//div[text()='Widgets']`);
    }

    async scrolltoWidgetsection()
    {
        await this.$widgetsSideMenu().scrollIntoView({block:'start'});
    }
    
}
export default new WidgetLandingPage();