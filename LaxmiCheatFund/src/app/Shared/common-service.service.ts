import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  constructor(private http:HttpClient) { }

  customer:any;

  //*****************************************{1}ENQUIRY FORM API Calling ***************************************** */

  enquiryFormSubmit(enquiryForm:FormGroup) {
      alert("Enquiry Submitted!");
      return this.http.post("http://localhost:9090/addEnquiry",enquiryForm);
  }

  viewEnquiries(){
    return this.http.get("http://localhost:9090/getEnquiries");
  }

  //*****************************************{2}RE API Caling FORM ***************************************** */

  requestCibil(eid: number) {
    return this.http.get("http://localhost:9090/requestCibil/"+eid);
  }

  saveCustomer(apply: any) {
    return this.http.post("http://localhost:9090/saveCustomer",apply);
  }

  getCustomer(cid: number) {
    return this.http.get("http://localhost:9090/getCustomer/"+cid);
  }

  //*****************************************{3}OE API Calling ***************************************** */

  cibilRequired(){
    return this.http.get("http://localhost:9090/getCibilReqEnquiries");
  }

  checkCibil(eid:number){
    return this.http.get("http://localhost:9090/cibilScoreUpdate/"+eid);
  }

  getAllCreatedCustomers(customerStatus:string){
    return this.http.get("http://localhost:9090/getCreatedCustomers/"+customerStatus);
  }

  verifyAllDoc(cv:any,customerId:number){
    alert("Verified");
    return this.http.put("http://localhost:9090/customerDocVerification/"+customerId,cv);
  }


  // verifyAllDoc(customerId:any)
  // {
  //   alert("Verify")
  //   return this.http.get("http://localhost:9090/customer/verifyDocs/"+customerId);
  // }

  // completeUplodDocs(customerId:any)
  // {
  //   alert("Re Upload")
  //   return this.http.put("http://localhost:9090/customer/completeUplodDocs/",customerId);
  // }
  
  //*****************************************{4}CM API Calling ***************************************** */

  getVerifiedCustomers(customerStatus:any){
    return this.http.get("http://localhost:9090/getVerifiedCustomers/"+customerStatus);
  }

  addSanctionData(san: any, cid: number) {
    console.log(san);
    return this.http.put("http://localhost:9090/addSanctionData/"+cid, san);
  }

  generatePdf(cid:number){
    alert("Sanctioned Letter generated");
    return this.http.get("http://localhost:9090/getSanctionLetterPdf/"+cid);
  }

  sendEmail(cid:number){
    alert("Email Sent!");
    return this.http.get("http://localhost:9090/emailsendsanctionletter/"+cid);
  }

  saveDisburseDetails(c:any,cid:number){
    alert('Loan Disbursement Details Saved!')
    return this.http.post("http://localhost:9090/saveLoanDisburse/"+cid,c);
  }

  generateDisbursePdf(cid:number){
    alert('Loan Disbursement PDF Generated!');
    return this.http.get("http://localhost:9090/getLoanDisbursePdf/"+cid);
  }

  loanDisburseMail(cid:number){
    alert('Email Sent!');
    return this.http.get("http://localhost:9090/emailsendsanctionletter/"+cid);
  }
  

  //*****************************************{5}AH API Calling ***************************************** */

  getLoanDisbursedCustomers(customerStatus: string) {
    return this.http.get("http://localhost:9090/getCreatedCustomers/"+customerStatus);
  }

  createLedger(cid:number){
    alert(cid+"'s Ledger Created");
    return this.http.get("http://localhost:9090/generateLedger/"+cid);
  }

}
