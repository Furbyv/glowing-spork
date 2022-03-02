import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Output,
  EventEmitter,
  Renderer2
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { combineLatest, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { markers } from './markers';

export interface FeatureLayers {
  id: string;
  featureCollection: GeoJSON.FeatureCollection;
  markerId: string;
  visible: boolean;
  multiSelect: boolean;
}

@UntilDestroy()
@Component({
  selector: 'woz-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapBoxComponent implements OnChanges, AfterViewInit {
  @Input() toggleRefresh: boolean = false;
  @Input() featureLayers: FeatureLayers[] | null = [];
  @Input() fullScreen: boolean = true;
  @Input() layerSelection: boolean = true;
  @Input() multipleSelect: boolean = false;
  @Output() onSelect = new EventEmitter<string>();
  private mapLoaded$$: Subject<mapboxgl.Map> = new ReplaySubject<mapboxgl.Map>(
    1
  );
  private featureCollection$$: Subject<FeatureLayers[]> = new ReplaySubject<
    FeatureLayers[]
  >(1);
  layers$ = this.featureCollection$$.asObservable();

  map: mapboxgl.Map | undefined;
  private mapStyle = 'mapbox://styles/mapbox/streets-v11';

  @ViewChild('mapbox')
  private mapContainer: ElementRef<HTMLElement> | undefined;
  @ViewChild('menu')
  private menuContainer: ElementRef<HTMLElement> | undefined;

  lat = 48.137154;
  lng = 11.576124;

  ngOnChanges(_: SimpleChanges): void {
    if (this.featureLayers) {
      this.featureCollection$$.next(this.featureLayers);
    }

    if (this.map) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }

  private initMarkers(map: mapboxgl.Map) {
    if (markers) {
      markers.forEach(marker => {
        if (!map.hasImage(marker.id)) {
          map.loadImage(marker.uri, (_, image) => {
            if (image) {
              map.addImage(marker.id, image);
            }
          });
        }
      });
    }
  }

  private mouseMoveListener: (this: Document, ev: MouseEvent) => any = e =>
    this.onMouseMove(e);
  private mouseUpListener: (this: Document, ev: MouseEvent) => any = e =>
    this.onMouseUp(e);
  private keyDownListener: (this: Document, ev: KeyboardEvent) => any = e =>
    this.onKeyDown(e);

  // Create a popup, but don't add it to the map yet.
  private popup = new mapboxgl.Popup({
    closeButton: false
  });

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
        zoom: initialState.zoom,
        boxZoom: false,
        cooperativeGestures: true
      });
      this.map.addControl(new mapboxgl.NavigationControl());
      if (this.fullScreen) {
        this.map.addControl(new mapboxgl.FullscreenControl());
      }

      this.map.on('load', () => {
        if (this.map) {
          this.initMarkers(this.map);
        }
        this.mapLoaded$$.next(this.map);
        window.dispatchEvent(new Event('resize'));
      });

      this.map.on('click', e => {
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

      const canvas = this.map.getCanvas();
      canvas.addEventListener('mousedown', e => this.mouseDown(e), true);

      this.map.on('mousemove', e => {
        const layerIds = this.featureLayers?.map(l => l.id);
        if (!this.map || !layerIds || !layerIds.length) return;
        const features = this.map.queryRenderedFeatures(e.point, {
          layers: layerIds
        });

        // Change the cursor style as a UI indicator.
        this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';

        if (!features.length) {
          this.popup.remove();
          return;
        }

        this.popup
          .setLngLat(e.lngLat)
          .setText(features[0].properties!.id)
          .addTo(this.map);
      });
    }
  }

  private start: mapboxgl.Point | undefined;
  private box: HTMLDivElement | undefined;
  getMousePosition(
    map: mapboxgl.Map,
    e: MouseEvent | (mapboxgl.MapMouseEvent & mapboxgl.EventData)
  ) {
    const canvas = map.getCanvas();
    const rect = canvas.getBoundingClientRect();
    return new mapboxgl.Point(
      e.clientX - rect.left - canvas.clientLeft,
      e.clientY - rect.top - canvas.clientTop
    );
  }

  mouseDown(e: MouseEvent) {
    // Continue the rest of the function if the shiftkey is pressed.
    if (!(e.shiftKey && e.button === 0) || !this.map) return;
    // Disable default drag zooming when the shift key is held down.
    this.map.dragPan.disable();

    // Call functions for the following events
    document.addEventListener('mousemove', this.mouseMoveListener);
    document.addEventListener('keydown', this.keyDownListener);
    document.addEventListener('mouseup', this.mouseUpListener);

    // Capture the first xy coordinates
    this.start = this.getMousePosition(this.map, e);
  }

  onMouseUp(e: MouseEvent) {
    // Capture xy coordinates
    if (this.map && this.start) {
      this.finish([this.start, this.getMousePosition(this.map, e)]);
    }
  }

  onKeyDown(e: KeyboardEvent) {
    // If the ESC key is pressed
    if (e.keyCode === 27) this.finish(undefined);
  }

  onMouseMove(e: MouseEvent) {
    // Capture the ongoing xy coordinates
    if (!this.start || !this.map) return;
    const current = this.getMousePosition(this.map, e);

    // Append the box element if it doesnt exist
    if (!this.box) {
      this.box = this.renderer.createElement('div');
      this.renderer.addClass(this.box, 'boxdraw');
      this.renderer.appendChild(this.mapContainer?.nativeElement, this.box);
    }

    const minX = Math.min(this.start.x, current.x),
      maxX = Math.max(this.start.x, current.x),
      minY = Math.min(this.start.y, current.y),
      maxY = Math.max(this.start.y, current.y);

    // Adjust width and xy position of the box element ongoing
    const pos = `translate(${minX}px, ${minY}px)`;
    if (this.box) {
      this.box.style.transform = pos;
      this.box.style.width = maxX - minX + 'px';
      this.box.style.height = maxY - minY + 'px';
    }
  }

  finish(bbox: [mapboxgl.Point, mapboxgl.Point] | undefined) {
    // // Remove these events now that finish has been called.
    document.removeEventListener('mousemove', this.mouseMoveListener);
    document.removeEventListener('keydown', this.keyDownListener);
    document.removeEventListener('mouseup', this.mouseUpListener);

    if (this.box && this.box.parentNode) {
      this.renderer.removeChild(this.mapContainer?.nativeElement, this.box);
      this.box = undefined;
    }

    // If bbox exists. use this value as the argument for `queryRenderedFeatures`
    if (bbox && this.map) {
      const features = this.map.queryRenderedFeatures(bbox, {
        layers: this.featureLayers?.map(l => l.id)
      });

      if (features.length >= 1000) {
        return window.alert('Select a smaller number of features');
      }

      // Run through the selected features and set a filter
      // to match features with unique FIPS codes to activate
      // the `counties-highlighted` layer.
      const fips = features.map(feature => feature.properties!.id);
      this.map.setFilter('highlighted', ['in', 'id', ...fips]);
    }
    this.start = undefined;
    this.map!.dragPan.enable();
  }

  constructor(private renderer: Renderer2) {
    //subscription after map initialization to set layers
    combineLatest([this.featureCollection$$, this.mapLoaded$$])
      .pipe(untilDestroyed(this))
      .subscribe(([collection, map]) => this.buildLayers(collection, map));
  }

  buildLayers(layers: FeatureLayers[], map: mapboxgl.Map): void {
    layers.forEach(layer => {
      const id = layer.id;
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }
      if (map.getSource(id)) {
        map.removeSource(id);
      }

      map.addSource(id, {
        type: 'geojson',
        data: layer.featureCollection
      });

      // Add a symbol layer
      map.addLayer({
        id,
        type: 'circle',
        source: id,
        layout: {
          visibility: layer.visible ? 'visible' : 'none'
        },
        paint: {
          'circle-color': '#87c2fa',
          'circle-opacity': 0.75
          //'icon-image': layer.markerId,
          //'icon-allow-overlap': true,
          // get the title name from the source's "title" property
          // 'text-field': ['get', 'adres'],
          // 'text-font': [
          //   'Arial Unicode MS Regular ',
          //   'Arial Unicode MS Regular'
          // ],
          // 'text-offset': [0, 1.25],
          // 'text-anchor': 'top'
        }
      });

      if (layer.multiSelect) {
        map.addLayer({
          id: `highlighted`,
          type: 'circle',
          source: id,
          layout: {
            visibility: layer.visible ? 'visible' : 'none'
          },
          paint: {
            'circle-color': '#2605ff',
            'circle-opacity': 0.75
          },
          filter: ['in', 'id', '']
        });
      }

      if (layer.featureCollection.features[0]) {
        const coordinates = (layer.featureCollection.features[0]
          .geometry as GeoJSON.Point).coordinates;
        map.flyTo({
          center: [coordinates[0], coordinates[1]],
          zoom: 12
        });
      }
    });
  }
}
