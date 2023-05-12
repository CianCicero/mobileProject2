import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiopagePage } from './cardiopage.page';

const routes: Routes = [
  {
    path: '',
    component: CardiopagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiopagePageRoutingModule {}
