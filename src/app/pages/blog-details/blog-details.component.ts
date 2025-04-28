import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router'; // ADD Router here
import { NgFor, NgIf } from '@angular/common';
import { BlogComponent } from '../../components/our-blog/blog/blog.component';
import { DreamProjectComponent } from '../../components/dream-project/dream-project.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [
    RouterLink,
    BlogComponent,
    NgFor,
    NgIf,
    DreamProjectComponent,
    RouterModule,
  ],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
  blogItem: any;
  filteredBlogs: any[] = [];
  selectedBlogId: number | null = null;

  blog:
    | {
        id: number;
        image: string;
        name: string;
        title: string;
        date: string;
      }
    | undefined;

  blogs = [
    {
      id: 1,
      image: 'assets/images/blogs/blog1.png',
      name: 'Stories',
      title: 'Agency is a business you hire to outsource',
      date: '5 Nov, 2021',
    },
    {
      id: 2,
      image: 'assets/images/blogs/blog2.png',
      name: 'Design',
      title: 'Outsource your digital marketing efforts',
      date: '29 Oct, 2021',
    },
    {
      id: 3,
      image: 'assets/images/blogs/blog3.png',
      name: 'Marketing',
      title: 'Your business with a variety of digital',
      date: '21 Oct, 2021',
    },
    {
      id: 4,
      image: 'assets/images/blogs/blog4.png',
      name: 'Stories',
      title: 'Performance marketing agencies specialize',
      date: '7 Dec, 2021',
    },
    {
      id: 5,
      image: 'assets/images/blogs/blog5.png',
      name: 'Design',
      title: 'Digital marketing channels',
      date: '23 Nov, 2021',
    },
    {
      id: 6,
      image: 'assets/images/blogs/blog6.png',
      name: 'Design',
      title: 'Analytics to track and report on results',
      date: '17 Nov, 2021',
    },
    {
      id: 7,
      image: 'assets/images/blogs/blog7.png',
      name: 'Branding',
      title: 'The most well known performance',
      date: '12 Oct, 2021',
    },
    {
      id: 8,
      image: 'assets/images/blogs/blog8.png',
      name: 'Stories',
      title: 'Marketing channels native advertising',
      date: '9 Oct, 2021',
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
      this.selectedBlogId = id;
      this.blog = this.blogs.find((blog) => blog.id === id);
    });

    // Filter blogs with id <= 3
    this.filteredBlogs = this.blogs.filter((blog) => blog.id <= 3);
    
    // Listen for router events to trigger change detection after navigation
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.cdr.detectChanges();
      // Scroll to top after navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  selectBlog(id: number) {
    // Navigate and trigger change detection
    this.router.navigate(['/blogs', id]);
  }
}
