import { Component } from '@angular/core';
import { TextBannerComponent } from '../../components/text-banner/text-banner.component';
import { BlogComponent } from '../../components/our-blog/blog/blog.component';
import { NgFor } from '@angular/common';
import { BtnComponent } from '../../components/btn/btn.component';
import { NewsletterComponent } from '../../components/newsletter/newsletter.component';
import { DreamProjectComponent } from '../../components/dream-project/dream-project.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [
    TextBannerComponent,
    BlogComponent,
    NgFor,
    BtnComponent,
    NewsletterComponent,
    DreamProjectComponent,
  ],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent {
  selectedBlogId: number | null = null;

  bigBlogs: {
    image: string;
    name: string;
    title: string;
    date: string;
    id: number;
  }[] = [
    {
      id: 7,
      image: 'assets/images/blogs/blog7.png',
      name: 'Stories',
      title: 'Performance marketing agencies specialize',
      date: '7 Dec, 2021',
    },
    {
      id: 8,
      image: 'assets/images/blogs/blog8.png',
      name: 'Design',
      title: 'Digital marketing channels',
      date: '23 Nov, 2021',
    },
  ];

  smallBlogs: {
    image: string;
    name: string;
    title: string;
    date: string;
    id: number;
  }[] = [
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
      name: 'Design',
      title: 'Analytics to track and report on results',
      date: '17 Nov, 2021',
    },

    {
      id: 5,
      image: 'assets/images/blogs/blog5.png',
      name: 'Branding',
      title: 'The most well known performance',
      date: '12 Oct, 2021',
    },
    {
      id: 6,
      image: 'assets/images/blogs/blog6.png',
      name: 'Stories',
      title: 'Marketing channels native advertising',
      date: '9 Oct, 2021',
    },
  ];

  constructor(private router: Router) {}

  selectBlog(id: number) {
    this.router.navigate(['/blogs', id]);
  }
}
