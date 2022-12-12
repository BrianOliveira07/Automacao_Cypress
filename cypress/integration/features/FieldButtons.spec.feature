Feature: Field Buttons

    I want to validate the operation of the form, button, checkbox and dropdown list contained on the website

    Scenario: Validate form, button, checkbox and dropdown list
        Given that I access the site
        And write a name on the form
        And click button one
        And click on option three
        And i select example two from the drop-down list
        Then validate the selenium image contained in the page