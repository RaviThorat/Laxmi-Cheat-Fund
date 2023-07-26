import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-sanction-letter',
  templateUrl: './sanction-letter.component.html',
  styleUrls: ['./sanction-letter.component.css']
})
export class SanctionLetterComponent {
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private dialog: MatDialog, private router:Router){}

  sanctionletter:FormGroup;
  custData:any;
  step:number=1;
  san:any;
  n:number=1;

  ngOnInit(): void {
    this.cs.getVerifiedCustomers("File_PENDING").subscribe((c:any)=>{
      this.custData=c;
    });

    
    this.sanctionletter=this.fb.group({
      applicantFirstName:[''],
      applicantMiddleName:[''],
      applicantLastName:[''],
      mobileNo:[],
      email:[''],
      loanAmtSanctioned:[],
      rateOfInterest:[],
      loanTenureInYears:[],
      modeOfPayment:['']
    })

  }

  
  addSanctionData(c:any){
    this.n=2;
   this.san=c;
  }

  submit(cid:number){
    console.log(this.sanctionletter.value);
    this.cs.addSanctionData(this.sanctionletter.value, cid).subscribe();
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
