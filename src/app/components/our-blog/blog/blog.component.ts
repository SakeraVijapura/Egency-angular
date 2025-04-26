import { CommonModule } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-blog',
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent {
  @Input() routerLink: any[] | any = '';
  @Input() image: string = '';
  @Input() name: string = '';
  @Input() title: string = '';
  @Input() date: string = '';
  @Input() size: string = '';

  screenWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = event.target.innerWidth;
  }

  get height() {
    if (
      (this.size === 'big' &&
      this.screenWidth < 990 &&
      this.screenWidth > 768)||
      this.screenWidth < 468
    ) {
      return '250px';
    }
    return this.size === 'big' ? '350px' : '250px';
  }
}
