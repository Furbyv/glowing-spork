import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface MapboxOutput {
  attribution: string;
  features: GeoJSON.Feature[];
  query: [];
}

export interface Feature {
  id: string;
  type: string;
  place_name: string;
  geometry: { type: string; coordinates: [number, number] };
  properties: { description: string; id: string };
}

@Injectable({
  providedIn: 'root'
})
export class MapboxSearchService {
  constructor(private http: HttpClient) {}

  public search_word(query: string): Observable<GeoJSON.Feature[]> {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
    return this.http
      .get<MapboxOutput>(
        url +
          encodeURI(query) +
          '.json?country=nl&types=address%2Cpostcode&language=nl&access_token=' +
          environment.mapbox.accessToken
      )
      .pipe(map((res: MapboxOutput) => res.features));
  }
}
