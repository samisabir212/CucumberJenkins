$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateResultsFolder.feature");
formatter.feature({
  "line": 2,
  "name": "create Results folder and write to excel",
  "description": "\nbasically i want to create a folder, read and write to excel\nbecause im havin issues with Jenkins \nim getting permission denied",
  "id": "create-results-folder-and-write-to-excel",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@excel"
    }
  ]
});
formatter.scenario({
  "line": 8,
  "name": "create folder write to excel",
  "description": "",
  "id": "create-results-folder-and-write-to-excel;create-folder-write-to-excel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "i create a results folder and write to excel",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.createFoldlerAndWriteToExcel()"
});
formatter.result({
  "duration": 641792521,
  "status": "passed"
});
});