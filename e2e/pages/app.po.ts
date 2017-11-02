import { browser } from 'protractor';

export class Page {

  navigateTo(destination) {
    browser.ignoreSynchronization = true;
    return browser.get(destination);
  }

  getTitle() {
    return browser.getTitle();
  }

}
