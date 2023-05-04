import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

interface UnsplashResponse {
  urls: {
    regular: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private httpClient: HttpClient) {}

  getPhoto() {
    return this.httpClient
      .get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
        headers: {
          Authorization:
            'Client-ID bYqjVHsUrhi9t-uRV6hMP3D5aHo7S1hyxMgHo3YNSDc',
        },
      })
      .pipe(map((response) => response?.urls?.regular));
  }
}
