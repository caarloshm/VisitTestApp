import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { FullComponent } from './layouts/full/full.component';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/bitacora',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          () => import('./material-component/material.module').then(m => m.MaterialComponentsModule)
      },
      {
        path: '',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentComponentsModule)
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      }
    ]
  },
  {
    path: 'login', 
    component:LoginComponent,
    pathMatch: 'full'
  }
];
// @NgModule({
//   imports: [RouterModule.forRoot(AppRoutes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }