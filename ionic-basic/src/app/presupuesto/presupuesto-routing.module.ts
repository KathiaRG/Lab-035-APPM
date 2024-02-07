import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PRESUPUESTOPage } from './presupuesto.page';

const routes: Routes = [
  {
    path: '',
    component: PRESUPUESTOPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PRESUPUESTOPageRoutingModule {}
