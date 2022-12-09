import ButtonsPages from '../pages/ButtonsPages';
const step = new ButtonsPages

Given('that I access the site', () => {
    step.accessWebsite()
})

When('click the one button', () => {
    step.clickOne()
})

Then('validate button one inactivity', () => {
    step.validateOne()
})

When('click button two', () => {
    step.clickTwo()
})

Then('validate button two inactivity', () => {
    step.validateTwo()
})

When('click button four', () => {
    step.clickFour()
})

Then('validate button four inactivity', () => {
    step.validateFour()
})