$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("VirginFreature.feature");
formatter.feature({
  "line": 1,
  "name": "Test VirginGame",
  "description": "I as a user test virgin game test",
  "id": "test-virgingame",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": ": I am on virgin game homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "I have to accept cookies",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I can see virgin game homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iHaveToAcceptCookies()"
});
formatter.result({
  "duration": 332743500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageSteps.iCanSeeVirginGameHomepage()"
});
formatter.result({
  "duration": 184936200,
  "error_message": "java.lang.NullPointerException\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat com.virgingames.utility.Utility.clickOnElement(Utility.java:51)\r\n\tat com.virgingames.pages.HomePage.clickOnAcceptCookie(HomePage.java:34)\r\n\tat com.virgingames.cucumber.steps.HomePageSteps.iCanSeeVirginGameHomepage(HomePageSteps.java:16)\r\n\tat ✽.Then I can see virgin game homepage(VirginFreature.feature:5)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 6,
  "name": "I am on virgin homepage",
  "description": "",
  "id": "test-virgingame;i-am-on-virgin-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I have to click on OnlineSlot",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on OnlineSlot",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I can see message \"Play Online Slots at Virgin Games\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageSteps.iHaveToClickOnOnlineSlot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomePageSteps.iClickOnOnlineSlot()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Play Online Slots at Virgin Games",
      "offset": 19
    }
  ],
  "location": "HomePageSteps.iCanSeeMessage(String)"
});
formatter.result({
  "status": "skipped"
});
});