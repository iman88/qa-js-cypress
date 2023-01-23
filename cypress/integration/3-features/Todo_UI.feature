@all @ui @todo
Feature: example to-do app

  Background:
    When I open "https://example.cypress.io/todo" page

  Scenario: displays two todo items by default

    Then "2" items are displayed

    And 1st todo is "Pay electric bill"
    And 2nd todo is "Walk the dog"

    And the items list is
      | first | Pay electric bill |
      | last  | Walk the dogg      |

    And the items in list are
      | Walk the dog      |
      | Pay electric bill |