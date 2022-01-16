import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map, NavigationControl } from 'mapbox-gl';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  Feature,
  MapboxSearchService
} from 'src/app/features/mapbox/mapbox-search.service';
import { environment } from 'src/environments/environment';
import { ObjectSearchService } from '../object-search/services/object-search.service';

interface FeatureArray {
  type: string;
  features: Feature[];
}

@Component({
  selector: 'app-map-box-map',
  templateUrl: './map-box-map.component.html',
  styleUrls: ['./map-box-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapBoxMapComponent implements OnChanges, AfterViewInit {
  private mapLoaded$$: Subject<boolean> = new ReplaySubject<boolean>(1);
  private map: mapboxgl.Map | undefined;
  private mapStyle = 'mapbox://styles/mapbox/streets-v11';

  @ViewChild('map')
  private mapContainer: ElementRef<HTMLElement> | undefined;

  lat = 48.137154;
  lng = 11.576124;

  labelJson: FeatureArray = {
    type: 'FeatureCollection',
    features: []
  };

  mapboxFeatures$: Observable<GeoJSON.Feature[]> = this.objectSearchService
    .wozObjectGeoJson$;

  labels$ = combineLatest([this.mapboxFeatures$, this.mapLoaded$$]).pipe(
    tap(([f]) => {
      if (this.map) {
        this.map.loadImage(
          'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          (error, image) => {
            if (this.map && image) {
              console.log(image);
              this.map.addImage('custom-marker', image);
              this.map.addSource('points', {
                type: 'geojson',
                data: { type: 'FeatureCollection', features: f }
              });
              // Add a symbol layer
              this.map.addLayer({
                id: 'points',
                type: 'symbol',
                source: 'points',
                layout: {
                  'icon-image': 'custom-marker',
                  'icon-allow-overlap': true,
                  // get the title name from the source's "title" property
                  'text-field': ['get', 'title'],
                  'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
                  'text-offset': [0, 1.25],
                  'text-anchor': 'top'
                }
              });
            }
          }
        );
      }
    })
  );

  ngOnChanges(changes: SimpleChanges): void {}

  ngAfterViewInit(): void {
    const initialState = {
      lng: 6.046511,
      lat: 53.084784,
      zoom: 12
    };
    if (this.mapContainer) {
      this.map = new Map({
        accessToken: environment.mapbox.accessToken,
        container: this.mapContainer.nativeElement,
        style: this.mapStyle,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      });

      this.map.on('load', () => {
        console.log('loaded');
        this.mapLoaded$$.next(true);
      });
    }
  }

  constructor(private objectSearchService: ObjectSearchService) {
    this.labels$.subscribe(val => console.log(val));
  }
}
