import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthService } from './auth.service';
import { FormsModule} from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { APP_ROUTES_PROVIDER } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegistrationComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    APP_ROUTES_PROVIDER
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
