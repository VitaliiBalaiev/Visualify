import {Component, OnInit} from '@angular/core';
import {FetchSpotifyService} from '../app/services/fetch-spotify.service';
import {NgForOf, NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-overview',
  imports: [
    NgForOf,
  ],
  templateUrl: './overview.component.html',
  standalone: true,
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  private token: string | null | undefined; // think of better alternative
  topArtists: any[] = [];
  topTracks: any[] = [];

  constructor(private fetchSpotifyService: FetchSpotifyService, private router: Router) {}

  ngOnInit(): void {
   this.token = localStorage.getItem('spotifyToken');
   this.getTopTracks(this.token);
   this.getTopArtists(this.token)
  }

  private getTopTracks(token: string | null): void {
    this.fetchSpotifyService.fetchTopTracks(token).subscribe({
      next: (response: any) => {
        this.topTracks = response.items;
      },
      error: (error) => {
        console.log('Error fetching top tracks');
      },
    });
  }

  private getTopArtists(token: string | null): void {
    this.fetchSpotifyService.fetchTopArtists(token).subscribe({
      next: (response: any) => {
        this.topArtists = response.items;
      },
      error: (error) => {
        console.log('Error fetching top artists');
      },
    });
  }
}
