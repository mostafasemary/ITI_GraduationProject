import { Component, NgModule, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../Components/header-component/header-component';
import { FooterComponent } from '../Components/footer-component/footer-component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HeaderComponent,FooterComponent,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  protected readonly title = signal('demo');
}
