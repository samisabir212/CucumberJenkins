$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateResultsFolder.feature");
formatter.feature({
  "line": 2,
  "name": "create Results folder and write to excel",
  "description": "\nbasically i want to create a folder, read and write to excel\nbecause im havin issues with Jenkins \nim getting permission denied\nyou will get access denied when you try to access directories in your machine\nbut this time i will try to do it inside the project",
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
  "line": 17,
  "name": "create folder write to excel inside the project",
  "description": "",
  "id": "create-results-folder-and-write-to-excel;create-folder-write-to-excel-inside-the-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@insideProject"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "i create a results folder and write to excel inside project",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.createFoldlerAndWriteToExcel_InsideProject()"
});
formatter.result({
  "duration": 695852456,
  "status": "passed"
});
});