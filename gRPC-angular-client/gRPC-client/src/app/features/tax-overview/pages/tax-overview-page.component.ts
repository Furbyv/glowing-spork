import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CircleLayer } from 'mapbox-gl';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeatureLayer } from 'src/app/shared/map-box/layer-definition/feature-layer';
import { MapSource } from 'src/app/shared/map-box/map-box.utility';
import { SearchLayoutService } from '../../object-search/services/search-layout.service';
import { SelectedObjectsService } from '../services/selected-objects.service';
import { TaxOverviewService } from '../services/tax-overview.service';

@Component({
  selector: 'app-tax-overview-page',
  templateUrl: 'tax-overview-page.component.html',
  styleUrls: ['tax-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('displayGridState', [
      state(
        'displayGrid',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      state(
        'displayMap',
        style({
          opacity: 0,
          height: 0,
          margin: 0
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: 0,
          margin: 0
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ]),
    trigger('displayMapState', [
      state(
        'displayGrid',
        style({
          opacity: 0,
          height: '0'
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: '0'
        })
      ),
      state(
        'displayMap',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ]),
    trigger('displayObjectState', [
      state(
        'displayGrid',
        style({
          opacity: 0,
          height: '0'
        })
      ),
      state(
        'displayMap',
        style({
          opacity: 0,
          height: '0'
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ])
  ]
})
export class TaxOverviewPageComponent {
  state$ = this.layoutService.state$;
  dataSources$: Observable<
    MapSource[]
  > = this.taxOverviewService.wozObjectGeoJson$.pipe(
    map(data => [
      {
        id: 'objects',
        source: {
          type: 'geojson',
          data
        }
      }
    ])
  );

  objectLayer: CircleLayer = {
    id: 'Objecten',
    type: 'circle',
    source: 'objects',
    paint: {
      'circle-color': '#87c2fa',
      'circle-opacity': 0.75
    }
  };

  multiSelectLayer: CircleLayer = {
    id: 'Objecten-hl',
    type: 'circle',
    source: 'objects',
    paint: {
      'circle-color': '#2605ff',
      'circle-opacity': 0.75
    },
    filter: ['in', 'id', '']
  };

  layers: FeatureLayer[] = this.createFeautureLayers();

  createFeautureLayers(): FeatureLayer[] {
    const layer = new FeatureLayer(this.objectLayer);
    layer.MakeMutliSelectable(this.multiSelectLayer);
    return [layer];
  }

  onOpenObject(objectnumber: number | string) {
    this.layoutService.toggleObject();
    this.router.navigate([objectnumber], {
      relativeTo: this.route
    });
  }

  onObjectSelect(objects: number[] | string[]) {
    this.selectedObjectsService.setSelectedObjects(objects.map(o => +o));
  }

  constructor(
    private layoutService: SearchLayoutService,
    private selectedObjectsService: SelectedObjectsService,
    private taxOverviewService: TaxOverviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
