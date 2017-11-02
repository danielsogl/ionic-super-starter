import { Page } from "../pages/app.po";

describe("App", () => {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  describe("default screen", () => {
    beforeEach(() => {
      page.navigateTo("/#/home");
    });

    it("should have a title saying Home", () => {
      page.getTitle().then(title => {
        expect(title).toEqual("Home");
      });
    });
  });
});
