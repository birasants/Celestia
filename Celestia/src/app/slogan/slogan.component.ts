import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slogan',
  standalone: true,
  imports: [],
  template: `<p>{{ text }}</p>`,
  templateUrl: './slogan.component.html',
  styleUrl: './slogan.component.scss'
})
export class SloganComponent {
  @Input() text: string = '';
}
