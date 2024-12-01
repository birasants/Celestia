import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { SloganComponent } from '../slogan/slogan.component';
import { VideoCardComponent } from '../videoCard/video-card.component';
import { VideoService } from '../services/videoService/video.service';
import { CommonModule } from '@angular/common';
import { SearchService } from '../services/searchService/search.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavbarComponent,
    SloganComponent,
    VideoCardComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  title = 'Celestia';
  slogan = `Don't count the minutes, make the minutes count.`;
  videos: any[] = [];

  constructor(private videoService : VideoService, private searchService: SearchService) {}

  filteredVideos: any[] = [];
  applyFilter(query: string = ''): void {
    const lowerCaseQuery = query.toLowerCase();
    this.filteredVideos = this.videos.filter(video => {
      return video.title.toLowerCase().includes(lowerCaseQuery) ||
             video.description.toLowerCase().includes(lowerCaseQuery);
    });
  }

  ngOnInit(): void {
    this.videoService.getVideos().subscribe((data: any[]) => {
      this.videos = data;
      this.applyFilter();
    });
  
    this.searchService.searchQuery$.subscribe((query: string) => {
      this.applyFilter(query);
    });
  }
}
