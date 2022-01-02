import { Component } from '@angular/core';

interface TimeFrame {
  id: number;
  description: string;
  sitDate: Date;
  valuationDate: Date;
}

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
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
  public selectedTimeFrame: TimeFrame = this.timeframes[0];
}
