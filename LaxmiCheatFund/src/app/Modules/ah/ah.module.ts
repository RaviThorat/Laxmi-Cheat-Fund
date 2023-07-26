import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';

import { AhRoutingModule } from './ah-routing.module';
import { LedgerComponent } from './ledger/ledger.component';
import { MaintainLedgerComponent } from './maintain-ledger/maintain-ledger.component';
import { LedgerPopUpTableComponent } from './ledger-pop-up-table/ledger-pop-up-table.component';


@NgModule({
  declarations: [
    LedgerComponent,
    MaintainLedgerComponent,LedgerPopUpTableComponent
  ],
  imports: [
    CommonModule,
    AhRoutingModule
  ]
})
export class AhModule { }
