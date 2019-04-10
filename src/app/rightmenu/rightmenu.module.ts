import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RightmenuPage } from './rightmenu.page';

const routes: Routes = [
  {
    path: '',
    component: RightmenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RightmenuPage],
  exports: [RightmenuPage]
})
export class RightmenuPageModule { }
