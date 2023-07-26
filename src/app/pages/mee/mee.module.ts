import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeePageRoutingModule } from './mee-routing.module';

import { MeePage } from './mee.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeePageRoutingModule
  ],
  declarations: [MeePage]
})
export class MeePageModule {}
