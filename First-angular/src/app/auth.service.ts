import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SignComponent } from './sign/sign.component';
import { AngularFireDatabase} from 'angularfire2/database';

const STORAGE_KEY = 'local_todolist';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    login_array ;
    logged_user;
    logged_firstname;
    task_row;
    job_element = [];
    gallery;
    text = 'Sign Up';
    url = '/registration';
    hideButton = true;
    noUpdate = true;
    noAddTask = true;

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
changeText1(){
  this.text = "Log out";
  this.url = '/';
  this.hideButton = true;
}

changeText2(){

  this.hideButton = false;
}
changeText3(){

  this.text = "Sign Up";
  this.url = '/registration';
  this.hideButton = true;
}
noUpdateButton(){
  this.noUpdate = false;
}
showUpdateButton(){
  this.noUpdate = true;
}

noTaskButton(){
  this.noAddTask = false;
}

showTaskButton(){
  this.noAddTask = true;
}

getTasks() {
  return this.http.get('assets/tasks.json');
}

}
