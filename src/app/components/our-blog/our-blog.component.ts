import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { NgFor } from '@angular/common';
import { BlogComponent } from "./blog/blog.component";

@Component({
  selector: 'app-our-blog',
  standalone:true,
  imports: [BtnComponent, NgFor, BlogComponent],
  templateUrl: './our-blog.component.html',
  styleUrl: './our-blog.component.css'
})
export class OurBlogComponent {
  blogs:{
    image: string;
    name: string;
    title: string;
    date: string;
  } []=[
    {
      image:'assets/images/blogs/stories.png',
      name:"Stories",
      title:"Agency is a business you hire to outsource",
      date:"5 Nov, 2021"
    },
    {
      image:'assets/images/blogs/design.png',
      name:"Design",
      title:"Outsource your digital marketing efforts",
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
