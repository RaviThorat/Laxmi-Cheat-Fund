import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewEnquiryComponent } from './Modules/re/view-enquiry/view-enquiry.component';
import { ErrorComponent } from './entry/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CheckCibilComponent } from './Modules/oe/check-cibil/check-cibil.component';
import { EnquiryComponent } from './entry/enquiry/enquiry.component';
import { HomeComponent } from './entry/home/home.component';
import { LoginComponent } from './entry/login/login.component';
import { UserMenuComponent } from './template/user-menu/user-menu.component';
import { RouterModule } from '@angular/router';
import { HomeHeaderComponent } from './template/home-header/home-header.component';
import { DashHeaderComponent } from './template/dash-header/dash-header.component';
import { DashboardComponent } from './entry/dashboard/dashboard.component';
import { AdminModule } from './Modules/admin/admin.module';
import { AhModule } from './Modules/ah/ah.module';
import { AdminRoutingModule } from './Modules/admin/admin-routing.module';
import { AhRoutingModule } from './Modules/ah/ah-routing.module';
import { CmModule } from './Modules/cm/cm.module';
import { CmRoutingModule } from './Modules/cm/cm-routing.module';
import { ReModule } from './Modules/re/re.module';
import { ReRoutingModule } from './Modules/re/re-routing.module';
import { OeModule } from './Modules/oe/oe.module';
import { OeRoutingModule } from './Modules/oe/oe-routing.module';
import { CustomerModule } from './Modules/customer/customer.module';
import { CustomerRoutingModule } from './Modules/customer/customer-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    EnquiryComponent,
    HomeComponent,
    LoginComponent,
    ErrorComponent,
    CheckCibilComponent,
    UserMenuComponent,
    HomeHeaderComponent,
    DashHeaderComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
    AdminModule,
    AhModule,
    AhRoutingModule,
    CmModule,
    CmRoutingModule,
    ReModule,
    ReRoutingModule,
    OeModule,
    OeRoutingModule,
    CustomerModule,
    CustomerRoutingModule,
    AdminRoutingModule
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
