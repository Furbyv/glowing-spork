import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { merge, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { FeatureLayer } from 'src/app/shared/map-box/layer-definition/feature-layer';
import { MapSource } from 'src/app/shared/map-box/utility/map-box.utility';
import { createFeatureLayers } from 'src/app/shared/map-box/utility/objects-layer';
import { TaxationService } from '../../services/taxation-service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Taxation } from 'src/app/protos/taxation.pb';
import { FullWozObjectReply } from 'src/app/protos/wozobject.pb';

@UntilDestroy()
@Component({
  selector: 'woz-taxation-details-page',
  templateUrl: './taxation-details-page.component.html',
  styleUrls: ['./taxation-details-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxationDetailsPageComponent implements OnInit {
  private selectedTaxation$$: Subject<Taxation> = new ReplaySubject(1);
  taxations$: Observable<Taxation[] | undefined> = this.taxationService.taxations$.pipe(
    filter((state) => state.success),
    map((state) => state.res!.taxations)
  );

  //Default taxation when page loads
  //defaults to the first active taxation
  private taxation$: Observable<Taxation | null> = this.taxations$.pipe(
    map((t) => (t ? t.filter((t) => t.active) : undefined)),
    map((t) => (t && t.length ? t[0] : null))
  );

  selectedTaxation$ = merge(this.selectedTaxation$$, this.taxation$);

  loading$ = this.taxationService.taxations$.pipe(map((state) => state.loading));
  freezeWozObject$: Observable<FullWozObjectReply> = this.taxation$.pipe(
    filter((t) => !!t && !!t.freezeWozObject),
    map((t) => t!.freezeWozObject!)
  );

  layers: FeatureLayer[] = createFeatureLayers();
  mapData$: Observable<MapSource[]> = this.taxationService.taxationGeoJson$.pipe(
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

  constructor(private taxationService: TaxationService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      this.taxationService.getTaxations(+params['id']);
    });
  }

  onTaxationSelect(taxation: Taxation) {
    this.selectedTaxation$$.next(taxation);
  }
}

