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
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { OfficeComponent } from './office/office.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { Pipe, PipeTransform } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    RegistrationComponent,
    NotFoundComponent,
    HeaderComponent,
    OfficeComponent,
    BathroomComponent,
    BedroomComponent,
    KitchenComponent,
    FooterComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    APP_ROUTES_PROVIDER
  ],
  providers: [AuthService, Pipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
