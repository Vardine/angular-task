
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';


const APP_ROUTES: Routes = [

  {
    path:'',
    component:LoginComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'',
    component:RegistrationComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

export const APP_ROUTES_PROVIDER = RouterModule.forRoot(APP_ROUTES);﻿
