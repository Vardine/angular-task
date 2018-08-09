import { Component, OnInit,Input } from '@angular/core';
import { RegistrationComponent } from '../registration/registration.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})

export class SignComponent implements OnInit {
  signText:string;
  signUrl:string;
  hide: boolean ;

  constructor(private auth: AuthService) { }


  ngOnInit() {
    this.signText = this.auth.text;
    this.signUrl = this.auth.url;
    this.hide = this.auth.hideButton;
    this.auth.changeText();
    this.auth.changeText2();

  }
changeButton(){
  if(this.signUrl == '/registration' && this.signText== 'Sign Up'){
  this.auth.changeText();
}

  else{
    this.auth.changeText2();
  }
}


}
