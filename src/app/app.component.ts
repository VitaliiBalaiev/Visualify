import {Component} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from "../header/header.component";

@Component({
  selector: 'app-root',
    imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent{
  
  constructor(private router: Router) {}
  
  isHomePage(): boolean {
    return this.router.url === '/';
}
}
