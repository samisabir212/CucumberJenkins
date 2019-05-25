$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("WriteTestResultsToDB.feature");
formatter.feature({
  "line": 1,
  "name": "Create DB, create Table, and write results",
  "description": "\n\nAs a tester i want to write my results to a database",
  "id": "create-db,-create-table,-and-write-results",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 8,
  "name": "Connect to DB, Create new table, Write test results to table",
  "description": "",
  "id": "create-db,-create-table,-and-write-results;connect-to-db,-create-new-table,-write-test-results-to-table",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@TestDB"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I connect to a database",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I create a table",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I write my results",
  "keyword": "Then "
});
formatter.match({
  "location": "ConnectToDBCreateTableWriteResultsSteps.connectToDB()"
});
formatter.result({
  "duration": 303402983,
  "status": "passed"
});
formatter.match({
  "location": "ConnectToDBCreateTableWriteResultsSteps.createTable()"
});
formatter.result({
  "duration": 37481653,
  "status": "passed"
});
formatter.match({
  "location": "ConnectToDBCreateTableWriteResultsSteps.writeResults()"
});
formatter.result({
  "duration": 17123392,
  "status": "passed"
});
});