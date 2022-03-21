import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeatureLayer } from 'src/app/shared/map-box/layer-definition/feature-layer';
import { MapSource } from 'src/app/shared/map-box/utility/map-box.utility';
import { createFeatureLayers } from 'src/app/shared/map-box/utility/objects-layer';
import { SearchLayoutService } from '../../object-search/services/search-layout.service';
import { SelectedObjectsService } from '../services/selected-objects.service';
import { TaxOverviewService } from '../services/tax-overview.service';

@Component({
  selector: 'woz-tax-overview-page',
  templateUrl: 'tax-overview-page.component.html',
  styleUrls: ['tax-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('displayGridState', [
      state(
        'displayGrid',
        style({
          opacity: 1,
          height: '100%',
        })
      ),
      state(
        'displayMap',
        style({
          opacity: 0,
          height: 0,
          margin: 0,
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: 0,
          margin: 0,
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ]),
    trigger('displayMapState', [
      state(
        'displayGrid',
        style({
          opacity: 0,
          height: '0',
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: '0',
        })
      ),
      state(
        'displayMap',
        style({
          opacity: 1,
          height: '100%',
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ]),
    trigger('displayObjectState', [
      state(
        'displayGrid',
        style({
          opacity: 0,
          height: '0',
        })
      ),
      state(
        'displayMap',
        style({
          opacity: 0,
          height: '0',
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 1,
          height: '100%',
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ]),
  ],
})
export class TaxOverviewPageComponent {
  state$ = this.layoutService.state$;
  dataSources$: Observable<MapSource[]> = this.taxOverviewService.wozObjectGeoJson$.pipe(
    map((data) => [
      {
        id: 'objects',
        source: {
          type: 'geojson',
          data,
        },
      },
    ])
  );

  layers: FeatureLayer[] = createFeatureLayers();
  overviewObjects$ = this.taxOverviewService.overviewData$;
  columnDefinitions$ = this.taxOverviewService.columnDefinitions$;

  onOpenObject(objectnumber: number | string[]) {
    this.layoutService.toggleObject();
    this.router.navigate([objectnumber], {
      relativeTo: this.route,
    });
  }

  onObjectSelect(objects: number[] | string[]) {
    this.selectedObjectsService.setSelectedObjects(objects.map((o) => +o));
  }

  constructor(
    private layoutService: SearchLayoutService,
    private selectedObjectsService: SelectedObjectsService,
    private taxOverviewService: TaxOverviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
}
