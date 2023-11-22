import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LtePage } from './lte.page';

const routes: Routes = [
  {
    path: '',
    component: LtePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LtePageRoutingModule {}
