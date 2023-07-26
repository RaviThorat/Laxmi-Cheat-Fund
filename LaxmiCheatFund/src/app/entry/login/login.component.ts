import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [],
      password: []
    })
  }

  onLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.controls['username'].value == "admin" && this.loginForm.controls['password'].value == "admin123") {
      //key     //value
      sessionStorage.setItem('userType', 'admin');
      this.router.navigateByUrl("/dash/admin");
    }
    else if (this.loginForm.controls['username'].value == "re" && this.loginForm.controls['password'].value == "re123") {
      //key   //value  
      sessionStorage.setItem('userType', 're');

      this.router.navigateByUrl("/dash/re");
    }
    else if (this.loginForm.controls['username'].value == "oe" && this.loginForm.controls['password'].value == "oe123") {
      //key   //value  
      sessionStorage.setItem('userType', 'oe');

      this.router.navigateByUrl("/dash/oe");
    }
    else if (this.loginForm.controls['username'].value == "cm" && this.loginForm.controls['password'].value == "cm123") {
      //key   //value      
      sessionStorage.setItem('userType', 'cm');
      this.router.navigateByUrl('/dash/cm');
    }
    else if (this.loginForm.controls['username'].value == "ah" && this.loginForm.controls['password'].value == "ah123") {
      //key   //value      
      sessionStorage.setItem('userType', 'ah');
      this.router.navigateByUrl('/dash/ah');
    }
    else if (this.loginForm.controls['username'].value == "customer" && this.loginForm.controls['password'].value == "customer123") {
      //key   //value      
      sessionStorage.setItem('userType', 'customer');
      this.router.navigateByUrl('/dash/customer');
    }
    else {
      alert("Invalid Username or Password..!")
    }
  }

}
