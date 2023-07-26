import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CommonServiceService } from 'src/app/Shared/common-service.service';

@Component({
  selector: 'app-apply-for-loan',
  templateUrl: './apply-for-loan.component.html',
  styleUrls: ['./apply-for-loan.component.css']
})
export class ApplyForLoanComponent implements OnInit{
  
  addressProof:any;
  panCard:any;
  IncomeTax:any;
  addharCard:any;
  photo:any;
  signature:any;
  mortgagePropertyProof:any;
  professionsalaryslips:any;
  propertyDocuments:any;

  
  applyForm: FormGroup;
  personalDetails: FormGroup;
  educationalDetails: FormGroup;
  addressDetails: FormGroup;
  personal_step = false;
  // address_step = false;
  // education_step = false;

  reader=new FileReader();
  resumeDoc:any;
  docsrc:any;

  step:number=1;
  

  constructor(
    private formBuilder: FormBuilder, private cs:CommonServiceService,
    private dialogRef: MatDialogRef<ApplyForLoanComponent>
  ) { }

  ngOnInit() {
    this.applyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Add more form fields as needed
    });

    this.personalDetails = this.formBuilder.group({
      customerFirstName: [''], // use Validators.required for validation like this=> customerFirstName: ['', Validators.required],
      customerMiddleName: [''],
      customerLastName: [''],
      customerDateOfBirth: [''],
      customerAge: [],
      customerGender: [''],
      customerEmail: [''],
      customerMobileNumber: [],
      customerAdditionalMobileNumber: [],
      customerTotalLoanRequired: [],
      
      educationalInfo:this.formBuilder.group({
        educationType: [''],
      }),

      allpersonalDoc:this.formBuilder.group({
        addressProof: [''],
        panCard: [''],
        incomeTax: [''],
        addharCard: [''],
        photo: [''],
        signature: ['']
      }),

      familydependentInfo:this.formBuilder.group({
        fatherName:[''],
        motherName:[''],
        spouseName:[''],
        maritalStatus:[''],
        familyIncome:['']
      }),

      customerAddress:this.formBuilder.group({
        permanentAddress:this.formBuilder.group({
          areaname:[''],
          cityname:[''],
          district:[''],
          state:[''],
          pincode:[],
          houseNumber:[],
          landmark:[''],
        }),
        localAddress:this.formBuilder.group({
          areaname:[''],
          cityname:[''],
          district:[''],
          state:[''],
          pincode:[],
          houseNumber:[],
          landmark:[''],
        })
      }),

      mortgageDetails:this.formBuilder.group({
        mortgagePropertyValue:[],
        mortgagePropertyType:[''],
        mortgageLoanOnProperty:[]
      }),

      profession:this.formBuilder.group({
        professiontype:[''],
        professionsalary:[],
        professionsalaryType:[''],
        professionExperience:[''],
        professionDesignation:[''],
      
      }),

      cbscore:this.formBuilder.group({
        cibilScore:[]
      }),

      accountdetails:this.formBuilder.group({
        accounType:[''],
        bankName:[''],
        bankBranchName:[''],
        accountNumber:[],
        accountHolderFirstName:[''],
        accountHolderMiddleName:[''],
        accountHolderLastName:[''],
        accountIfscNumber:[''],
        accountBalance:[]
      }),

      propertyinfo:this.formBuilder.group({
        propertyType:[''],
        propertyArea:[''],
        propertyPrice:[],
        propertyAddress:this.formBuilder.group({
          areaname:[''],
          cityname:[''],
          district:[''],
          state:[''],
          pincode:[],
          houseNumber:[],
          landmark:[''],
        })
      }),

      gurantordetails:this.formBuilder.group({
        guarantorFirstName:[''],
        guarantorMiddleName:[''],
        guarantorLastName:[''],
        guarantorMobileNumber:[],
        guarantorAdharCardNo:[],
        areaname:[''],
        cityname:[''],
        district:[''],
        state:[''],
        pincode:[],
        houseNumber:[],
        landmark:['']
      })

  });


  // this.addressDetails = this.formBuilder.group({
  //     city: ['', Validators.required],
  //     address: ['', Validators.required],
  //     pincode: ['',Validators.required]
  // });

  }

  submitForm() {
    if (this.applyForm.valid) {
      console.log(this.applyForm.value);
      // Process the form data here (e.g., send it to the server)
      // ...
      // After successful form submission, close the dialog
      this.dialogRef.close();
    }
  }

  get personal() { return this.personalDetails.controls; }
  get education() { return this.educationalDetails.controls; }
  get address() { return this.addressDetails.controls; }

  next(){
    console.log(this.personalDetails.value);
    this.step++;
    // if(this.step==1){
    //       // this.personal_step = true;
    //       // if (this.personalDetails.invalid) { return  }
    //       this.step++
    // }
    // else if(this.step==2){
    //     // this.address_step = true;
    //     // if (this.personalDetails.controls['personalDetails.educationalInfo'].invalid) { return }
    //         this.step++;
    // }

  }

  previous(){
    this.step--
  }

  onaddressProof(event:any){
    this.addressProof=event.target.files[0];
    // const file=event.target.files[0];
    // this.reader.onload= rs => this.docsrc=this.reader.result;
    // this.reader.readAsDataURL(file);
  }

  onpanCard(event:any){
    this.panCard=event.target.files[0];
  }

  onIncomeTax(event:any){
    this.IncomeTax=event.target.files[0];
  }

  onaddharCard(event:any){
    this.addharCard=event.target.files[0];
  }

  onphoto(event:any){
    this.photo=event.target.files[0];
  }

  onsignature(event:any){
    this.signature=event.target.files[0];
  }

  onmortgagePropertyProof(event:any){
    this.mortgagePropertyProof=event.target.files[0];
  }

  onprofessionsalaryslips(event:any){
    this.professionsalaryslips=event.target.files[0];
  }

  onpropertyDocuments(event:any){
    this.propertyDocuments=event.target.files[0];
  }

  submit(){

    if(this.step==10){
      const json=JSON.stringify(this.personalDetails.value);

      const data=new FormData();
      data.append("addressProof",this.addressProof);
      data.append("panCard",this.panCard);
      data.append("IncomeTax",this.IncomeTax);
      data.append("addharCard",this.addharCard);
      data.append("photo",this.photo);
      data.append("signature",this.signature);
      data.append("mortgagePropertyProof",this.mortgagePropertyProof);
      data.append("professionsalaryslips",this.professionsalaryslips);
      data.append("propertyDocuments",this.propertyDocuments);
      data.append("data",json);

      console.log(this.personalDetails.value);

      alert('Applied Successful!');
      this.cs.saveCustomer(data).subscribe();
      
      window.location.reload();

      
    }
  }

}
