import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';

import { LoginComponent } from './auth/login/login.component';

import { ActiveRouteGuard } from './auth/services/activate-route-guard';
import { DeactiveRouteGuard } from './auth/services/deactivate-route-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ActiveRouteGuard]
  },
  {
    path: '',
    component: FullLayoutComponent,
    data: {
      title: 'Home'
    },
    canActivate: [DeactiveRouteGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'crops',
        loadChildren: './crops/crops.module#CropsModule'
      },
      {
        path: 'input',
        loadChildren: './input-management/input-management.module#InputManagementModule'  
      },
      {
        path: 'equipment',
        loadChildren: './equipment-management/equipment-management.module#EquipmentManagementModule'
      },
      {
        path: 'land',
        loadChildren: './land-management/land-management.module#LandManagementModule'
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'      
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),HttpModule ],
  exports: [ RouterModule,HttpModule ]
})
export class AppRoutingModule {}
