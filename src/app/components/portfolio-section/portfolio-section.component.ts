import { Component, OnInit } from '@angular/core';
import { BtnComponent } from '../btn/btn.component';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PortfolioItemComponent } from './portfolio-item/portfolio-item.component';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portfolio-section',
  imports: [
    BtnComponent,
    NgClass,
    NgFor,
    FormsModule,
    NgIf,
    PortfolioItemComponent,
  ],
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css'],
})
export class PortfolioSectionComponent implements OnInit {
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

  constructor(private router: Router) {}

  ngOnInit() {
    // Listen for the navigation end event to scroll to the top
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        window.scrollTo(0, 0); // Scroll to the top after navigation ends
      });
  }

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

  navigateToDetails(itemId: number) {
    // Navigate to the portfolio details page
    this.router.navigate(['/portfolio', itemId]);
  }
}
