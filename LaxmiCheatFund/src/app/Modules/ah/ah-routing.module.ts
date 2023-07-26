import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LedgerComponent } from './ledger/ledger.component';
import { MaintainLedgerComponent } from './maintain-ledger/maintain-ledger.component';

const routes: Routes = [
  {path:'view_loan_disbursed_customers', component:LedgerComponent},
  {path:'maintains_ledger', component:MaintainLedgerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AhRoutingModule { }
