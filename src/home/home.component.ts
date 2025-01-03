import {Component, OnInit} from '@angular/core';
import {FetchSpotifyService} from "../app/services/fetch-spotify.service";
import {Router} from "@angular/router";
import {AuthSpotifyService} from "../app/services/auth-spotify.service";

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor(private authSpotifyService: AuthSpotifyService, private router: Router) {}
  
  ngOnInit(): void {
    const token = localStorage.getItem('spotifyToken');
    if (token){
      this.router.navigate(['/overview']);
    }
  }

  loginWithSpotify() {
    window.location.href = this.authSpotifyService.getLoginUrl();
  }

}
