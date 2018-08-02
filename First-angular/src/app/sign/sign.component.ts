import { Component, OnInit,Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class SignComponent implements OnInit {
  text: string = 'Sign Up';
  url:string = '/registration';

  constructor() { }

  ngOnInit() {
  }

  changeButton(): void {
      if(this.text === 'Sign Up') {
        this.url= "/"
        this.text= 'Log in';
        }
      else{
        this.text = 'Sign Up';

      }
    }
}
