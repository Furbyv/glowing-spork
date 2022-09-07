import { Component, ChangeDetectionStrategy, Input, EventEmitter, Output } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { Taxation } from 'src/app/protos/taxation.pb';

@Component({
  selector: 'woz-taxcode-select',
  templateUrl: './taxcode-select.component.html',
  styleUrls: ['./taxcode-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxcodeSelectComponent {
  private taxations$$: Subject<Taxation[]> = new ReplaySubject(1);
  taxations$ = this.taxations$$.asObservable();
  @Input() set taxations(values: Taxation[] | null | undefined) {
    if (values) {
      this.taxations$$.next(values);
    }
  }
  private selectedTaxation$$: Subject<Taxation> = new ReplaySubject(1);
  selectedTaxation$ = this.selectedTaxation$$.asObservable();
  @Input() set selectedTaxation(value: Taxation | undefined | null) {
    if (value) {
      this.selectedTaxation$$.next(value);
    }
  }
  @Output() selectedTaxationChange = new EventEmitter<Taxation>();

  constructor() {}

  onSelectionChange(taxation: Taxation) {
    this.selectedTaxationChange.emit(taxation);
    this.selectedTaxation$$.next(taxation);
  }
}

