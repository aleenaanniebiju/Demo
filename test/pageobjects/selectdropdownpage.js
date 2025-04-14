class SelectDropdownPage{
    
    constructor()
    {
        this.$selectcolordropdown = () => $(`//select[@id="oldSelectMenu"]`);
        this.$selectMenuTitle = () =>  $(`//h1[text()='Select Menu']`);
        this.$selectValuedropdown = () => $(`//*[@id="withOptGroup"]`);
        this.$valuetoselect = (value) => $(`//*[text()="${value}"]`);


    }
    async selcttoview()
    {
        await this.$selectMenuTitle().scrollIntoView({block:'start'});
    }

    async selectColor(colortoselect)
    {
        await this.$selectMenuTitle().scrollIntoView({block:'start'})
        await this.$selectcolordropdown().click();
        await this.$selectcolordropdown().selectByAttribute('value',colortoselect);
        // await this.$selectcolordropdown().selectByIndex(4);
        // await this.$selectcolordropdown().selectByVisibleText('Yellow');

    }

    async selectValue(valuetoselect)
    {
        await this.$selectValuedropdown().click();
        await this.$valuetoselect(valuetoselect);
    }


}
export default new SelectDropdownPage();