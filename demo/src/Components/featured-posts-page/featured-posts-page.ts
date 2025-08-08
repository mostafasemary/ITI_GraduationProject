import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface post {
  image:string,
  category:string,
  header:string,
  author:string

}
@Component({
  selector: 'app-featured-posts-page',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './featured-posts-page.html',
  styleUrl: './featured-posts-page.css'
})
export class FeaturedPostsPage {
post : post[] = [
  {
    image:"featured-posts-1.jpg",
    category:"Graphic Design",
    header:"A Brief History of the FIFA World Cup Logo",
    author:"Clem Onojeghuo"
  },{
    image:"featured-posts-2.jpg",
    category:"Graphic Design",
    header:"Need a guide to LA's graphic design scene ? Shoplifters' new issue has got your back",
    author:"Alessandra Ortiz"
  },
  {
    image:"featured-posts-3.jpg",
    category:"Photography",
    header:"Fred Rowson directs film for Years and Years",
    author:"Coby Gottlieb"
  },
  {
    image:"featured-posts-4.jpg",
    category:"Architecture",
    header:"M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
    author:"Annie Lueilwitz"
  }

]
}
