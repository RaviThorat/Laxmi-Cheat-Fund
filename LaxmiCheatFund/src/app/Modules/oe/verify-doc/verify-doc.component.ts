import { Component, OnInit } from '@angular/core';
import { ApplyForLoanComponent } from '../../re/apply-for-loan/apply-for-loan.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-verify-doc',
  templateUrl: './verify-doc.component.html',
  styleUrls: ['./verify-doc.component.css']
})
export class VerifyDocComponent implements OnInit{
  
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private dialog: MatDialog, private router:Router){}

  customerVerification:any;
  custData:any;
  custDataSingle:any;
  buttonDisabled:boolean;
  customer:any
  file:string;
  step:number=1;
  doc:any
  x:any=1;

  ngOnInit(): void {
    this.x=1;
    this.cs.getAllCreatedCustomers("Customer_Created").subscribe((e:any)=>{
      this.custData=e;
    });

    this.customerVerification=this.fb.group({})

  }


  openPopupForm() {
    const dialogRef = this.dialog.open(ApplyForLoanComponent, {
      width: 'maxWidth', // Adjust the width as needed
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed (if needed)
      // For example, you may want to refresh data on the page
    });
  }

  onVerify(c:any)
  {
    console.log(c)
    this.x=5
    this.doc=c;
    this.custDataSingle=c;
  }

  next()
  {
    this.step++;
  }
  prev(){
    this.step--;
  }

  verifyAllDoc(customerId:number)
  {
      this.cs.verifyAllDoc(this.customerVerification,customerId).subscribe();
  }

}
