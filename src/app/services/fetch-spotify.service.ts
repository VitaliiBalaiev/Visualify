import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {firstValueFrom, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchSpotifyService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'https://api.spotify.com/v1';

  fetchTopArtists(token: string | null): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/me/top/artists?limit=5&time_range=long_term`, { headers });
  }

  fetchTopTracks(token: string | null): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get(`${this.apiUrl}/me/top/tracks?limit=5&time_range=long_term`, { headers });
  }

}
