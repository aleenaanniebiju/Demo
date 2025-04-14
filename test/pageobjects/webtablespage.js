class WebTablesPage {
    constructor() {
        this.$firstnametitle = () => $('//*[text()="First Name"]');
        this.$$firstNames = () => $$(`//div[@role="row"]//div[@class="rt-td"][1]`);
    }

    async clickFirstname() {
        await this.$firstnametitle().click();
    }

    async checkSorted() {
        // let firstnames = ['Alden','Cierra','Kierra'];
        let unsortedNames = await this.$$firstNames().map(names => names.getText());
        let manuallysorted = unsortedNames.sort().filter(name => name !== ' ');//for filtering null values.
        console.log("manuallysorted", manuallysorted);
        await this.clickFirstname();
        let sortedNames = await this.$$firstNames().map(names => names.getText());
        let sortedNameswithValue = sortedNames.filter(name => name !== ' ');
        console.log("sortedNameswithValue", sortedNameswithValue);
        // const filteredNames = sortedNames.filter(name => name !== ' ');
        return JSON.stringify(sortedNameswithValue) === JSON.stringify(manuallysorted);
    }
}

export default new WebTablesPage();
