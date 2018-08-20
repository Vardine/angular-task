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
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignComponent } from './sign/sign.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { ModalComponent } from './modal/modal.component';
import {ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component'




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
    SidebarComponent,
    SignComponent,
    ModalComponent,
    TasksComponent,
    AboutComponent,
    ContactComponent
  ],
  entryComponents: [
  ModalComponent
],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, // for database
    APP_ROUTES_PROVIDER,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatSelectModule,
    Angular2FontawesomeModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
