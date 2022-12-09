Feature: Buttons iframe

    I want to validate the functioning of the buttons inside the iframe

    Scenario: Validate buttons inside the iframe
        Given that I access the site iframe
        When click the one button iframe
        Then validate button one inactivity iframe
        When click button two iframe
        Then validate button two inactivity iframe
        When click button four iframe
        Then validate button four inactivity iframe