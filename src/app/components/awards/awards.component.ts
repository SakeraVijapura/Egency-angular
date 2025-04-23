import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-awards',
  imports: [NgFor],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css',
})
export class AwardsComponent {

  
  projects = [
    {
      image: 'assets/images/latest-work-images/sofa.png',
      title: 'SOFA',
      date: '25 Oct, 2021',
      award: 'Awwwards',
      logo: 'assets/images/awards/logo1.png',
    },
    {
      image: 'assets/images/latest-work-images/keyBoard.png',
      title: 'KeyBoard',
      date: '19 Oct, 2021',
      award: 'CSS Design Awards',
      logo:'assets/images/awards/logo2.png'
    },
    {
      image: 'assets/images/latest-work-images/workMedia.png',
      title: 'Work Media',
      date: '7 Oct, 2021',
      award: 'The FWA',
      logo: 'assets/images/awards/logo3.png',
    },
  ];
}
