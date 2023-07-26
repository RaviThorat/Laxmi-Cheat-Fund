import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-check-cibil',
  templateUrl: './check-cibil.component.html',
  styleUrls: ['./check-cibil.component.css']
})
export class CheckCibilComponent implements OnInit{

    constructor(public fb:FormBuilder ,public cs:CommonServiceService){}
    
    enqData:any;

    ngOnInit(): void {
      this.cs.cibilRequired().subscribe((updatedData:any)=>{
        this.enqData=updatedData;
        console.log(this.enqData);
      });

    }

    checkCibil(eid:number){
        console.log(eid);
        this.cs.checkCibil(eid).subscribe();
        window.location.reload();
    }

}
