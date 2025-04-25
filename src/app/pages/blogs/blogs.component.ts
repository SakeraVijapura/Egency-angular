import { Component } from '@angular/core';
import { TextBannerComponent } from "../../components/text-banner/text-banner.component";
import { BlogComponent } from "../../components/our-blog/blog/blog.component";
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-blogs',
  imports: [TextBannerComponent, BlogComponent,NgFor],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css'
})
export class BlogsComponent {
  blogs:{
    image: string;
    name: string;
    title: string;
    date: string;
  } []=[
    {
      image:'assets/images/blogs/stories.png',
      name:"Stories",
      title:"Performance marketing agencies specialize",
      date:"7 Dec, 2021"
    },
    {
      image:'assets/images/blogs/design.png',
      name:"Design",
      title:"Digital marketing channels",
      date:"29 Oct, 2021"
    },
    {
      image:'assets/images/blogs/marketing.png',
      name:"Marketing",
      title:"Your business with a variety of digital",
      date:"21 Oct, 2021"
    },
  ]
}
