import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  @Input() image: string | null = '';
  @Input() name: string | null = '';
  @Input() title: string | null = '';
  @Input() date: string | null = '';
}
