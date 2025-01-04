import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchSpotifyService {
  private apiUrl = 'https://api.spotify.com/v1';
  private readonly headers: HttpHeaders;

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('spotifyToken');
    if (token) {
      this.headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('Spotify token is missing in localStorage.');
    }
  }
  
  fetchTopArtists(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/top/artists?limit=5&time_range=long_term`, { headers: this.headers });
  }

  fetchTopTracks(): Observable<any> {
    return this.http.get(`${this.apiUrl}/me/top/tracks?limit=5&time_range=long_term`, { headers: this.headers });
  }

}
