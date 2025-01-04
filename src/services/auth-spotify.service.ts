import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class AuthSpotifyService {

  constructor() { }

  private clientId = environment.spotifyClientId;
  private redirectUri = 'http://localhost:4200/callback'
  private scopes = ['user-top-read', 'user-read-private'];

  getLoginUrl(): string {
    const scopeString = encodeURIComponent(this.scopes.join(' '));
    return `https://accounts.spotify.com/authorize?response_type=token&client_id=${this.clientId}&scope=${scopeString}&redirect_uri=${encodeURIComponent(this.redirectUri)}`;
  }

}
