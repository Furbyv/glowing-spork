import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import { BehaviorSubject, combineLatest, ReplaySubject, Subject } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';
import { WozObjectFilterRequest } from 'src/app/proto/taxoverview.pb';
import { TaxoverviewClient } from 'src/app/proto/taxoverview.pbsc';

@Injectable({
  providedIn: 'root'
})
export class TaxOverviewService {
  private filterRequest$$: Subject<WozObjectFilterRequest> = new ReplaySubject<WozObjectFilterRequest>(1);

  private refresh$$: Subject<boolean> = new BehaviorSubject<boolean>(true);
  refresh$ = this.refresh$$.asObservable();

  filterRequest$ = this.filterRequest$$.asObservable();

  overviewObject$ = combineLatest([this.filterRequest$$, this.refresh$$]).pipe(
    switchMap(([request]) =>
      this.taxOverviewClient.getOverviewObjects(request).pipe(toAsyncState())
    ),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  constructor(private taxOverviewClient: TaxoverviewClient) {}

  filter(request: WozObjectFilterRequest) {
    this.filterRequest$$.next(request);
  }

  refresh() {
    this.refresh$$.next(true);
  }
}
