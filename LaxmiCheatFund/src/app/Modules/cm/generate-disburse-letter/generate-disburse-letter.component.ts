import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-generate-disburse-letter',
  templateUrl: './generate-disburse-letter.component.html',
  styleUrls: ['./generate-disburse-letter.component.css']
})
export class GenerateDisburseLetterComponent {
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private router:Router){}

  custData:any;
  step:number=1;
  san:any;
  n:number=1;


  ngOnInit(): void {
    this.cs.getVerifiedCustomers("LOAN_DISBURSED").subscribe((c:any)=>{
      this.custData=c;
      console.log(this.custData)
    });

  }

  generateDisbursePdf(c:any){
    this.cs.generateDisbursePdf(c.customerId).subscribe();
    this.cs.loanDisburseMail(c.customerId).subscribe();
    //window.location.reload();
  }


}
