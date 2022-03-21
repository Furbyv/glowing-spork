import { Injectable } from '@angular/core';
import { Empty } from '@ngx-grpc/well-known-types';
import { merge, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TimePeriodRecord } from 'src/app/protos/timeperiod.pb';
import { TimePeriodsClient } from 'src/app/protos/timeperiod.pbsc';

@Injectable({ providedIn: 'root' })
export class TimePeriodService {
  private selectedTimePeriod$$: Subject<TimePeriodRecord> = new ReplaySubject<TimePeriodRecord>(1);

  public timePeriods$ = this.timePeriodsClient.getTimePeriods(new Empty()).pipe(
    map((reply) => reply.timePeriods!),
    map((periods) => periods.sort((a, b) => +b.valuationDate!.seconds! - +a.valuationDate!.seconds!)),
    shareReplay({ bufferSize: 1, refCount: false })
  );

  public selectedTimeFrame$ = merge(this.selectedTimePeriod$$, this.timePeriods$.pipe(map((p) => p[0])));

  constructor(private timePeriodsClient: TimePeriodsClient) {}

  setSelectedTimePeriod(period: TimePeriodRecord) {
    this.selectedTimePeriod$$.next(period);
  }
}
