import { Component, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentInit {
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

}
