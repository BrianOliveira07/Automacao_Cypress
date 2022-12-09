import FieldButtonsPages from '../pages/FieldButtonsPages';
const step = new FieldButtonsPages

Given('that I access the site', () => {
    step.accessWebsite()
})

And('write a name on the form', () => {
    step.typeName()
})

And('click button one', () => {
    step.clickOne()
})

And('click on option two', () => {
    step.clickCheckBox()
})

And('i select example two from the drop-down list', () => {
    step.selectOption()
})

Then('validate the selenium image contained in the page', () => {
    step.validateImage()
})