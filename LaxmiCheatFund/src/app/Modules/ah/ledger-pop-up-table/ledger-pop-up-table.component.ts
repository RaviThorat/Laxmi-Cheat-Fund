import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-ledger-pop-up-table',
  templateUrl: './ledger-pop-up-table.component.html',
  styleUrls: ['./ledger-pop-up-table.component.css']
})
export class LedgerPopUpTableComponent implements OnInit{
  rcvData:any;
  c:any;
  ledger:any[];
  constructor(public cs:CommonServiceService, private fb:FormBuilder, private router:Router){
    const storedData=sessionStorage.getItem('customer');
    if(storedData){
      this.rcvData = JSON.parse(storedData);
    }
  }
  
  
  
  n:number=1

  ngOnInit(): void {
    // sessionStorage.getItem('userType');
    // console.log('userType');
    // this.c='userType';
    // console.log(this.c);
   let l=this.rcvData.ledger;
   this.ledger=l;
   console.log(this.ledger)
  }

  back(){
    this.n=1;
  }


}
