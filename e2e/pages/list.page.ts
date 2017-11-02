import { element, browser, by, Key } from "protractor";

export class ListPage {

  getPage() {
    return browser.get("/#/list");
  }

  getPageTitle() {
    return browser.getTitle();
  }

}
