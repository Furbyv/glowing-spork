import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { FeatureLayer } from 'src/app/shared/map-box/layer-definition/feature-layer';
import { MapSource } from 'src/app/shared/map-box/utility/map-box.utility';
import { createFeatureLayers } from 'src/app/shared/map-box/utility/objects-layer';
import { SearchLayoutService } from '../../object-search/services/search-layout.service';
import { GetFullWozObjectService } from '../services/get-full-object.service';
import { TaxationService } from '../services/taxation-service';

@UntilDestroy()
@Component({
  selector: 'woz-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectDetailsComponent implements OnInit {
  id: number | undefined;

  loading$ = this.getFullWozObjectService.fullWozObject$.pipe(map((state) => state.loading));
  wozObject$ = this.getFullWozObjectService.fullWozObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!)
  );

  taxations$ = this.taxationService.taxations$.pipe(
    map((t) => t.taxations),
    tap((a) => console.log(a))
  );
  dataSources$: Observable<MapSource[]> = this.getFullWozObjectService.wozObjectGeoJson$.pipe(
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

  address$ = this.wozObject$.pipe(
    map(
      (wozobject) =>
        `${wozobject.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ?? ''} ${wozobject.huisnummer ?? 0}${
          wozobject.huisletter?.value ?? ''
        } ${wozobject.huisnummertoevoeging?.value ?? ''}, ${wozobject.woonplaats?.value}`
    )
  );

  constructor(
    private route: ActivatedRoute,
    private getFullWozObjectService: GetFullWozObjectService,
    private taxationService: TaxationService,
    private searchLayoutService: SearchLayoutService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      this.searchLayoutService.toggleObject();
      this.id = +params['id'];
      this.getFullWozObjectService.getFullWozObject(this.id);
      this.taxationService.getTaxations(this.id);
    });
  }
}
