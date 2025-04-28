import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BtnComponent } from "../../../components/btn/btn.component";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { PortfolioItemComponent } from '../../../components/portfolio-section/portfolio-item/portfolio-item.component';

@Component({
  selector: 'app-portfolio-items',
  imports: [NgFor, NgClass, NgIf, BtnComponent, FormsModule, RouterLink, PortfolioItemComponent],
  templateUrl: './portfolio-items.component.html',
  styleUrl: './portfolio-items.component.css',
})
export class PortfolioItemsComponent {
  categories = ['All', 'Design', 'Branding', 'Illustration', 'Motion'];
  selectedCategory = 'All';
@Input() routerLink:any=" ";

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

  get workItems() {
    if (this.selectedCategory === 'All') {
      return this.allWorkItems;
    }
    return this.allWorkItems.filter(
      (item) => item.category === this.selectedCategory
    );
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }


  getCategoryCount(category: string): number {
    if (category === 'All') {
      return this.allWorkItems.length;
    }
    return this.allWorkItems.filter((item) => item.category === category)
      .length;
  }
}
