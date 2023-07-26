import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';
import { PDFViewerComponent } from '../pdfviewer/pdfviewer.component';

@Component({
  selector: 'app-view-sanction-letter-send',
  templateUrl: './view-sanction-letter-send.component.html',
  styleUrls: ['./view-sanction-letter-send.component.css']
})
export class ViewSanctionLetterSendComponent {
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private dialog: MatDialog, private router:Router){}

  custData:any;
  step:number=1;
  san:any;
  n:number=1;

  ngOnInit(): void {
    this.cs.getVerifiedCustomers("File_SANCTIONED").subscribe((c:any)=>{
      this.custData=c;
    });

  }

  generatePdf(cid:number){
    this.cs.generatePdf(cid).subscribe();
    //window.location.reload();
  }


  openPopupForm(cid:any) {
    sessionStorage.setItem('customerID',JSON.stringify(cid));
    alert(cid);
    const dialogRef = this.dialog.open(PDFViewerComponent, {
      width: 'maxWidth', // Adjust the width as needed
      
    });

    dialogRef.afterClosed().subscribe(() => {
      // Handle any actions after the dialog is closed (if needed)
      // For example, you may want to refresh data on the page
    });

    // this.dialogRef.close();
  }
}
