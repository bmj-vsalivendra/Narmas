$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("narmans.feature");
formatter.feature({
  "line": 1,
  "name": "New supplier adding",
  "description": "\r\n\r\nIn order to Create a  new supplier\r\nAs a Admin\r\nI want to Add new supplier\r\nSo that i can get more supplies",
  "id": "new-supplier-adding",
  "keyword": "Feature"
});
formatter.before({
  "duration": 22784866314,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Adding New supplier to the Fabmans",
  "description": "",
  "id": "new-supplier-adding;adding-new-supplier-to-the-fabmans",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am navigavitive to the Narmans web page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I enter the username and password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I goto supplier and enter the details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I am check new supplier",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I am logout my account",
  "keyword": "And "
});
formatter.match({
  "location": "StepDef.i_am_navigavitive_to_the_Narmans_web_page()"
});
formatter.result({
  "duration": 4557346161,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_enter_the_username_and_password()"
});
formatter.result({
  "duration": 7207541441,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_goto_supplier_and_enter_the_details()"
});
formatter.result({
  "duration": 7715198472,
  "status": "passed"
});
formatter.match({
  "location": "StepDef.i_am_check_new_supplier()"
});
