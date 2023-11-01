import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {LandingComponent} from "./components/landing/landing.component";
import {CommonModule} from "@angular/common";
import {canActivate,redirectLoggedInTo,redirectUnauthorizedTo} from "@angular/fire/auth-guard";

const redirectToLogin = () => redirectUnauthorizedTo(['login']);
const redirectToHome = ()=> redirectLoggedInTo(['home']);
const routes: Routes = [
  {path:'', pathMatch: 'full', component:LandingComponent},
  {
    path:'home',
    component:HomeComponent,
    ...canActivate(redirectToLogin)
  },
  {
    path:'login',
    component:LoginComponent,
    ...canActivate(redirectToHome)
  },
  {
    path:'signup',
    component:SignupComponent,
    ...canActivate(redirectToHome)
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
