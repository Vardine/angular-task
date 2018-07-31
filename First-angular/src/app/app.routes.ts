
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from './registration/registration.component';
import { AdminComponent } from './admin/admin.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OfficeComponent } from './office/office.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BathroomComponent } from './bathroom/bathroom.component';



const APP_ROUTES: Routes = [{
    path:'admin',
    component:AdminComponent
  },
  {
    path:'registration',
  component:RegistrationComponent
},
{
  path:'office',
component:OfficeComponent
},
{
  path:'bedroom',
component:BedroomComponent
},
{
  path:'bathroom',
component:BathroomComponent
},
{
  path:'kitchen',
component:KitchenComponent
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
