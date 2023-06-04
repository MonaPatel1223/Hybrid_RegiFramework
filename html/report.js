$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("target/test-classes/Features/Register.feature");
formatter.feature({
  "line": 1,
  "name": "Nopcommerce Registration",
  "description": "",
  "id": "nopcommerce-registration",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14438723500,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Nopcommerce Registration",
  "description": "",
  "id": "nopcommerce-registration;nopcommerce-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is on registration page and verify registartion page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user enter registration details and click on register button",
  "keyword": "And "
});
formatter.match({
  "location": "Register.user_click_on_register_link()"
});
formatter.result({
  "duration": 1502219458,
  "status": "passed"
});
formatter.match({
  "location": "Register.user_is_on_registration_page_and_verify_registartion_page()"
});
formatter.result({
  "duration": 16536417,
  "status": "passed"
});
formatter.match({
  "location": "Register.select_a_gender_enter_a_valid_firstname_and_lastname()"
});
formatter.result({
  "duration": 3142171792,
  "status": "passed"
});
formatter.after({
  "duration": 132262084,
  "status": "passed"
});
});