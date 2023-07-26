import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRoles } from 'src/app/Model/user-roles';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent implements OnInit{

    userOptions:Array<any>;
    userType:string;

    constructor(private router:Router){}

    ngOnInit(): void {
      this.userOptions=UserRoles.userRoles;
                                              //key
        this.userType=sessionStorage.getItem('userType');
    }
    
    navigateTo(path:string){
        this.router.navigateByUrl('/dash/'+this.userType+'/'+path);
    }


}
