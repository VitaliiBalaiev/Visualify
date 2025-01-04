import {Component, OnInit} from '@angular/core';
import {FetchSpotifyService} from '../app/services/fetch-spotify.service';
import {NgForOf, NgIf} from '@angular/common';
import {FormatFollowersPipe} from "../app/pipes/format-followers.pipe";
import {MatDialog} from "@angular/material/dialog";
import {SharePopupComponent} from "../share-popup/share-popup.component";

@Component({
  selector: 'app-overview',
  imports: [
    NgForOf,
    FormatFollowersPipe,
    NgIf,
    SharePopupComponent
  ],
  templateUrl: './overview.component.html',
  standalone: true,
  styleUrl: './overview.component.css'
})
export class OverviewComponent implements OnInit {
  topArtists: any[] = [];
  topTracks: any[] = [];
  selectedTrackUrl: string = '';
  selectedTrackImg: string = '';
  selectedTrackName: string = '';
  selectedArtistName: string = '';
  isModalOpen = false;

  constructor(private fetchSpotifyService: FetchSpotifyService, private dialogRef: MatDialog) {}

  ngOnInit(): void {
   this.getTopTracks();
   this.getTopArtists()
  }
  
  openModal(trackName: string, trackArtists: string, trackUrl: string, trackImg: string) {
    this.selectedTrackName = trackName;
    this.selectedTrackImg = trackImg;
    this.selectedArtistName = trackArtists;
    this.selectedTrackUrl = trackUrl;
    this.isModalOpen = true;
  }
  
  closeModal() {
    this.isModalOpen = false;
  }
  
  getArtistNames(track: { artists: { name: string }[] }): string {
    return track.artists?.map(artist => artist.name).join(', ');
  }
  
  private getTopTracks(): void {
    this.fetchSpotifyService.fetchTopTracks().subscribe({
      next: (response: any) => {
        this.topTracks = response.items;
      },
      error: (error) => {
        console.log('Error fetching top tracks');
      },
    });
  }

  private getTopArtists(): void {
    this.fetchSpotifyService.fetchTopArtists().subscribe({
      next: (response: any) => {
        this.topArtists = response.items;
      },
      error: (error) => {
        console.log('Error fetching top artists');
      },
    });
  }
}
