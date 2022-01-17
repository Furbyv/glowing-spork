import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit
} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import {
  Feature,
  MapboxSearchService
} from 'src/app/features/object-search/components/mapbox/mapbox-search.service';
import { environment } from 'src/environments/environment';

interface FeatureArray {
  type: string;
  features: Feature[];
}

@Component({
  selector: 'app-object-map',
  templateUrl: './object-map.component.html',
  styleUrls: ['./object-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectMapComponent implements OnChanges, AfterViewInit {
  private addressQuery$$: Subject<string> = new ReplaySubject<string>(0);
  private mapLoaded$$: Subject<boolean> = new ReplaySubject<boolean>(1);
  @Input() address: string | undefined;
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

  mapboxFeatures$: Observable<GeoJSON.Feature[]> = this.addressQuery$$.pipe(
    switchMap(query => this.mapboxSearchService.search_word(query)),
    map(f => [f[0]])
  );

  labels$ = combineLatest([this.mapboxFeatures$, this.mapLoaded$$]).pipe(
    tap(([f]) => {
      if (this.map) {
        this.map.loadImage(
          'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
          (error, image) => {
            if (this.map && image) {
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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.address && this.address) {
      this.addressQuery$$.next(this.address);
    }
  }

  ngAfterViewInit(): void {
    const initialState = {
      lng: 6.046511,
      lat: 53.084784,
      zoom: 16
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
        this.mapLoaded$$.next(true);
      });
    }
  }

  constructor(private mapboxSearchService: MapboxSearchService) {
    this.labels$.subscribe(val => console.log(val));
  }
}
