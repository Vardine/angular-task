import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';
import { Api } from './api';
import {FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'login/:admin',
        component:AdminComponent
      },
      {
        path:'login',
        component:RegistrationComponent
      },
      {
        path:'',
        component:HomeComponent
      }
    ])
  ],
  providers: [AuthService, Api],
  bootstrap: [AppComponent]
})
export class AppModule { }
