import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SleeppagePage } from './sleeppage.page';

const routes: Routes = [
  {
    path: '',
    component: SleeppagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SleeppagePageRoutingModule {}
