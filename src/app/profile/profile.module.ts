import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {DataTableModule} from "angular2-datatable";
import {NG2DataTableModule} from "angular2-datatable-pagination";
import { ChangePasswordComponent } from './changepassword-component/changepassword.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MyprofileComponent } from './myprofile-component/myprofile.component';
import { ProfileService } from './services/profile.service';
import { CustomFormsModule } from 'ng2-validation';
import { DatePickerModule } from 'ng2-datepicker';
import { FlashMessagesModule } from 'ngx-flash-messages';
import { SharedModule } from '../shared/shared.module';
import { EqualValidator } from '../profile/equal-validator.directive';
import { CommanService } from '../shared/services/comman.service';
@NgModule({
  imports: [
  	 ProfileRoutingModule,
  	 CommonModule,
     NG2DataTableModule,
     // DataTableModule,
     CustomFormsModule,
     DatePickerModule, 
     FlashMessagesModule,
     SharedModule    
  ],
  providers: [
  	ProfileService,
    CommanService
  ],
  declarations: [
  	ChangePasswordComponent,
    MyprofileComponent,
    EqualValidator  	
  ]
})
export class ProfileModule { }