import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, shareReplay, switchMap } from 'rxjs/operators';
import { WozObjectFilterRequest } from 'src/app/protos/taxoverview.pb';
import { TaxoverviewClient } from 'src/app/protos/taxoverview.pbsc';
import { convertWozObjectsToGeoJson } from 'src/app/shared/woz-object-utility';

@Injectable({
  providedIn: 'root',
})
export class TaxOverviewService {
  private filterRequest$$: Subject<WozObjectFilterRequest> = new ReplaySubject<WozObjectFilterRequest>(1);

  private refresh$$: Subject<boolean> = new BehaviorSubject<boolean>(true);
  refresh$ = this.refresh$$.asObservable();

  filterRequest$ = this.filterRequest$$.asObservable();

  overviewObject$ = combineLatest([this.filterRequest$$, this.refresh$$]).pipe(
    switchMap(([request]) => this.taxOverviewClient.getOverviewObjects(request).pipe(toAsyncState())),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  columnDefinitions$ = this.overviewObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((res) => res.columnDefinitions!)
  );

  wozObjectGeoJson$: Observable<GeoJSON.FeatureCollection> = this.overviewObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((wozObject) => (wozObject.overviewObjects ? convertWozObjectsToGeoJson(wozObject.overviewObjects) : [])),
    map((features) => ({ type: 'FeatureCollection', features }))
  );

  constructor(private taxOverviewClient: TaxoverviewClient) {}

  filter(request: WozObjectFilterRequest) {
    this.filterRequest$$.next(request);
  }

  refresh() {
    this.refresh$$.next(true);
  }
}
