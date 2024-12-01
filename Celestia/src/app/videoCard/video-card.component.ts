import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.scss'
})
export class VideoCardComponent {
  @Input() id!: number;
  @Input() title!: string;
  @Input() description!: string;
  @Input() thumbnail!: string;
  @Input() url!: string;
  @Input() views!: number;

  constructor(private router: Router) {}

  formatViews(views: number): string {
    let formattedViews: string;
  
    if (views >= 1000000000) {
      formattedViews = (views / 1000000000).toFixed(1) + 'B';
    } else if (views >= 1000000) {
      formattedViews = (views / 1000000).toFixed(1) + 'M';
    } else if (views >= 1000) {
      formattedViews = (views / 1000).toFixed(1) + 'K';
    } else {
      formattedViews = views.toString();
    }
  
    if (formattedViews.includes('.0')) {
      formattedViews = formattedViews.replace('.0', '');
    }
  
    return formattedViews;
  }

  onSelectVideo(): void {
    this.router.navigate(['/watch', this.id]);
  }

  truncateDescription(description: string, maxLength: number): string {
    if (description.length > maxLength) {
      return description.substring(0, maxLength) + ' ...';
    }
    return description;
  }
}
