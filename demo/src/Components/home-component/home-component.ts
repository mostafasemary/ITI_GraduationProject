import { Component } from '@angular/core';
import { LatestPostsComponent } from '../latest-posts-component/latest-posts-component';
import { FeaturedPostsPage } from '../featured-posts-page/featured-posts-page';
import { CommonModule } from '@angular/common';
interface post {
  image: string;
  category: string;
  header: string;
  author: string;
}
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [LatestPostsComponent, FeaturedPostsPage, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  post: post[] = [
    {
      image: 'post-image-1.jpg',
      category: 'photography',
      header:
        'Helmut Lang celebrates taxi drivers worldwide in latest campaign',
      author: 'Alessandra Ortiz',
    },
    {
      image: 'post-image-2.jpg',
      category: 'photography',
      header:
        'Bowlcut launch a new summer collection that pays homage to "UK legends"',
      author: 'Rosanna Ondricka',
    },
    {
      image: 'post-image-3.jpg',
      category: 'photography',
      header:
        'Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn',
      author: 'Annie Lueilwitz',
    },
    {
      image: 'post-image-4.jpg',
      category: 'Interactive Design',
      header: "London-based Yinka Ilori's storytelling furniture",
      author: 'Annie Lueilwitz',
    },
    {
      image: 'post-image-5.jpg',
      category: 'Graphic Design',
      header:
        'Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck',
      author: 'Simeon Brekke',
    },
    {
      image: 'post-image-6.jpg',
      category: 'Architecture',
      header:
        "Suzanne Saroff's meticulously arranged photographs alter perceptions",
      author: 'Reta Torphy',
    },
  ];
}
