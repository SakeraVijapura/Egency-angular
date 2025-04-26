import { Component } from '@angular/core';
import { NgFor, NgIf, NgStyle } from '@angular/common';

@Component({
  selector: 'app-services-accordion',
  standalone: true,
  imports: [NgIf, NgStyle, NgFor],
  templateUrl: './services-accordion.component.html',
  styleUrl: './services-accordion.component.css',
})
export class ServicesAccordionComponent {
  openIndex: number | null = 0;

  items = [
    { title: 'Design' },
    { title: 'Development' },
    { title: 'Marketing' },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
  }
}
