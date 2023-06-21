import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReproducirPageRoutingModule } from './reproducir-routing.module';

import { ReproducirPage } from './reproducir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReproducirPageRoutingModule
  ],
  declarations: [ReproducirPage]
})
export class ReproducirPageModule {}
