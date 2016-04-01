Feature: New supplier adding


  In order to Create a  new supplier
  As a Admin
  I want to Add new supplier
  So that i can get more supplies

  Scenario: Adding New supplier to the Fabmans
    Given I am navigavitive to the Narmans web page
    And I enter the username and password
    When I goto supplier and enter the details
    Then I am check new supplier
    And  I am logout my account