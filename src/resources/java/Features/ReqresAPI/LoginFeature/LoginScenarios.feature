Feature: Login Feature



@login
Scenario Outline: Successful Login

	user should be able to successfully login with valid username and password
	
	Then Login with valid username and password "<Testname>"
	
	Examples:
	| Testname       |
	| SuccessfulLogin|