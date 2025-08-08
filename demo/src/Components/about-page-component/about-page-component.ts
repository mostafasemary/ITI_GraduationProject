import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface team {
  image:string,
  name:string,
  role:string
}

@Component({
  selector: 'app-about-page-component',
  standalone:true,
  imports: [CommonModule],
  templateUrl: './about-page-component.html',
  styleUrl: './about-page-component.css'
})
export class AboutPageComponent {
 team : team[] =[
  {
    image:"team1.jpg",
    name:"Simeon Peterson",
    role:"Cofounder, Editor in Cheif"
  },
  {
      image: "team2.jpg",
      name: "Simeon Brekke",
      role: "Cofounder, Partner"
    },
    {
      image: "team3.jpg",
      name: "Annie Lueilwitz",
      role: "Managing Editor"
    },
    {
      image: "team4.jpg",
      name: "Reta Torphy",
      role: "Managing Editor"
    },
    {
      image: "team5.jpg",
      name: "Leo Bartell",
      role: "Editor"
    },
    {
      image: "team6.jpg",
      name: "Clem Onojeghuo",
      role: "Senior Writer"
    },
    {
      image: "team7.jpg",
      name: "Michal Legros",
      role: "Senior Writer"
    },
    {
      image: "team8.jpg",
      name: "Rosanna Ondricka",
      role: "Writer"
    },
    {
      image: "team9.jpg",
      name: "Alessandra Ortiz",
      role: "Writer"
    },
    {
      image: "team10.jpg",
      name: "Coby Gottlieb",
      role: "Writer"
    }
 ];

 }

