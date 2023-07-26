import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent implements OnInit{
  constructor(public fb:FormBuilder, public cs:CommonServiceService){}

  enquiryForm:any;
  
  ngOnInit(): void {
    this.enquiryForm = this.fb.group({
      firstName:[''],
      lastName:[''],
      age:[],
      email:[''],
      mobileNo:[],
      panCardNo:['']
    });
  }

  enquirySubmit(){
    this.cs.enquiryFormSubmit(this.enquiryForm.value).subscribe();
    window.location.reload();
  }


}
