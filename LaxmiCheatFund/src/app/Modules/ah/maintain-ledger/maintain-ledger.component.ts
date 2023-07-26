import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';
import { LedgerPopUpTableComponent } from '../ledger-pop-up-table/ledger-pop-up-table.component';

@Component({
  selector: 'app-maintain-ledger',
  templateUrl: './maintain-ledger.component.html',
  styleUrls: ['./maintain-ledger.component.css']
})
export class MaintainLedgerComponent {
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private dialog: MatDialog, private router:Router){}

  
  custData:any;
  custData2:any;
  step:number=1;
  san:any;
  n:number=1;

  ngOnInit(): void {
    this.cs.getLoanDisbursedCustomers("LEDGER_CREATED").subscribe((c:any)=>{
      this.custData=c;
    });

  }


  createLedger(cid:number){
    this.cs.createLedger(cid).subscribe();
    //window.location.reload();
  }

  back(){
    this.n=1;
  }


  openPopupForm(c:any) {
    this.custData2=c;
    sessionStorage.setItem('customer',JSON.stringify(c));
    const dialogRef = this.dialog.open(LedgerPopUpTableComponent, {
      width: 'maxWidth', // Adjust the width as needed
      
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed (if needed)
      // For example, you may want to refresh data on the page
    });

    // this.dialogRef.close();
  }
}
