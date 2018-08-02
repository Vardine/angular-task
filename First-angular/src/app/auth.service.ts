import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SignComponent } from './sign/sign.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    login_array ;
    gallery;
    text = 'Sign Up';
    url = '/registration';
    hideButton = true;
  constructor(private http: HttpClient) {

  }
    getArray() {
    return this.http.get('https://first-angular-1f76e.firebaseio.com/.json');
  }
  getImages() {
    return this.http.get('assets/images.json');
}
getBathroom() {
  return this.http.get('assets/bathroom.json');
}
getBedroom() {
  return this.http.get('assets/bedroom.json');
}
getKitchen() {
  return this.http.get('assets/kitchen.json');
}
getOffice() {
  return this.http.get('assets/office.json');
}

changeText(){
  this.text = "Log in";
  this.url = '/';
  this.hideButton = true;
}
changeText2(){
  this.hideButton = false;
}

}
