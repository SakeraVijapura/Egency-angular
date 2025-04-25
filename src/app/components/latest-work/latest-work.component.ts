import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-latest-work',
  imports: [NgFor, BtnComponent, NgClass,NgIf, FormsModule],
  templateUrl: './latest-work.component.html',
  styleUrl: './latest-work.component.css',
})
export class LatestWorkComponent {
  categories = ['All', 'Design', 'Branding', 'Illustration', 'Motion'];
  selectedCategory = 'All';

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
    return this.allWorkItems.filter(item => item.category === category).length;
  }
}
