import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeePage } from './mee.page';

const routes: Routes = [
  {
    path: '',
    component: MeePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeePageRoutingModule {}
