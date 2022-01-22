import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {
  TimeFrame,
  TimePeriodService
} from 'src/app/features/time-period/services/time-period.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  public timeframes: TimeFrame[] = this.timePeriodService.timeframes;
  public selectedTimeFrame$: Observable<TimeFrame> = this.timePeriodService
    .selectedTimeFrame$;
  constructor(private timePeriodService: TimePeriodService) {}
}
