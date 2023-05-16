Feature: Use the Privathaftpflicht calculator and tariff search pages

Background:
    Given I can open www.verivox.de
    When I navigate to "versicherungen" and select "privathaftpflicht"
      And I enter "30" age and Single ohne Kinder
    Then I go to the Privathaftpflicht personal information page
      And I enter "01.01.1991" birthdate
      And I enter "13088" zip code
      And I click the "Jetzt vergleichen" button
    Then I should see a page that lists the available tariffs for my selection

  #Scenario: Verify the DSL calculator
    #Then Verify that at least 5 tariffs are shown

  Scenario: Load multiple tariff result pages
    Then I should see the total number of available tariffs listed above all the result list
    When I scroll to the end of the result list page
    Then I should see only the first 20 tariffs displayed
    When I click on the button labeled 20 weitere Tarife laden
    Then I should see the next 20 tariffs displayed
    When I can continue to load any additional tariffs until all tariffs have been displayed
    Then Verify that the weitere Tarife laden button is no longer displayed when all the tariffs are visible
      And Verify that the total number of tariffs displayed matches the total listed number of tariffs above result list

  #Scenario: Verify offer details for a selected tariff
  #  Then I should see the tariff price of the first tariff
   # When I open tariff details
   # Then I see tariff details section "Weitere Leistungen"
   #   And I see tariff details section "Allgemein"
   #   And I see tariff details section "Tätigkeiten und Hobbys"
   #   And I see tariff details section "Miete & Immobilien"
   #   And I see tariff details section "Dokumente"
   #   And I see the "Zum Online-Antrag" button
   # Then Verify that the offer page displays both In 5 Minuten online wechseln buttons
    #  And Verify that the offer page displaysthe expected page contents and tariff details for your selected tariff
