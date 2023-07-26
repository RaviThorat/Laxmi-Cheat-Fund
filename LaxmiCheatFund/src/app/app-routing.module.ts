import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './entry/error/error.component';
import { DashboardComponent } from './entry/dashboard/dashboard.component';
import { AboutUsComponent } from './template/about-us/about-us.component';
import { ContactComponent } from './template/contact/contact.component';
import { LocationComponent } from './template/location/location.component';
import { HomeComponent } from './entry/home/home.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { LoginComponent } from './entry/login/login.component';
import { ApplyForLoanComponent } from './Modules/re/apply-for-loan/apply-for-loan.component';

const routes: Routes = [

  {
    path: '', component: HomeComponent,
    children:[
      {path:"aboutUs",component:AboutUsComponent},
      {path:"contact",component:ContactComponent},
      {path:"location",component:LocationComponent},
      {path:"enquiry",component:EnquiryComponent},
      {path:"login",component:LoginComponent}
    ]
  },

  {
    path:"dash",component:DashboardComponent,
    children:[
      {
        path:"re",loadChildren:()=>import('src/app/Modules/re/re.module').then(m=>m.ReModule)
      },
      {
        path:"oe",loadChildren:()=>import('src/app/Modules/oe/oe.module').then(m=>m.OeModule)
      },
      {
        path:"cm",loadChildren:()=>import('src/app/Modules/cm/cm.module').then(m=>m.CmModule)
      },
      {
        path:"ah",loadChildren:()=>import('src/app/Modules/ah/ah.module').then(m=>m.AhModule)
      },
      {
        path:"admin",loadChildren:()=>import('src/app/Modules/admin/admin.module').then(m=>m.AdminModule)
      },
      {
        path:"customer",loadChildren:()=>import('src/app/Modules/customer/customer.module').then(m=>m.CustomerModule)
      }
    ]
  },

  // {
  //   path:"applyLoanPopup", component:ApplyForLoanComponent
  // },
  
  {
    path: '**', component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


