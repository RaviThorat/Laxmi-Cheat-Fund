import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { ViewSanctionLetterSendComponent } from './view-sanction-letter-send/view-sanction-letter-send.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';
import { GenerateDisburseLetterComponent } from './generate-disburse-letter/generate-disburse-letter.component';

const routes: Routes = [
  {path:"view_verified_customers",component:SanctionLetterComponent},
  {path:"prepares_sanction_letter",component:ViewSanctionLetterSendComponent},
  {path:"disburses_sanctioned-loan",component:LoanDisburseComponent},
  {path:"generate_loan_disburse",component:GenerateDisburseLetterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CmRoutingModule { }
