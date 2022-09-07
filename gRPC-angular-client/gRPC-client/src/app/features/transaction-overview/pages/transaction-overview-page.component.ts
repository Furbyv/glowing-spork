import { animate, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { FeatureLayer } from 'src/app/shared/map-box/layer-definition/feature-layer';
import { MapSource } from 'src/app/shared/map-box/utility/map-box.utility';
import { createFeatureLayers } from 'src/app/shared/map-box/utility/objects-layer';
import { SearchLayoutService } from '../../object-search/services/search-layout.service';
import { SelectedObjectsService } from '../../tax-overview/services/selected-objects.service';
import { TransactionOverviewService } from '../services/transaction-overview.service';

@UntilDestroy()
@Component({
  selector: 'woz-transaction-overview-page',
  templateUrl: 'transaction-overview-page.component.html',
  styleUrls: ['transaction-overview-page.component.scss'],
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
export class TransactionOverviewPageComponent implements OnInit {
  state$ = this.layoutService.state$;
  dataSources$: Observable<MapSource[]> = this.transactionOverviewService.wozObjectGeoJson$.pipe(
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
  overviewObjects$ = this.transactionOverviewService.overviewData$;
  columnDefinitions$ = this.transactionOverviewService.columnDefinitions$;

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
    private transactionOverviewService: TransactionOverviewService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe(() => {
      this.layoutService.toggleObject();
    });
  }
}
