import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  imports: [NgClass, NgFor],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  stats = [
    { value: '42%', label: 'Years of experience' },
    { value: '73+', label: 'Agency members' },
    { value: '5.000', label: 'Projects complete' },
  ];
}
