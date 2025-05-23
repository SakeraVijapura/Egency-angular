import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pricing-section',
  imports: [BtnComponent,NgIf,NgFor],
  templateUrl: './pricing-section.component.html',
  styleUrl: './pricing-section.component.css'
})
export class PricingSectionComponent {
  plans = [
    {
      tag: 'Consultation',
      price: 'Free',
      type: 'basic',
      features: ['Brand Design', 'Market Analysis', 'Production'],
      available: [true, false, false],
      isPopular: false,
    },
    {
      tag: 'Design',
      price: '$1500',
      type: 'popular',
      features: ['Brand Design', 'Market Analysis', 'Production'],
      available: [true, true, false],
      isPopular: true,
    },
    {
      tag: 'Design + Code',
      price: '$2900',
      type: 'premium',
      features: ['Brand Design', 'Market Analysis', 'Production'],
      available: [true, true, true],
      isPopular: false,
    },
  ];

  rateIcon = `<svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="8" cy="8" r="8" fill="#EF6D58" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4C7.44772 4 7 4.44772 7 5V7H5C4.44772 7 4 7.44772 4 8C4 8.55228 4.44772 9 5 9H7V11C7 11.5523 7.44772 12 8 12C8.55228 12 9 11.5523 9 11V9H11C11.5523 9 12 8.55228 12 8C12 7.44772 11.5523 7 11 7H9V5C9 4.44772 8.55228 4 8 4Z"
                  fill="white"
                />
              </svg>`;
  minusIcon = `<svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <circle cx="8" cy="8" r="8" fill="#F6DACA" />
              <rect x="4" y="7" width="8" height="2" rx="1" fill="white" />
              </svg>`;
}
