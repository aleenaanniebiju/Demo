class RadioButtonPage{
    constructor(){
        this.$radioButton = (value) => $(`//label[text()='${value}']`)
        this.$radiobuttonstatus = (outpuvalue) => $(`//span[text()='${outpuvalue}']`)
    }

    async clickRadioButton(value)
    {
        await this.$radioButton(value).scrollIntoView({block:'center'})
        const isClicked = await this.$radioButton(value).isSelected();
        if(!isClicked)
        {
            await this.$radioButton(value).click()
        }
    }
}
export default new RadioButtonPage()