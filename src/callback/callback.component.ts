import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-callback',
  imports: [],
  templateUrl: './callback.component.html',
  standalone: true,
  styleUrl: './callback.component.css'
})
export class CallbackComponent implements OnInit {
  constructor(private router: Router) {
    console.log('Callback component is loaded');
  }

  ngOnInit(): void {
    console.log("got to callback component");
    console.log('Window Location Hash:', window.location.hash);
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const token = params.get('access_token');

    if (token) {
      localStorage.setItem('spotifyToken', token);
      this.router.navigate(['/overview']).then((success) => {
        if (success) {
          console.log('Navigation successful');
        } else {
          console.error('Navigation failed');
        }
      });
    }

  }
}
