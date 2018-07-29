import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{ Router } from '@angular/router';
import { RegistrationComponent } from '../registration/registration.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData;
  items: Observable<any[]>;

  constructor(private router: Router, private auth: AuthService, public db: AngularFireDatabase ) {
  this.items = db.list('items').valueChanges();
  }
  ngOnInit(){
    this.auth.getArray()
      .subscribe(data => { this.userData = data}
      );

  }

  loginUser(e) {
    var loggedEmail = e.target.elements[0].value;
    var password = e.target.elements[1].value;

    Object.entries(this.userData).forEach(([key, val]) => {
    if(loggedEmail == val["email"] && password == val["password"]){
      this.router.navigate(['/admin']);
      this.auth.login_array  = val;
    }
});
}
}
