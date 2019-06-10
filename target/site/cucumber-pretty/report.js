$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("ReqresAPI/LoginFeature/LoginScenarios.feature");
formatter.feature({
  "line": 1,
  "name": "Login Feature",
  "description": "",
  "id": "login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Successful Login",
  "description": "\nuser should be able to successfully login with valid username and password",
  "id": "login-feature;successful-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Login with valid username and password \"\u003cTestname\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "login-feature;successful-login;",
  "rows": [
    {
      "cells": [
        "Testname"
      ],
      "line": 13,
      "id": "login-feature;successful-login;;1"
    },
    {
      "cells": [
        "SuccessfulLogin"
      ],
      "line": 14,
      "id": "login-feature;successful-login;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Successful Login",
  "description": "\nuser should be able to successfully login with valid username and password",
  "id": "login-feature;successful-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "Login with valid username and password \"SuccessfulLogin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "SuccessfulLogin",
      "offset": 40
    }
  ],
  "location": "LoginSteps.Login_with_valid_username_and_password(String)"
});
formatter.result({
  "duration": 2122101531,
  "status": "passed"
});
});