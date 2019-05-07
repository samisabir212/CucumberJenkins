Feature: read excel sheet using jenkins

@ReadExcel
Scenario: read excel sheet from jenkins and git

	Given i read a cell from a test data sheet
	
@BuildParameters
Scenario: read excel sheet from jenkins and git

	Given i read a cell from a test data sheet using jenkins Build Parameters
	