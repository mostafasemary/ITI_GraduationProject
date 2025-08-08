import { Component } from '@angular/core';
import { HomeComponent } from '../home-component/home-component';
import { HeaderComponent } from '../header-component/header-component';
import { LatestPostsComponent } from '../latest-posts-component/latest-posts-component';
import { FooterComponent } from '../footer-component/footer-component';
import { LatestPageSecondComponent } from '../latest-page-second-component/latest-page-second-component';

@Component({
  selector: 'app-latest-posts-page',
  imports: [LatestPostsComponent,LatestPageSecondComponent],
  templateUrl: './latest-posts-page.html',
  styleUrl: './latest-posts-page.css'
})
export class LatestPostsPage {

}
