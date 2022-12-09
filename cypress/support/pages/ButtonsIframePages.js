import ButtonsIframeElements from '../elements/ButtonsIframeElements'
const element = new ButtonsIframeElements

const getIframeDocument = () => {
    return cy
        .get(element.iframe())
        .its('0.contentDocument').should('exist')
}

const getIframeBody = () => {
    return getIframeDocument()
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}

class ButtonsIframePages {

    accessWebsite() {

        cy.visit('/')
    }

    clickOne() {

        getIframeBody().find(element.buttonOne()).should('have.text', 'One').click()
    }

    validateOne() {

        getIframeBody().find(element.buttonOne()).should('not.be.visible')
    }

    clickTwo() {

        getIframeBody().find(element.buttonTwo()).should('have.text', 'Two').click()
    }

    validateTwo() {

        getIframeBody().find(element.buttonTwo()).should('not.be.visible')
    }

    clickFour() {

        getIframeBody().find(element.buttonFour()).should('have.text', 'Four').click()
    }

    validateFour() {

        getIframeBody().find(element.buttonFour()).should('not.be.visible')
    }

}

export default ButtonsIframePages