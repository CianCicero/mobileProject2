import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutpagePageRoutingModule } from './workoutpage-routing.module';

import { WorkoutpagePage } from './workoutpage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutpagePageRoutingModule
  ],
  declarations: [WorkoutpagePage]
})
export class WorkoutpagePageModule {}
