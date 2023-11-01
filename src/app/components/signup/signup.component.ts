import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
import {AuthenticationService} from "../../services/authentication.service";
import {HotToastService} from "@ngneat/hot-toast";
import {Router} from "@angular/router";

export function passwordMatchValidator(): ValidatorFn{
  return (control: AbstractControl): ValidationErrors| null =>{
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if(password && confirmPassword && password !== confirmPassword){
      return {
        passwordsDontMatch:true
      }
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  template: `
    <div class="form-container mat-elevation-z5">
      <h1>Sign Up</h1>
      <form [formGroup]="signUpForm" (ngSubmit)="onSubmit()">
        <mat-form-field>
          <input type="text" matInput placeholder="Usename" formControlName="name">
          <mat-error *ngIf="name?.errors?.['required']">Usename is required.</mat-error>
        </mat-form-field>

        <mat-form-field>
          <input type="email" matInput placeholder="Email Address" formControlName="email">
          <mat-error *ngIf="email?.errors?.['required']">Email is required.</mat-error>
          <mat-error *ngIf="email?.errors?.['email']">Please enter correct email formate.</mat-error>
        </mat-form-field>

        <mat-form-field>
          <input type="password" matInput placeholder="Password" formControlName="password">
          <mat-error *ngIf="password?.errors?.['required']">password is required.</mat-error>
        </mat-form-field>

        <mat-form-field>
          <input type="password" matInput placeholder="Confirm Password" formControlName="confirmPassword">
          <mat-error *ngIf="confirmPassword?.errors?.['required']">Confirm password is required.</mat-error>
          <mat-error *ngIf="signUpForm.errors?.['passwordsDontMatch']">Password should match </mat-error>
        </mat-form-field>
        <div class="center margin-top">
          <button mat-raised-button color="primary" type="submit">
            Sign Up
          </button>
        </div>
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
export class SignupComponent {

  constructor(private authService:AuthenticationService, private toast: HotToastService, private router: Router) {
  }

  signUpForm = new FormGroup({
    name : new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('', [Validators.required])
  },
    {validators: passwordMatchValidator}
  );


  get name (){
    return this.signUpForm.get('name');
  }
  get email(){
    return this.signUpForm.get('email');
  }
  get password(){
    return this.signUpForm.get('password');
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword');
  }
  onSubmit(){
    if(!this.signUpForm.valid) return;
    const { name , email, password} = this.signUpForm.value;
    this.authService.signup(name,email,password).pipe(
      this.toast.observe({
        success: 'Congrats! You are all signed up.',
        loading: 'Signing in',
        error: ({message}) => `${message}`
      })
    ).subscribe(()=>{
      this.router.navigate(['/home']);
    })
  }
}
