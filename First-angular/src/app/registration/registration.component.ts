import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{ Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: any;
  newArray:any;
  userData;
  constructor(private router: Router, private auth: AuthService ) {}
  ngOnInit() {
   this.showArray();
  }
  showArray() {
    this.auth.getArray()
      .subscribe(data => this.userData = data
      );
  }

signUser(e){
  var firstName = e.target.elements[0].value;
  var lastName = e.target.elements[1].value;
  var signEmail = e.target.elements[2].value;
  var password = e.target.elements[3].value;

  this.newUser = {
    "firstName": firstName,
    "lastName": lastName,
    "email": signEmail,
    "password": password
  };

  this.userData.push(this.newUser);

  this.newArray = this.userData;

  for(let user of this.newArray) {
  if (signEmail == user["email"] && password == user["password"]) {
    this.router.navigate(['/admin']);
    this.auth.login_array  = user;
  }
}
}

}
