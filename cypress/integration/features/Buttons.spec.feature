Feature: Buttons

    I want to validate the operation of the buttons

    Scenario: Validate buttons
        Given that I access the site
        When click the one button
        Then validate button one inactivity
        When click button two
        Then validate button two inactivity
        When click button four
        Then validate button four inactivity