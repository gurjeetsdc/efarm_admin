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
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule'
      },
      {
        path: 'icons',
        loadChildren: './icons/icons.module#IconsModule'
      },
      {
        path: 'widgets',
        loadChildren: './widgets/widgets.module#WidgetsModule'
      },
      {
        path: 'charts',
        loadChildren: './chartjs/chartjs.module#ChartJSModule'
      },
      {
        path: 'crop',
        loadChildren: './crop-management/crop-management.module#CropManagementModule'
        // loadChildren: './chartjs/chartjs.module#ChartJSModule'        
      },
      {
        path: 'input',
        loadChildren: './input-management/input-management.module#InputManagementModule'
        // loadChildren: './chartjs/chartjs.module#ChartJSModule'        
      }
    ]
  },
  {
    path: 'pages',
    component: SimpleLayoutComponent,
    data: {
      title: 'Pages'
    },
    children: [
      {
        path: '',
        loadChildren: './pages/pages.module#PagesModule',
      }
    ]
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
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),HttpModule ],
  exports: [ RouterModule,HttpModule ]
})
export class AppRoutingModule {}
