import { Component } from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-home',
  template: `
    <div class="text-center">
      <h1 *ngIf="user$ | async as user"> Welcome to our app, {{user.displayName}}!</h1>
    </div>
    <!-- Section -->
    <section class="section" >
      <div class="container-fluid" >
        <ng-container *ngFor="let appSystem of nameApp">
          <div class="content">
            <a [routerLink]="appSystem.link">
              <img src="{{appSystem.source}}" alt="Core Security System" />
            </a>
            <h2>{{appSystem.title}}</h2>
          </div>
        </ng-container>
      </div>
    </section>
    <!-- End Section -->
  `,
  styles: [`
    .section {
      padding: 1.5rem;
    }
    .container-fluid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fit, minmax(155px, 1fr));
    }
    .content {
      overflow-x: hidden;
      padding: 28px;
      background: #dedddd;
      border-radius: 5px;
      box-shadow: 0 4px 5px 0 rgba(52, 52, 52, 0.4);
      transition: all 0.4s ease;
    }
    .content:hover {
      transform: scale(1.03);
      box-shadow: 0 0 75px 5px rgba(0, 0, 0, 0.42);
    }
    .content img {
      width: 65px;
      height: 65px;
      transition: all 0.5s ease;
    }
    .content a {
      display: flex;
      justify-content: center;
    }
    .content img:hover {
      transform: scale(1.02);
    }
    .content > h2 {
      text-align: center;
      margin-top: 15px;
      font-size: 13px;
    }
    @media screen and (max-width: 576px) {
      .section {
        padding: 1rem;
      }
      .container-fluid {
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
      }
      .content img {
        width: 8vh;
        height: 8vh;
        transition: all 0.5s ease;
      }
      .content a {
        display: flex;
        justify-content: center;
      }
      .content img:hover {
        transform: scale(1.02);
      }
      .content > h2 {
        text-align: center;
        margin-top: 15px;
        font-size: 12px;
      }
    }
  `]
})
export class HomeComponent {
  user$ = this.authService.currentUser$;
  constructor(private authService:AuthenticationService) {
  }
  nameApp = [
    {id:1, title:"Core Security",source:'./assets/img/security.png'},
    {id:1, title:"Invoice",source:'./assets/img/invoice.png'},
    {id:1, title:"NATT",source:'./assets/img/nat.png'},
    {id:1, title:"NATT (Local)",source:'./assets/img/nat.png'},
    {id:1, title:"Resource system",source:'./assets/img/resource-system.png'},
    {id:1, title:"Staff _App",source:'./assets/img/staff.png',link:'./staff-app'},
    {id:1, title:"Staff _App (Local)",source:'./assets/img/staff.png'},
    {id:1, title:"UTILS",source:'./assets/img/utils-local.png'},
    {id:1, title:"UTILS (Local)",source:'./assets/img/utils-local.png'},
  ]
}
