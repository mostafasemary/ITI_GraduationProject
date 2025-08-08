import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Post {
  image: string;
  category: string;
  header: string;
  author: string;
}

@Component({
  selector: 'app-latest-page-second-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './latest-page-second-component.html',
  styleUrl: './latest-page-second-component.css'
})

export class LatestPageSecondComponent {
posts: Post[] = [
    {
      image: "rest-1.jpeg",
      category: "Illustration",
      header: "Japan House opens in mountainside to foster peak creativity.",
      author: "Reta Torphy"
    },
    {
      image: "rest-2.jpeg",
      category: "Photography",
      header: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      author: "Alessandra Ortiz"
    },
    {
      image: "rest-3.jpeg",
      category: "Photography",
      header: "Bowlcut launch a new summer collection that pays homage to \"UK legends\"",
      author: "Rosanna Ondricka"
    },
    {
      image: "rest-4.jpeg",
      category: "Photography",
      header: "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
      author: "Annie Lueilwitz"
    },
    {
      image: "featured-posts-1.jpg",
      category: "Interactive Design",
      header: "London-based Yinka Ilori's storytelling furniture",
      author: "Annie Lueilwitz"
    },
    {
      image: "featured-posts-2.jpg",
      category: "Graphic Design",
      header: "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
      author: "Simeon Brekke"
    },
    {
      image: "featured-posts-3.jpg",
      category: "Architecture",
      header: "Suzanne Saroff's meticulously arranged photographs alter perceptions",
      author: "Reta Torphy"
    },
    {
      image: "featured-posts-4.jpg",
      category: "Graphic Design",
      header: "Anu Ambasna's playful illustrations celebrate club culture, brown bodies and perfect paunches",
      author: "Leo Bartell"
    }
  ];
}

