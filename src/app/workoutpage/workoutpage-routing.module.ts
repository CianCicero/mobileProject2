import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkoutpagePage } from './workoutpage.page';

const routes: Routes = [
  {
    path: '',
    component: WorkoutpagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkoutpagePageRoutingModule {}
