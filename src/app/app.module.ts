import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LandingComponent } from './components/landing/landing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import { getAuth, provideAuth } from '@angular/fire/auth';
import {AuthenticationService} from "./services/authentication.service";
import {MatMenuModule} from "@angular/material/menu";
import {HotToastModule, provideHotToastConfig} from '@ngneat/hot-toast';


const firebaseConfig = {
  apiKey: "AIzaSyBX2nyP5ErVpNUVVf_6NqczRMFbt0lrWyM",
  authDomain: "user-9cbd2.firebaseapp.com",
  databaseURL: "https://user-9cbd2-default-rtdb.firebaseio.com",
  projectId: "user-9cbd2",
  storageBucket: "user-9cbd2.appspot.com",
  messagingSenderId: "866726122919",
  appId: "1:866726122919:web:aa816979ac39ce08a69282"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    provideFirebaseApp(()=> initializeApp(firebaseConfig)),
    provideFirebaseApp(() => initializeApp({"projectId":"user-9cbd2","appId":"1:866726122919:web:aa816979ac39ce08a69282","databaseURL":"https://user-9cbd2-default-rtdb.firebaseio.com","storageBucket":"user-9cbd2.appspot.com","apiKey":"AIzaSyBX2nyP5ErVpNUVVf_6NqczRMFbt0lrWyM","authDomain":"user-9cbd2.firebaseapp.com","messagingSenderId":"866726122919"})),
    provideAuth(() => getAuth()),
    MatMenuModule,
    HotToastModule.forRoot(),
  ],
  providers: [AuthenticationService,provideHotToastConfig()],
  bootstrap: [AppComponent]
})
export class AppModule { }
