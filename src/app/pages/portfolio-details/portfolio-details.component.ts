import { NgFor, NgIf } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { PortfolioItemComponent } from '../../components/portfolio-section/portfolio-item/portfolio-item.component';
import { DreamProjectComponent } from '../../components/dream-project/dream-project.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-portfolio-details',
  imports: [NgIf, PortfolioItemComponent, DreamProjectComponent, NgFor,RouterModule],
  templateUrl: './portfolio-details.component.html',
  styleUrl: './portfolio-details.component.css',
})
export class PortfolioDetailsComponent {
  portfolioItem: any;
  filteredPortfolios: any[] = [];
  selectedPortfolioId: number | null = null;

  portfolio:
    | {
        id: number;
        title: string;
        category: string;
        image: string;
      }
    | undefined;

  portfolios: {
    id: number;
    title: string;
    category: string;
    image: string;
  }[] = [
    {
      id: 1,
      title: 'Sofa',
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

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // Listen for route parameter changes and update blog details
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));
      this.selectedPortfolioId = id;
      this.portfolio = this.portfolios.find((portfolio) => portfolio.id === id);
    });

    // Filter portfolios with id <= 3
    this.filteredPortfolios = this.portfolios.filter(
      (portfolio) => portfolio.id <= 2
    );

    // Listen for router events to trigger change detection after navigation
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.cdr.detectChanges();
        // Scroll to top after navigation
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
  }

  selectPortfolio(id: number) {
    // Navigate and trigger change detection
    this.router.navigate(['/portfolio', id]);
  }
}
