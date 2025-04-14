class CheckBoxPage {
    constructor() {
        this.$homeSelectBox = () => $('//label[@for="tree-node-home"]');
        this.$homeSelectBoxStatus = () => $('//input[@id="tree-node-home"]');
        this.$desktopSelectBox = () => $('//label[@for="tree-node-desktop"]');
        this.$desktopSelectBoxStatus = () => $('//input[@id="tree-node-desktop"]');
        this.$togglebutton = (togglevalue) => $(`//*[text()="${togglevalue}"]/../preceding-sibling::button`);
        this.$collpasestatuselement = () => $(`//*[@for="tree-node-home"]//*[@class="rct-node-icon"]//*[contains(@class,"rct-icon")]`);
    }

    async clickHomeSelectBox() {
        await this.$homeSelectBox().scrollIntoView();
        const homeCheckBoxStatus = await this.$homeSelectBoxStatus();
        if (!(await homeCheckBoxStatus.isSelected())) {
            await this.$homeSelectBox().click();
        }
    }

    async clickDesktopSelectBox() {
        await this.$desktopSelectBox().scrollIntoView();
        const desktopCheckBoxStatus = await this.$desktopSelectBoxStatus();
        console.log('desktopCheckBoxStatus', desktopCheckBoxStatus);
        if (!(await desktopCheckBoxStatus.isSelected())) {
            await this.$desktopSelectBox().click();
        }
    }

    async clicktoggleButton(value) {
        let attribute = await this.$collpasestatuselement().getAttribute('class');
        if (attribute === 'rct-icon rct-icon-parent-close') {
            await this.$togglebutton(value).click();
        }
    }
}

export default new CheckBoxPage();
