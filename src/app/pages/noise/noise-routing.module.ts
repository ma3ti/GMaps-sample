import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoisePage } from './noise.page';

const routes: Routes = [
  {
    path: '',
    component: NoisePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoisePageRoutingModule {}
