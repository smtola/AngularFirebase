import { Component } from '@angular/core';

@Component({
  selector: 'app-landing',
  template: `
    <!-- Section -->
    <div class="cnt-staff-app">
      <ng-container  *ngFor="let app of staffApp">
        <div class="content-box-item">
          <a href="#">
            <img src="{{app.source}}" alt="" />
          </a>
          <h1>{{app.name}}</h1>
        </div>
      </ng-container>
    </div>
    <!-- End Section -->
  `,
  styles: [`
    /* Staff-App */

    .cnt-staff-app {
      padding: 1.5rem;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(156px, 1fr));
      gap: 1rem;
    }
    .content-box-item {
      display: grid;
      justify-content: center;
      align-content: center;
      background: #ececec;
      border-radius: 5px;
      padding: 1.5rem;
      transition: all 0.5s ease;
    }
    .content-box-item > a > img {
      width: 55px;
      height: 55px;
    }
    .content-box-item:hover {
      transform: scale(1.03);
    }
    .content-box-item a {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .content-box-item > h1 {
      text-align: center;
      font-size: 14px;
      margin: 10px;
    }
    @media screen and (max-width: 768px) {
      .logo a > img {
        width: 45px;
        height: 45px;
      }
      .logo a > h1 {
        text-transform: uppercase;
        color: #fff;
        padding: 0 0.7rem;
        font-size: 1rem;
      }
      li h2 {
        display: none;
      }
    }
  `]
})
export class LandingComponent {
  staffApp = [
    {id:1, name:'Whatsapp', source:'./assets/img/AppIcon/Whatsapp.png'},
    {id:2, name:'Messenger', source:'./assets/img/AppIcon/messenger.png'},
    {id:3, name:'Slack', source:'./assets/img/AppIcon/slack.png'},
    {id:4, name:'Skype', source:'./assets/img/AppIcon/skype.png'},
    {id:5, name:'Gmail', source:'./assets/img/AppIcon/gmail.png'},
    {id:6, name:'Android Message', source:'./assets/img/AppIcon/android-message.png'},
    {id:7, name:'Google Calendar', source:'./assets/img/AppIcon/google-calendar.png'},
    {id:8, name:'Discord', source:'./assets/img/AppIcon/discord.png'},
    {id:9, name:'Hangout', source:'./assets/img/AppIcon/hangout.png'},
    {id:10, name:'LinkedIn', source:'./assets/img/AppIcon/linkedin.png'},
    {id:11, name:'Tweetdesk', source:'./assets/img/AppIcon/tweetdesk.png'},
    {id:12, name:'Trello', source:'./assets/img/AppIcon/trello.png'},
    {id:13, name:'Office365-Outlook', source:'./assets/img/AppIcon/office365-outlook.png'},
    {id:14, name:'Google Keep', source:'./assets/img/AppIcon/google-keep.png'},
    {id:15, name:'Hangout', source:'./assets/img/AppIcon/hangout.png'},
    {id:16, name:'Hangout Chat', source:'./assets/img/AppIcon/hangout.png'},
  ]
}
