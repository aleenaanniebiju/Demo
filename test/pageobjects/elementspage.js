class ElementsPage {
    constructor() {
        this.$checkboxMenu = () => $('//span[text()="Check Box"]');
        this.$webTablesMenu = () => $('//span[text()="Web Tables"]');
        this.$radioButtonMenu = () => $('//span[text()="Radio Button"]');
        this.$pageTitle = (header) => $(`//h1[text()="${header}"]`);
    }



}
export default new ElementsPage();