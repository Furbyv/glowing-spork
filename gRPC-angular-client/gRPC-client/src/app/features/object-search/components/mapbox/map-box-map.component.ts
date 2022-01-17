import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Feature } from 'src/app/features/object-search/components/mapbox/mapbox-search.service';
import { environment } from 'src/environments/environment';
import { ObjectSearchService } from '../../services/object-search.service';

interface FeatureArray {
  type: string;
  features: Feature[];
}

@UntilDestroy()
@Component({
  selector: 'app-map-box-map',
  templateUrl: './map-box-map.component.html',
  styleUrls: ['./map-box-map.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapBoxMapComponent implements OnChanges, AfterViewInit {
  @Input() toggleRefresh: boolean = false;
  @Output() onSelect = new EventEmitter<string>();
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

  navigateToPoint$: Observable<[number, number]> = combineLatest([
    this.objectSearchService.goToObject$,
    this.mapboxFeatures$
  ]).pipe(
    map(([point, features]) => features.filter(f => f.id === point.toString())),
    map(f => f[0]),
    filter(f => !!f),
    map(f => [
      (f.geometry as GeoJSON.Point).coordinates[0],
      (f.geometry as GeoJSON.Point).coordinates[1]
    ])
  );

  labels$ = combineLatest([this.mapboxFeatures$, this.mapLoaded$$]).pipe(
    tap(([f]) => {
      if (this.map) {
        const id = 'points';
        if (this.map.getLayer(id)) {
          this.map.removeLayer(id);
        }
        if (this.map.getSource(id)) {
          this.map.removeSource(id);
        }

        this.map.addSource(id, {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: f }
        });

        // Add a symbol layer
        this.map.addLayer({
          id,
          type: 'symbol',
          source: 'points',
          layout: {
            'icon-image': 'custom-marker',
            'icon-allow-overlap': true,
            // get the title name from the source's "title" property
            'text-field': ['get', 'adres'],
            'text-font': [
              'Arial Unicode MS Regular ',
              'Arial Unicode MS Regular'
            ],
            'text-offset': [0, 1.25],
            'text-anchor': 'top'
          }
        });
      }
    })
  );

  ngOnChanges(_: SimpleChanges): void {
    if (this.map) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }

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
        if (this.map) {
          this.map.loadImage(
            '../../../assets/markers/mapbox-marker-icon-20px-blue.png',
            (error, image) => {
              if (this.map && image) {
                this.map.addImage('custom-marker', image);
              }
            }
          );
        }
        this.mapLoaded$$.next(true);
        window.dispatchEvent(new Event('resize'));
      });

      this.map.on('click', 'points', e => {
        if (e && e.features) {
          this.onSelect.emit(`${e.features[0].id!}`);
          // const point = e.features[0].geometry as GeoJSON.Point;
          // // Copy coordinates array.
          // const coordinates: [number, number] = [
          //   point.coordinates[0],
          //   point.coordinates[1]
          // ];
          // const description = `<p>${e.features[0].properties!.adres}</p>`;
          // console.log(description);
          // // Ensure that if the map is zoomed out such that multiple
          // // copies of the feature are visible, the popup appears
          // // over the copy being pointed to.
          // while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          //   coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          // }
          // new mapboxgl.Popup()
          //   .setLngLat(coordinates)
          //   .setHTML(description)
          //   .addTo(this.map!);
        }
      });

      this.map.on('mouseenter', 'points', () => {
        this.map!.getCanvas().style.cursor = 'pointer';
      });

      this.map.on('mouseleave', 'points', p => {
        this.map!.getCanvas().style.cursor = '';
      });
    }
  }

  constructor(private objectSearchService: ObjectSearchService) {
    this.labels$.subscribe(val => console.log(val));
    this.navigateToPoint$
      .pipe(
        untilDestroyed(this),
        filter(f => !!f)
      )
      .subscribe(f => {
        if (this.map) {
          this.map.flyTo({ center: f, zoom: 16 });
        }
      });
  }
}
