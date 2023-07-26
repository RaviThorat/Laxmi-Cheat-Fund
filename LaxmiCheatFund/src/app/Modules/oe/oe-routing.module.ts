import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckCibilComponent } from './check-cibil/check-cibil.component';
import { VerifyDocComponent } from './verify-doc/verify-doc.component';

const routes: Routes = [
  {path:"cibil_req_enquiries",component:CheckCibilComponent},
  {path:"verify_doc",component:VerifyDocComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OeRoutingModule { }
