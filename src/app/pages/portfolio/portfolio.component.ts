import { Component } from '@angular/core';
import { TextBannerComponent } from '../../components/text-banner/text-banner.component';
import { PortfolioItemsComponent } from './portfolio-items/portfolio-items.component';
import { DreamProjectComponent } from '../../components/dream-project/dream-project.component';

@Component({
  selector: 'app-portfolio',
  imports: [
    TextBannerComponent,
    PortfolioItemsComponent,
    DreamProjectComponent,
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  allWorkItems: {
    id: number;
    title: string;
    category: string;
    image: string;
  }[] = [
    {
      id: 1,
      title: 'SOFA',
      category: 'Design',
      image: 'assets/images/latest-work-images/sofa.png',
    },
    {
      id: 2,
      title: 'KeyBoard',
      category: 'Branding', 
      image: 'assets/images/latest-work-images/keyBoard.png',
    },
    {
      id: 3,
      title: 'Work Media',
      category: 'Illustration',
      image: 'assets/images/latest-work-images/workMedia.png',
    },
    {
      id: 4,
      title: 'DDDone',
      category: 'Motion',
      image: 'assets/images/latest-work-images/DDDone.png',
    },
    {
      id: 5,
      title: 'Abstract',
      category: 'Design',
      image: 'assets/images/latest-work-images/abstract.png',
    },
    {
      id: 6,
      title: 'HandP',
      category: 'Branding',
      image: 'assets/images/latest-work-images/handP.png',
    },
    {
      id: 7,
      title: 'Architect',
      category: 'Motion',
      image: 'assets/images/latest-work-images/architect.png',
    },
    {
      id: 8,
      title: 'CalC',
      category: 'Design',
      image: 'assets/images/latest-work-images/calC.png',
    },
    {
      id: 9,
      title: 'Sport',
      category: 'Branding',
      image: 'assets/images/latest-work-images/sport.png',
    },
  ];
}
