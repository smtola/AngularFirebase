import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";
import {HotToastService} from "@ngneat/hot-toast";
import {ToastrService} from "ngx-toastr";
@Component({
  selector: 'app-login',
  template: `
    <div class="form-container mat-elevation-z5">
      <h1>Login</h1>
      <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <input type="email" matInput placeholder="Email Address" formControlName="email">
          <mat-error *ngIf="email?.errors?.['required']">Email is required.</mat-error>
          <mat-error *ngIf="email?.errors?.['email']">Please enter correct email formate.</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input type="password" matInput placeholder="Password" formControlName="password">
          <mat-error *ngIf="password?.errors?.['required']">password is required.</mat-error>
        </mat-form-field>
        <div class="center margin-top">
          <button mat-raised-button color="primary" type="submit">
            Login
          </button>
        </div>

        <span class="center margin-top">Create new account? <a class="sign-up-link" routerLink="/signup">Sign Up!</a></span>
      </form>
    </div>
  `,
  styles: [`
    .sign-up-link{
      font-size: 1.2rem;
      margin-left: 8px;
    }
  `]
})
export class LoginComponent {
  constructor(
    private authService:AuthenticationService,
    private route:Router,
    private toast:HotToastService
  ) {
  }
  loginForm = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required])
  })

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(){
    if(!this.loginForm.valid){
      return;
    }
    const {email, password} = this.loginForm.value;
    this.authService.login(email,password)
      .pipe(this.toast.observe(
        {
          success: 'Logged in successfully',
          loading: 'Loggin in',
          error: 'There was error'
        })).subscribe(()=>{
        this.route.navigate(['/home']);
    });
  }
}
