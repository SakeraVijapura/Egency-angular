import { NgClass, NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  imports: [NgClass,NgStyle],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  @Input() testimonialImg: string | null = '';
  @Input() quote: string | null = '';
  @Input() name: string | null = '';
  @Input() color: { [key: string]: string } = {};
}
