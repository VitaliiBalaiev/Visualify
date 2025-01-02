import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {AuthSpotifyService} from './services/auth-spotify.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private authSpotifyService: AuthSpotifyService ) { }

  loginWithSpotify() {
    const authUrl = this.authSpotifyService.getLoginUrl();
    window.location.href = authUrl;
  }
}
