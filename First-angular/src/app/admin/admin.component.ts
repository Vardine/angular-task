import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginData: any ;
  firstName: any ;
  lastName: any ;
  constructor( private auth: AuthService ) {
      this.loginData = this.auth.login_array;
  }

  ngOnInit() {
    this.firstName =  this.loginData.firstName;
    this.lastName =  this.loginData.lastName;
  }


}
