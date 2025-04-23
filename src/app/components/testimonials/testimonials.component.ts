import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-testimonials',
  imports: [NgFor, BtnComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {

  testimonials = [
    {
      name: 'Alan Marti',
      company: 'Meta Inc.',
      text: 'A digital agency is a business you hire to outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you.',
      image: 'assets/images/testimonial-images/test3.png',
    },
    {
      name: 'Graham Griffiths',
      company: 'Twitor',
      text: 'Outsource your digital marketing efforts, instead of handling in-house. They can provide your business with a variety.',
      image: 'assets/images/testimonial-images/test4.png',
    },
    {
      name: 'Richardo Kann',
      company: 'Photogram',
      text: 'Provide your business with a variety of digital solutions to promote your product or service online.',
      image: 'assets/images/testimonial-images/test5.png',
    },
    {
      name: 'Maria Trofimova',
      company: 'Whochat',
      text: 'Promote your product or service online and help you hit your marketing goals and grow your business.',
      image: 'assets/images/testimonial-images/test6.png',
    },
  ];
}
