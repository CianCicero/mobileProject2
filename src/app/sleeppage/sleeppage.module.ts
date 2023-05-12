import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SleeppagePageRoutingModule } from './sleeppage-routing.module';

import { SleeppagePage } from './sleeppage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SleeppagePageRoutingModule
  ],
  declarations: [SleeppagePage]
})
export class SleeppagePageModule {}
