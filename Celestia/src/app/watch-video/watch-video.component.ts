import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../services/videoService/video.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-watch-video',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './watch-video.component.html',
  styleUrls: ['./watch-video.component.scss']
})
export class WatchVideoComponent implements OnInit {
  video: any;

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit(): void {
    const videoId = +this.route.snapshot.paramMap.get('id')!;
    this.videoService.getVideoById(videoId).subscribe((data) => {
      this.video = data;
    });
  }
}
