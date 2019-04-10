import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { By, Builder, Browser } from 'selenium-webdriver';
import { Driver, ServiceBuilder } from 'selenium-webdriver/chrome';


describe('AppComponent', () => {

  let driver: Driver, statusBarSpy, splashScreenSpy, platformReadySpy, platformSpy, routerSpy;

  beforeEach(async(() => {
    statusBarSpy = jasmine.createSpyObj('StatusBar', ['styleDefault']);
    splashScreenSpy = jasmine.createSpyObj('SplashScreen', ['hide']);
    platformReadySpy = Promise.resolve();
    platformSpy = jasmine.createSpyObj('Platform', { ready: platformReadySpy });
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: StatusBar, useValue: statusBarSpy },
        { provide: SplashScreen, useValue: splashScreenSpy },
        { provide: Platform, useValue: platformSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initialize the app', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    expect(statusBarSpy.styleDefault).toHaveBeenCalled();
    expect(splashScreenSpy.hide).toHaveBeenCalled();
    expect(routerSpy.navigate).toHaveBeenCalled();
  });


  it('should', async () => {
    TestBed.createComponent(AppComponent);
    expect(platformSpy.ready).toHaveBeenCalled();
    await platformReadySpy;
    try {
      driver = await new Builder().forBrowser(Browser.CHROME)
        .setChromeService(new ServiceBuilder('bin/chromedriver_win32/chromedriver.exe'))
        .build();

      const ele = driver.findElement(By.xpath('/html/body/app-root/ion-app/ion-router-outlet'));

      driver.touchActions()
        .flickElement(ele, { x: 100, y: 0 }, 1000)
        .perform();

    } finally {
      await driver.quit();
    }
  });
});
