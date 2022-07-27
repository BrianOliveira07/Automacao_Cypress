describe('Buttons', () => {

    const getIframeDocument = () => {
        return cy
            .get('#iframe_panel_body iframe')
            .its('0.contentDocument').should('exist')
    }

    const getIframeBody = () => {
        return getIframeDocument()
            .its('body').should('not.be.undefined')
            .then(cy.wrap)
    }

    it('Button must be inactive when pressed', () => {
        cy.viewport(1440, 900)
        cy.visit('https://wj-qa-automation-test.github.io/qa-test/')

        getIframeBody().find('#btn_one').should('have.text', 'One').click()
        getIframeBody().find('#btn_one').should('not.be.visible')

        getIframeBody().find('#btn_two').should('have.text', 'Two').click()
        getIframeBody().find('#btn_two').should('not.be.visible')

        getIframeBody().find('#btn_link').should('have.text', 'Four').click()
        getIframeBody().find('#btn_link').should('not.be.visible')
    })
})