import {
  Component,
  ChangeDetectionStrategy,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FullWozObjectReply, WozObjectReply } from 'src/app/proto/wozobject.pb';

interface TimeFrame {
  id: number;
  description: string;
  sitDate: Date;
  valuationDate: Date;
}

@Component({
  selector: 'app-object-property-header',
  templateUrl: './object-property-header.component.html',
  styleUrls: ['./object-property-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectPropertyHeaderComponent implements OnChanges {
  @Input() wozObject: FullWozObjectReply | undefined;
  public address: string = '';
  public secondLineAddress: string = '';

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
  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wozObject && this.wozObject) {
      this.address =
        this.wozObject!.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ?? '';
      this.address =
        this.address +
        ` ${this.wozObject?.huisnummer ?? 0}${this.wozObject?.huisletter
          ?.value ?? ''} ${this.wozObject?.huisnummertoevoeging?.value ?? ''}`;
      this.secondLineAddress = this.wozObject?.postcode?.value ?? '';
    }
  }
}
