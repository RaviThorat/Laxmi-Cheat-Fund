import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-pdfviewer',
  templateUrl: './pdfviewer.component.html',
  styleUrls: ['./pdfviewer.component.css']
})
export class PDFViewerComponent implements OnInit {


  c:any;
  custData:any;

  constructor(
    private cs:CommonServiceService,
    private dialogRef: MatDialogRef<PDFViewerComponent>
  ) { 
    const storedData=sessionStorage.getItem('customerID');
    this.c=JSON.parse(storedData);
  }
  ngOnInit(): void {
    this.cs.generatePdf(this.c).subscribe((customer:any)=>{
        this.custData=customer;
    });
  }


  sendEmail(){
    this.cs.sendEmail(this.c).subscribe();
  }
  
}
