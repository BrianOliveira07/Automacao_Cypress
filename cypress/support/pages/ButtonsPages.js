import ButtonsElements from '../elements/ButtonsElements'
const element = new ButtonsElements

class ButtonsPages {

    accessWebsite() {

        cy.visit('/')
    }

    clickOne() {

        cy.get(element.buttonOne()).click()
    }

    validateOne() {

        cy.get(element.buttonOne()).should('not.be.visible')
    }

    clickTwo() {

        cy.get(element.buttonTwo()).click()
    }

    validateTwo() {

        cy.get(element.buttonTwo()).should('not.be.visible')
    }

    clickFour() {

        cy.get(element.buttonFour()).click()
    }

    validateFour() {

        cy.get(element.buttonFour()).should('not.be.visible')
    }

}

export default ButtonsPages