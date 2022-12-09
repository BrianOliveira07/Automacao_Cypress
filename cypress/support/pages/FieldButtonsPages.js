import FieldButtonsElements from '../elements/FieldButtonsElements'
const element = new FieldButtonsElements

class FieldButtonsPages {

    accessWebsite() {

        cy.visit('/')
    }

    typeName() {

        cy.get(element.formField()).type('Scoot Bylen')
    }

    clickOne() {

        cy.get(element.buttonOne()).click()
    }

    clickCheckBox() {

        cy.get(element.checkBoxThreeClick()).click()
    }

    selectOption() {

        cy.get(element.selectBox()).select(element.optionTwo())
    }

    validateImage() {

        cy.get(element.seleniumImage()).should('to.be.visible')
    }

}

export default FieldButtonsPages