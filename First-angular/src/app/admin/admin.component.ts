import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { LoginComponent } from '../login/login.component';
import { RegistrationComponent } from '../registration/registration.component';
import { OfficeComponent } from '../office/office.component';
import { KitchenComponent } from '../kitchen/kitchen.component';
import { BedroomComponent } from '../bedroom/bedroom.component';
import { BathroomComponent } from '../bathroom/bathroom.component';
import{ Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  loginData: any ;
  firstName: any ;
  lastName: any ;

  photos;
  gallery: Observable<any[]>;
  constructor( private auth: AuthService,private router: Router, public db: AngularFireDatabase ) {
     this.loginData = this.auth.login_array;


  }

  ngOnInit() {
    this.firstName =  JSON.parse(localStorage.getItem('name'));
    this.lastName =  JSON.parse(localStorage.getItem('lastName'));
    this.auth.changeText1();
    this.auth.getImages()
      .subscribe(data => { this.photos = data}
      );
  }





}
