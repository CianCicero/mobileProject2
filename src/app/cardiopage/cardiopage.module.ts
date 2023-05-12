import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiopagePageRoutingModule } from './cardiopage-routing.module';

import { CardiopagePage } from './cardiopage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiopagePageRoutingModule
  ],
  declarations: [CardiopagePage]
})
export class CardiopagePageModule {}
