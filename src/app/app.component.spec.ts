import { async, TestBed } from "@angular/core/testing";
import { IonicModule, Platform } from "ionic-angular";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { StatusBarMock, SplashScreenMock, PlatformMock } from "ionic-mocks-jest";

import { MyApp } from "./app.component";

describe("MyApp Component", () => {
  let fixture;
  let component;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [MyApp],
        imports: [IonicModule.forRoot(MyApp)],
        providers: [
          { provide: StatusBar,  useFactory: () => StatusBarMock.instance() },
          { provide: SplashScreen,  useFactory: () => SplashScreenMock.instance() },
          { provide: Platform, useFactory: () => PlatformMock.instance() }
        ]
      });
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MyApp);
    component = fixture.componentInstance;
  });

  it("should be created", () => {
    expect(component instanceof MyApp).toBe(true);
  });

  it("should have two pages", () => {
    expect(component.pages.length).toBe(2);
  });
});
