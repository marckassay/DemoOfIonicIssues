import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LeftmenuPage } from './leftmenu.page';

const routes: Routes = [
  {
    path: '',
    component: LeftmenuPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LeftmenuPage],
  exports: [LeftmenuPage]
})
export class LeftmenuPageModule { }
