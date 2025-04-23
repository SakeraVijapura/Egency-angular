import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";

@Component({
  selector: 'app-events',
  imports: [NgFor, BtnComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.css',
})
export class EventsComponent {
  events = [
    {
      day: 3,
      month: 'November',
      year: 2021,
      time: '9:00 am – 3:00 pm',
      title: 'Design Weeks',
      description:
        'Digital agency is a business you hire to outsource your digital.',
    },
    {
      day: 15,
      month: 'November',
      year: 2021,
      time: '1:00 pm – 8:00 pm',
      title: 'Interior Design',
      description: 'Marketing efforts, instead of handling in-house.',
    },
    {
      day: 2,
      month: 'December',
      year: 2021,
      time: '10:00 am – 2:00 pm',
      title: 'The F design events',
      description:
        'Provide your business with a variety of digital solutions to promote.',
    },
  ];
}
