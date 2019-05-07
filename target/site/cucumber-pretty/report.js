$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReadExcelSheet.feature");
formatter.feature({
  "line": 1,
  "name": "read excel sheet using jenkins",
  "description": "",
  "id": "read-excel-sheet-using-jenkins",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 9,
  "name": "read excel sheet from jenkins and git",
  "description": "",
  "id": "read-excel-sheet-using-jenkins;read-excel-sheet-from-jenkins-and-git",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@BuildParameters"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "i read a cell from a test data sheet using jenkins Build Parameters",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitions.readExcelSheetThroughJenkinsBuildParameters()"
});
formatter.result({
  "duration": 588145293,
  "error_message": "java.lang.NullPointerException\n\tat Lib.Lib.readexcelvalue(Lib.java:666)\n\tat Steps.StepDefinitions.readExcelSheetThroughJenkinsBuildParameters(StepDefinitions.java:52)\n\tat ✽.Given i read a cell from a test data sheet using jenkins Build Parameters(ReadExcelSheet.feature:11)\n",
  "status": "failed"
});
});