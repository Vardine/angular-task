import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    login_array ;

  constructor(private http: HttpClient) {

  }

    getArray() {
    return this.http.get('../assets/api.json');
  }


}
