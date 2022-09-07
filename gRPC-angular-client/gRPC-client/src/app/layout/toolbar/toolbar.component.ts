import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TimePeriodService } from 'src/app/features/time-period/services/time-period.service';
import { TimePeriodRecord } from 'src/app/protos/timeperiod.pb';

@Component({
  selector: 'woz-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  public timeframes$ = this.timePeriodService.timePeriods$;
  public selectedTimeFrame$ = this.timePeriodService.selectedTimeFrame$;

  constructor(private timePeriodService: TimePeriodService, private router: Router) {}

  navigateToStartPage() {
    this.router.navigate(['/home']);
  }

  onSelectionChange(period: TimePeriodRecord) {
    this.timePeriodService.setSelectedTimePeriod(period);
  }
}
