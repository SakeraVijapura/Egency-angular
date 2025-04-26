import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router'; // ADD Router here
import {  NgFor, NgIf } from '@angular/common';
import { BlogComponent } from '../../components/our-blog/blog/blog.component';
import { DreamProjectComponent } from "../../components/dream-project/dream-project.component";

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [RouterLink, BlogComponent, NgFor, NgIf,DreamProjectComponent,RouterModule],
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css'],
})
export class BlogDetailsComponent implements OnInit {
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

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.blog = this.blogs.find((blog) => blog.id === id);

    // Only blogs with id <= 3
    this.filteredBlogs = this.blogs.filter((blog) => blog.id <= 3);
  }

  selectBlog(id: number) {
    this.router.navigate(['/blogs/:', id]);
  } 
}
