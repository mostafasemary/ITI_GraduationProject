import { Routes } from '@angular/router';
import { HomeComponent } from '../Components/home-component/home-component';
import { LatestPostsPage } from '../Components/latest-posts-page/latest-posts-page';
import { AboutPageComponent } from '../Components/about-page-component/about-page-component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'latest-posts', component: LatestPostsPage },
    { path: 'about', component: AboutPageComponent }
];
