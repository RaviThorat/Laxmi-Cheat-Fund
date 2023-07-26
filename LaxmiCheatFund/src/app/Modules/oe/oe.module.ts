import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OeRoutingModule } from './oe-routing.module';
import { VerifyDocComponent } from './verify-doc/verify-doc.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

console.log('In OE Module');
@NgModule({
  declarations: [
    VerifyDocComponent
  ],
  imports: [
    CommonModule,
    OeRoutingModule
  ]
})
export class OeModule { }
