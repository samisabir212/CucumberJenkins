$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReadExcelSheet.feature");
formatter.feature({
  "line": 2,
  "name": "read excel sheet using jenkins",
  "description": "",
  "id": "read-excel-sheet-using-jenkins",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@ReadExcel"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "read excel sheet from jenkins and git",
  "description": "",
  "id": "read-excel-sheet-using-jenkins;read-excel-sheet-from-jenkins-and-git",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "i read a cell from a test data sheet",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.readExcelSheetThroughJenkins()"
});
formatter.result({
  "duration": 461713388,
  "status": "passed"
});
});