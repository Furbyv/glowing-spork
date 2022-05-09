import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import { BehaviorSubject, combineLatest, Observable, ReplaySubject, Subject } from 'rxjs';
import { filter, map, shareReplay, switchMap, withLatestFrom } from 'rxjs/operators';
import { FilterRequest } from 'src/app/protos/overviewrequests.pb';
import { TransactionsServiceClient } from 'src/app/protos/transactions.pbsc';
import { convertWozObjectsToGeoJson } from 'src/app/shared/woz-object-utility';
import { TimePeriodService } from '../../time-period/services/time-period.service';

@Injectable({ providedIn: 'root' })
export class TransactionOverviewService {
  private filterRequest$$: Subject<FilterRequest> = new ReplaySubject<FilterRequest>(1);
  private refresh$$: Subject<boolean> = new BehaviorSubject<boolean>(true);
  refresh$ = this.refresh$$.asObservable();
  filterRequest$ = this.filterRequest$$.asObservable();

  overviewObject$ = combineLatest([this.filterRequest$$, this.refresh$$]).pipe(
    withLatestFrom(this.timePeriodService.selectedTimeFrame$),
    map(([[request, _], period]) => {
      request.startdate = period.valuationDate;
      request.enddate = period.propertyDate;
      return request;
    }),
    switchMap((request) => this.transactionsClient.getTransactionsOverview(request).pipe(toAsyncState())),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  columnDefinitions$ = this.overviewObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((res) => res.columnDefinitions!.sort((a, b) => a.sortOrder! - b.sortOrder!))
  );

  overviewData$ = this.overviewObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((data) => data.overviewTransaction!)
  );

  wozObjectGeoJson$: Observable<GeoJSON.FeatureCollection> = this.overviewObject$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((wozObject) =>
      wozObject.overviewTransaction ? convertWozObjectsToGeoJson(wozObject.overviewTransaction) : []
    ),
    map((features) => ({ type: 'FeatureCollection', features }))
  );

  constructor(private timePeriodService: TimePeriodService, private transactionsClient: TransactionsServiceClient) {}

  filter(request: FilterRequest) {
    this.filterRequest$$.next(request);
  }

  refresh() {
    this.refresh$$.next(true);
  }
}
