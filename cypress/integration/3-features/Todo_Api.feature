@all @api @todo
#noinspection SpellCheckingInspection
Feature: API

  Background:
    Given the base url is "https://jsonplaceholder.typicode.com"

  @get
  Scenario: API GET 1
    When I GET "/todos/1"
    Then the status code is "200"
    And the todo GET response data is:
      | userId    | 1                  |
      | id        | 1                  |
      | title     | delectus aut autem |
      | completed | false              |

  @get
  Scenario: API GET 2
    When I GET "/todos/2"
    Then the status code is "200"
    And the todo GET response data is:
      | userId    | 1                                  |
      | id        | 2                                  |
      | title     | quis ut nam facilis et officia qui |
      | completed | false                              |

  @post
  Scenario: API POST
    When I prepare the payload for POST todo:
      | title  | foo |
      | body   | bar |
      | userId | 1   |

    When I POST "/todos/"
    Then the status code is "201"
    And the todo POST response data is:
      | title  | foo |
      | body   | bar |
      | userId | 1   |

