import { Component, Input } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { TestimonialComponent } from '../testimonial/testimonial.component';

@Component({
  selector: 'app-hero-section',
  imports: [BtnComponent, TestimonialComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {
  @Input() span: string | null = '';
  @Input() title: string | null = '';
  @Input() description: string | null = '';
  @Input() btnTitle1: string | null = '';
  @Input() btnTitle2: string | null = '';
  @Input() testimonialImg: string | null = '';
  @Input() quote: string | null = '';
  @Input() name: string | null = '';
  @Input() heroImage: string | null = '';
}
