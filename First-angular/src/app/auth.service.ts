import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    login_array ;
    gallery;

  constructor(private http: HttpClient) {

  }
    getArray() {
    return this.http.get('https://first-angular-1f76e.firebaseio.com/.json');
  }
  getImages() {
    return this.http.get('assets/images.json');
}

}
