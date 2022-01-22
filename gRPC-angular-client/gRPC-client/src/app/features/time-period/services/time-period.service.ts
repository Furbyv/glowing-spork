import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface TimeFrame {
  id: number;
  description: string;
  sitDate: Date;
  valuationDate: Date;
}

@Injectable({ providedIn: 'root' })
export class TimePeriodService {
  public timeframes: TimeFrame[] = [
    {
      id: 0,
      description: 'Situatie 2020, Prijspeil 2019',
      sitDate: new Date('2020-01-01'),
      valuationDate: new Date('2019-01-01')
    },
    {
      id: 1,
      description: 'Situatie 2021, Prijspeil 2020',
      sitDate: new Date('2021-01-01'),
      valuationDate: new Date('2020-01-01')
    },
    {
      id: 2,
      description: 'Situatie 2022, Prijspeil 2021',
      sitDate: new Date('2022-01-01'),
      valuationDate: new Date('2021-01-01')
    }
  ];
  private selectedTimePeriod$$: Subject<TimeFrame> = new BehaviorSubject<
    TimeFrame
  >(this.timeframes[0]);
  public selectedTimeFrame$: Observable<TimeFrame> = this.selectedTimePeriod$$;
}
