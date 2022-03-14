import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FeatureLayer } from 'src/app/shared/map-box/layer-definition/feature-layer';
import { MapSource } from 'src/app/shared/map-box/utility/map-box.utility';
import { createFeatureLayers } from 'src/app/shared/map-box/utility/objects-layer';
import { GetFullWozObjectService } from '../../object-details/services/get-full-object.service';
import { ObjectPopupComponent } from '../components/object-popup/object-popup.component';
import { ObjectSearchService } from '../services/object-search.service';
import { SearchLayoutService } from '../services/search-layout.service';

@Component({
  selector: 'woz-object-search-page',
  templateUrl: './object-search-page.component.html',
  styleUrls: ['./object-search-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('displayMapState', [
      state(
        'displayMap',
        style({
          opacity: 1,
          height: '100%',
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: 0,
        })
      ),
      transition('* => *', animate('300ms ease-out')),
    ]),
    trigger('displayObjectState', [
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
export class ObjectSearchPageComponent {
  public isExpanded = false;

  state$ = this.layoutService.state$;
  layers: FeatureLayer[] = createFeatureLayers(ObjectPopupComponent);

  wozObject$ = this.getFullWozObjectService.fullWozObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!)
  );
  mapSource$: Observable<MapSource[]> = this.objectSearchService.wozObjectGeoJson$.pipe(
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

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
    this.refreshEvent();
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: SearchLayoutService,
    private getFullWozObjectService: GetFullWozObjectService,
    private objectSearchService: ObjectSearchService
  ) {}

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  onSelectionChange(id: string[]) {
    this.layoutService.toggleObject();
    this.router.navigate(id, {
      relativeTo: this.route,
    });
  }
}
