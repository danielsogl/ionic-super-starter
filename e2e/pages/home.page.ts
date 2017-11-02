import { element, browser, by, Key } from "protractor";

export class HomePage {

  getPage() {
    return browser.get("/#/home");
  }

  getPageTitle() {
    return browser.getTitle();
  }

  getMenuButton() {
    return element(by.id("button_menu"));
  }

  getMenuToggleButton() {
    return element(by.id("button_menu_toggle"));
  }

}
