import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { CropManagementComponent } from './crop-management.component';

const routes: Routes = [
  {
    path: '',
    component: CropManagementComponent,
    data: {
      title: 'crop'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CropManagementRoutingModule {}
