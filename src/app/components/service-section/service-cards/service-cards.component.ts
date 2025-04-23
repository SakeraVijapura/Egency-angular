import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-service-cards',
  imports: [NgFor, NgClass, NgIf],
  templateUrl: './service-cards.component.html',
  styleUrl: './service-cards.component.css'
})
export class ServiceCardsComponent {
  services = [
    {
      icon: 'design',
      title: 'Design',
      description: 'Agency provides a full service range including technical skills, design.',
      linkText: 'Learn More'
    },
    {
      icon: 'development',
      title: 'Development',
      description: 'Full service range including technical skills, design, business.',
      linkText: 'Discover More'
    },
    {
      icon: 'marketing',
      title: 'Marketing',
      description: 'Technical skills, design, business understanding, ability.',
      linkText: 'Explore Now'
    }
  ];
}

