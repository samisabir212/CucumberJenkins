Feature: Create DB, create Table, and write results 


	As a tester i want to write my results to a database
	

@TestDB
Scenario: Connect to DB, Create new table, Write test results to table

	Given I connect to a database
	Then I create a table 
	Then I write my results