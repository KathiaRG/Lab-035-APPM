import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlumnosPageRoutingModule } from './alumnos-routing.module';

import { AlumnoPage } from './alumnos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlumnosPageRoutingModule
  ],
  declarations: [AlumnoPage]
})
export class AlumnosPageModule {}
