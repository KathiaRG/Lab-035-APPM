import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PRESUPUESTOPageRoutingModule } from './presupuesto-routing.module';

import { PresupuestoPage } from './presupuesto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PRESUPUESTOPageRoutingModule
  ],
  declarations: [PresupuestoPage]
})
export class PRESUPUESTOPageModule {}
