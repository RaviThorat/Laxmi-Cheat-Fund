import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReRoutingModule } from './re-routing.module';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';
import { ApplyForLoanComponent } from './apply-for-loan/apply-for-loan.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

console.log('In RE Module');
@NgModule({
  declarations: [
    ViewEnquiryComponent,
    ApplyForLoanComponent
  ],
  imports: [
    CommonModule,
    ReRoutingModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class ReModule { }
