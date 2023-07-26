import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent {
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private dialog: MatDialog, private router:Router){}

  // sanctionletter:FormGroup;
  custData:any;
  step:number=1;
  san:any;
  n:number=1;

  ngOnInit(): void {
    this.cs.getLoanDisbursedCustomers("Loan_DISBURSED").subscribe((c:any)=>{
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


  // openPopupForm() {
  //   const dialogRef = this.dialog.open(SaveSanctionPopUpComponent, {
  //     width: 'maxWidth', // Adjust the width as needed
      
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     // Handle any actions after the dialog is closed (if needed)
  //     // For example, you may want to refresh data on the page
  //   });

  //   this.dialogRef.close();
  // }
}
