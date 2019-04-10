import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LeftmenuPageModule } from './leftmenu/leftmenu.module';
import { RightmenuPageModule } from './rightmenu/rightmenu.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    LeftmenuPageModule,
    RightmenuPageModule,
    BrowserModule,
    IonicModule.forRoot(
      {
        menuType: 'reveal'
      }),
    AppRoutingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
