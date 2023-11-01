import { Component } from '@angular/core';
import {AuthenticationService} from "./services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      Sign up Flow with Firebase
      <ng-container *ngIf="authService.currentUser$ | async as user; else loginBtn;">
        <button mat-button [matMenuTriggerFor]="userMenu">
          <mat-icon>account_circle</mat-icon>
          {{user.displayName}}
          <mat-icon>expand_more</mat-icon>
        </button>
      </ng-container>
      <ng-template #loginBtn>
        <button mat-button routerLink="login">
          <mat-icon>login</mat-icon>
          Login
        </button>
      </ng-template>
    </mat-toolbar>

    <mat-menu #userMenu="matMenu">
        <button mat-menu-item (click)="logout()">Logout</button>
    </mat-menu>
    <div class="content">
    <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  mat-toolbar{
    justify-content: space-between;
  }
  .content{
    padding: 32px;
  }
  `]
})
export class AppComponent {
  constructor(public authService:AuthenticationService,private router:Router) {
  }
  logout(){
    this.authService.logout().subscribe(()=>{
        this.router.navigate([''])
    });
  }

}
