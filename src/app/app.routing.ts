import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
// Layouts
import { FullLayoutComponent } from './layouts/full-layout.component';
import { SimpleLayoutComponent } from './layouts/simple-layout.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ActiveRouteGuard } from './activate-route-guard';
import { DeactiveRouteGuard } from './deactivate-route-guard';
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
    path: 'register',
    component: RegisterComponent,
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
        path: 'user',
        loadChildren: './user-management/user-management.module#UserManagementModule'      
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),HttpModule ],
  exports: [ RouterModule,HttpModule ]
})
export class AppRoutingModule {}
