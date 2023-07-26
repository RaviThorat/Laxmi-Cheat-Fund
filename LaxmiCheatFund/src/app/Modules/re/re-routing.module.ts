import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewEnquiryComponent } from './view-enquiry/view-enquiry.component';

const routes: Routes = [
  {path:"view_enquiry",component:ViewEnquiryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReRoutingModule { }
