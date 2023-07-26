import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/Shared/common-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplyForLoanComponent } from '../apply-for-loan/apply-for-loan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-enquiry',
  templateUrl: './view-enquiry.component.html',
  template: `
    <button mat-button (click)="openPopupForm()">Open Popup Form</button>
  `,
  styleUrls: ['./view-enquiry.component.css']
})
export class ViewEnquiryComponent implements OnInit{

  constructor(public cs:CommonServiceService, private dialog: MatDialog, private router:Router){}

  enqData:any;
  n:number=0;
  buttonDisabled:boolean;

  ngOnInit(): void {
    this.cs.viewEnquiries().subscribe((e:FormGroup[])=>{
      this.enqData=e;
    });
  }

  requestCibil(eid:number){
    alert(eid+" Selected");
    this.cs.requestCibil(eid).subscribe();
    window.location.reload();
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

}
