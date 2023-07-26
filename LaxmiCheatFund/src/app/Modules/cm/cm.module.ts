import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CmRoutingModule } from './cm-routing.module';
import { SanctionLetterComponent } from './sanction-letter/sanction-letter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewSanctionLetterSendComponent } from './view-sanction-letter-send/view-sanction-letter-send.component';
import { LoanDisburseComponent } from './loan-disburse/loan-disburse.component';
import { PDFViewerComponent } from './pdfviewer/pdfviewer.component';
import { GenerateDisburseLetterComponent } from './generate-disburse-letter/generate-disburse-letter.component';


@NgModule({
  declarations: [
    SanctionLetterComponent,
    ViewSanctionLetterSendComponent,
    LoanDisburseComponent,
    PDFViewerComponent,
    GenerateDisburseLetterComponent,
  ],
  imports: [
    CommonModule,
    CmRoutingModule,
    ReactiveFormsModule
  ]
})
export class CmModule { }
