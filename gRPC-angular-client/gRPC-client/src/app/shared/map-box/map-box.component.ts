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
  Renderer2,
  ViewContainerRef,
  ChangeDetectorRef,
} from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import * as mapboxgl from 'mapbox-gl';
import { Map } from 'mapbox-gl';
import { combineLatest, ReplaySubject, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FeatureLayer } from './layer-definition/feature-layer';
import { MapSource } from './utility/map-box.utility';
import { markers } from './markers';
import { CustomPopUpComponent } from './pop-up/custom-pop-up.component';

@UntilDestroy()
@Component({
  selector: 'woz-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MapBoxComponent implements OnChanges, AfterViewInit {
  @Input() toggleRefresh: boolean = false;
  @Input() layers: FeatureLayer[] | null = [];
  @Input() sources: MapSource[] | null = [];
  @Input() fullScreen: boolean = true;
  @Input() layerSelection: boolean = true;
  @Input() multipleSelect: boolean = false;
  @Output() clickSelect = new EventEmitter<string[]>();
  @Output() dblclickSelect = new EventEmitter<string>();
  @Output() multiselect = new EventEmitter<string[]>();
  @Output() mapLoaded = new EventEmitter<mapboxgl.Map>();

  private mapLoaded$$: Subject<mapboxgl.Map> = new ReplaySubject<mapboxgl.Map>(1);
  private layers$$: Subject<FeatureLayer[]> = new ReplaySubject<FeatureLayer[]>(1);
  layers$ = this.layers$$.asObservable();

  private sources$$: Subject<MapSource[]> = new ReplaySubject<MapSource[]>(1);
  map: mapboxgl.Map | undefined;
  private mapStyle = 'mapbox://styles/mapbox/streets-v11';

  @ViewChild('mapbox')
  private mapContainer: ElementRef<HTMLElement> | undefined;
  lat = 48.137154;
  lng = 11.576124;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.layers && changes.layers) {
      this.layers$$.next(this.layers);
    }
    if (this.sources && changes.sources) {
      this.sources$$.next(this.sources);
    }

    if (this.map) {
      setTimeout(() => {
        window.dispatchEvent(new Event('resize'));
      }, 500);
    }
  }

  private initMarkers(map: mapboxgl.Map) {
    if (markers) {
      markers.forEach((marker) => {
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

  @ViewChild('popup', { read: ViewContainerRef }) contentElement: ViewContainerRef;
  private creatCustomPoUp(layer: FeatureLayer, data: GeoJSON.Feature) {
    if (layer.customPopUp) {
      this.contentElement.clear();
      const componentRef = this.contentElement.createComponent<CustomPopUpComponent>(layer.customPopUp);
      componentRef.instance.data = data.properties;
      this.cdr.detectChanges();
    }
  }

  private mouseMoveListener: (this: Document, ev: MouseEvent) => any = (e) => this.onMouseMove(e);
  private mouseUpListener: (this: Document, ev: MouseEvent) => any = (e) => this.onMouseUp(e);
  private keyDownListener: (this: Document, ev: KeyboardEvent) => any = (e) => this.onKeyDown(e);

  // Create a popup, but don't add it to the map yet.
  private popup = new mapboxgl.Popup({
    closeButton: false,
  });

  ngAfterViewInit(): void {
    const initialState = {
      lng: 6.046511,
      lat: 53.084784,
      zoom: 12,
    };
    if (this.mapContainer) {
      this.map = new Map({
        accessToken: environment.mapbox.accessToken,
        container: this.mapContainer.nativeElement,
        style: this.mapStyle,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom,
        boxZoom: false,
        cooperativeGestures: true,
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
        this.mapLoaded.emit(this.map);
        window.dispatchEvent(new Event('resize'));
      });

      //set on click event for each layer
      this.layers?.forEach((l) => {
        if (l.onClickEvent && this.map) {
          this.map.on('click', l.mainLayer.id, (e) => {
            if (e && e.features) {
              this.clickSelect.emit([`${e.features[0].id!}`]);
            }
          });
        }
      });

      //set custom popup event for each layer
      this.layers?.forEach((l) => {
        if (l.customPopUp && this.map) {
          this.map.on('click', l.mainLayer.id, (e) => {
            console.log(e);
            if (e && e.features) {
              this.creatCustomPoUp(l, e.features[0]);
            }
          });
        }
      });

      this.map.on('dblclick', (e) => {
        if (e && e.features) {
          this.dblclickSelect.emit(`${e.features[0].id!}`);
        }
      });

      const canvas = this.map.getCanvas();
      canvas.addEventListener('mousedown', (e) => this.mouseDown(e), true);

      this.map.on('mousemove', (e) => {
        const layerIds = this.layers?.map((l) => l.mainLayer.id);
        if (!this.map || !layerIds || !layerIds.length || !this.sources || !this.sources.length) return;
        const features = this.map.queryRenderedFeatures(e.point, {
          layers: layerIds,
        });

        // Change the cursor style as a UI indicator.
        this.map.getCanvas().style.cursor = features.length ? 'pointer' : '';

        if (!features.length) {
          this.popup.remove();
          return;
        }

        this.popup.setLngLat(e.lngLat).setText(features[0].properties!.id).addTo(this.map);
      });
    }
  }

  private start: mapboxgl.Point | undefined;
  private box: HTMLDivElement | undefined;

  getMousePosition(map: mapboxgl.Map, e: MouseEvent | (mapboxgl.MapMouseEvent & mapboxgl.EventData)) {
    const canvas = map.getCanvas();
    const rect = canvas.getBoundingClientRect();
    return new mapboxgl.Point(e.clientX - rect.left - canvas.clientLeft, e.clientY - rect.top - canvas.clientTop);
  }

  mouseDown(e: MouseEvent) {
    if (!this.map || !this.layers || !this.layers.length || !this.sources || !this.sources.length) {
      return;
    }
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
    if (bbox && this.map && this.start) {
      const features = this.map.queryRenderedFeatures(bbox, {
        layers: this.layers?.filter((l) => l.MultiSelectable).map((l) => l.mainLayer.id),
      });

      if (features.length >= 1000) {
        return window.alert('Select a smaller number of features');
      }

      // Run through the selected features and set a filter
      // to match features with unique FIPS codes to activate
      // the `counties-highlighted` layer.
      const selectedIds = features.map((feature) => feature.properties!.id);
      this.layers?.forEach((l) => {
        if (this.map && l.HighLightLayer) {
          this.map.setFilter(l.HighLightLayer.id, ['in', 'id', ...selectedIds]);
        }
      });
      this.multiselect.emit(selectedIds);
    }
    this.start = undefined;
    this.map!.dragPan.enable();
  }

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {
    //subscription after map initialization to set layers
    combineLatest([this.layers$$, this.sources$$, this.mapLoaded$$])
      .pipe(untilDestroyed(this))
      .subscribe(([collection, sources, map]) => this.buildLayers(collection, sources, map));
  }

  buildLayers(layers: FeatureLayer[], sources: MapSource[], map: mapboxgl.Map): void {
    sources.forEach((s) => {
      if (!map.getSource(s.id)) {
        map.addSource(s.id, s.source);
      }
    });
    layers.forEach((layer) => {
      const id = layer.mainLayer.id;
      if (map.getLayer(id)) {
        map.removeLayer(id);
      }

      // Add a symbol layer
      map.addLayer(layer.mainLayer);
      if (layer.MultiSelectable && layer.HighLightLayer) {
        map.addLayer(layer.HighLightLayer);
      }
    });
    this.fitToFeatures(sources, map);
  }

  private fitToFeatures(sources: MapSource[], map: mapboxgl.Map) {
    const s = [...sources.filter((s) => s.source.type === 'geojson')];
    const geoJsonSources = s.map((s) => s.source as mapboxgl.GeoJSONSourceRaw);
    const bounds = new mapboxgl.LngLatBounds();
    const geo = geoJsonSources.flatMap(
      (g: mapboxgl.GeoJSONSourceRaw) => g.data as GeoJSON.FeatureCollection<GeoJSON.Geometry>
    );
    const coordinates = geo.flatMap((g: GeoJSON.FeatureCollection<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>) =>
      g.features.flatMap((f) => this.getCoordinates(f.geometry))
    );
    for (let index = 0; index < coordinates.length; index++) {
      const c = coordinates[index];
      if (c) {
        bounds.extend(c);
      }
    }
    map.fitBounds(bounds, { padding: 20 });
  }

  private getCoordinates(geo: GeoJSON.Geometry): [number, number][] | undefined {
    let positions: GeoJSON.Position[];
    switch (geo.type) {
      case 'Point':
        positions = [(geo as GeoJSON.Point).coordinates];
        break;
      case 'MultiPoint':
        positions = (geo as GeoJSON.MultiPoint).coordinates;
        break;
      case 'LineString':
        positions = (geo as GeoJSON.LineString).coordinates;
        break;
      case 'MultiLineString':
        positions = (geo as GeoJSON.MultiLineString).coordinates.flatMap((c) => c);
        break;
      case 'Polygon':
        positions = (geo as GeoJSON.Polygon).coordinates.flatMap((c) => c);
        break;
      case 'MultiPolygon':
        positions = (geo as GeoJSON.MultiPolygon).coordinates.flatMap((c) => c.flatMap((a) => a));
        break;
      default:
        return undefined;
    }
    return positions.map((p) => [p[0], p[1]]);
  }
}
