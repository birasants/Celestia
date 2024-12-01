import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { SloganComponent } from './slogan/slogan.component';
import { VideoCardComponent } from './videoCard/video-card.component';
import { VideoService } from './services/videoService/video.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SloganComponent,
    VideoCardComponent,
    CommonModule,
    RouterOutlet
  ],
  styleUrl: './app.component.scss',
  template: `
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}
