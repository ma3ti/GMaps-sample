import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    children: [
      {
        path: 'wifi',
        loadChildren: () => import('../pages/wifi/wifi.module').then(m => m.WifiPageModule)
      },
      {
        path: 'lte',
        loadChildren: () => import('../pages/lte/lte.module').then(m => m.LtePageModule)
      },
      {
        path: 'noise',
        loadChildren: () => import('../pages/noise/noise.module').then(m => m.NoisePageModule)
      },
      {
        path: '',
        redirectTo: '/home/wifi',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/wifi',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
