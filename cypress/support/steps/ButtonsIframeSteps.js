import ButtonsIframePages from '../pages/ButtonsIframePages';
const step = new ButtonsIframePages

Given('that I access the site iframe', () => {
    step.accessWebsite()
})

When('click the one button iframe', () => {
    step.clickOne()
})

Then('validate button one inactivity iframe', () => {
    step.validateOne()
})

When('click button two iframe', () => {
    step.clickTwo()
})

Then('validate button two inactivity iframe', () => {
    step.validateTwo()
})

When('click button four iframe', () => {
    step.clickFour()
})

Then('validate button four inactivity iframe', () => {
    step.validateFour()
})