import { NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [NgFor, NgIf, NgStyle],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css',
})
export class FaqComponent {
  openIndex: number | null = 0;

  items = [
    {
      title: 'A digital agency is a business',
      content: `Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.`,
    },
    {
      title: 'Hire to outsource your digital',
      content: `Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.`,
    },
    {
      title: 'Marketing efforts',
      content: `Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.`,
    },
    {
      title: 'Can provide your business',
      content: `Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business.`,
    },
  ];

  toggle(index: number) {
    this.openIndex = this.openIndex === index ? null : index;
    console.log(this.openIndex);
  }
}
