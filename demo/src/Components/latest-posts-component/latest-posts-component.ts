import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
interface post {
  image:string,
  category:string,
  header:string,
  author:string
}
@Component({
  selector: 'app-latest-posts-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './latest-posts-component.html',
  styleUrl: './latest-posts-component.css'
})
export class LatestPostsComponent {
post : post[] = [
  {
    image:"top-post-image.jpg",
    category:"Illustration",
    header:"Japan House opens in mountainside to foster peak creativity.",
    author:"Reta Trophy"
  },{
      image: "post-image-1.jpg",
      category: "photography",
      header: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz"
    },
    {
      image: "post-image-2.jpg",
      category: "photography",
      header: "Bowlcut launch a new summer collection that pays homage to \"UK legends\"",
      author: "Rosanna Ondricka"
    },
    {
      image: "post-image-3.jpg",
      category: "photography",
      header: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
      author: "Annie Lueilwitz"
    },
    {
      image: "post-image-4.jpg",
      category: "Interactive Design",
      header: "London-based Yinka Ilori's storytelling furniture",
      author: "Annie Lueilwitz"
    },
    {
      image: "post-image-5.jpg",
      category: "Graphic Design",
      header: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
      author: "Simeon Brekke"
    },
    {
      image: "post-image-6.jpg",
      category: "Architecture",
      header: "Suzanne Saroff's meticulously arranged photographs alter perceptions",
      author: "Reta Torphy"
    },
    {
      image: "post-image-7.jpg",
      category: "Graphic Design",
      header: "Anu Ambasna's playful illustrations celebrate club culture, brown bodies and perfect paunches",
      author: "Leo Bartell"
    }
];
}
