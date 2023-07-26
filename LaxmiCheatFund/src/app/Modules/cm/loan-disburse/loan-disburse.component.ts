import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-loan-disburse',
  templateUrl: './loan-disburse.component.html',
  styleUrls: ['./loan-disburse.component.css']
})
export class LoanDisburseComponent {
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private dialog: MatDialog, private router:Router){}

  custData:any;
  step:number=1;
  san:any;
  n:number=1;

  ngOnInit(): void {
    this.cs.getVerifiedCustomers("File_SANCTIONED").subscribe((c:any)=>{
      this.custData=c;
      console.log(this.custData)
    });

  }

  saveDisburseDetails(c:any,cid:any){
    console.log(c)
    this.cs.saveDisburseDetails(c,cid).subscribe();
  }

  generateDisbursePdf(c:any){
    this.cs.generateDisbursePdf(c.customerId).subscribe();
    this.cs.loanDisburseMail(c.customerId).subscribe();
    //window.location.reload();
  }


  // openPopupForm(cid:any) {
  //   sessionStorage.setItem('customerID',JSON.stringify(cid));
  //   alert(cid);
  //   const dialogRef = this.dialog.open(PDFViewerComponent, {
  //     width: 'maxWidth', // Adjust the width as needed
      
  //   });

  //   dialogRef.afterClosed().subscribe(() => {
  //     // Handle any actions after the dialog is closed (if needed)
  //     // For example, you may want to refresh data on the page
  //   });

  //   // this.dialogRef.close();
  // }
}
