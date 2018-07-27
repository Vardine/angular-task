import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import{ Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';
import 'rxjs/operator/timeout';



@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  newUser: any;
  newArray:any;
  items: Observable<any[]>;
  userData;
  constructor(private router: Router, private auth: AuthService, public db: AngularFireDatabase) {
   this.items = db.list('items').valueChanges();
  }
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
  this.db.list('/').push(this.newUser);
  this.newUser ;

  this.showArray();



   timeout(1000).subscribe(()=>{
    Object.entries(this.userData).forEach(
    ([key, val]) => {
    if(signEmail == val["email"] && password == val["password"]) {
    this.router.navigate(['/admin']);
    this.auth.login_array  = val;
  }
}
)});


}
}
