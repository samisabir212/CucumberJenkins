@excel
Feature: create Results folder and write to excel

	basically i want to create a folder, read and write to excel
	because im havin issues with Jenkins 
	im getting permission denied
	you will get access denied when you try to access directories in your machine
	but this time i will try to do it inside the project

@outsideProject
Scenario: create folder write to excel inside the project

	Given i create a results folder and write to excel
	
	
@insideProject
Scenario: create folder write to excel inside the project

	Given i create a results folder and write to excel inside project
	
	
	