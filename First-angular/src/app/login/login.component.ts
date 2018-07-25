import { Component, OnInit } from '@angular/core';
import { Api } from '../api';
import{ Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private api: Api ) {}
  ngOnInit(){}

  loginUser(e){
    var loggedEmail = e.target.elements[0].value;
    var password = e.target.elements[1].value;
    for(let x of this.api.jsoncontent) {
    if (loggedEmail == x["email"] && password == x["password"]) {
      this.router.navigate(['/admin']);
      this.api.login_array  = x;
    }
  }
}
}
