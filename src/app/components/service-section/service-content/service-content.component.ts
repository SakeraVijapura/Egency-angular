import { Component } from '@angular/core';
import { BtnComponent } from "../../btn/btn.component";
import { TestimonialComponent } from "../../testimonial/testimonial.component";

@Component({
  selector: 'app-service-content',
  imports: [BtnComponent, TestimonialComponent],
  templateUrl: './service-content.component.html',
  styleUrl: './service-content.component.css'
})
export class ServiceContentComponent {
  quote: string = `"Understanding, ability to put themselves in the merchant's shoes. It is meant to partner."`;
  }
