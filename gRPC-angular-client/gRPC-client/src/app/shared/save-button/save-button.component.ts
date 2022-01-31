import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { AsyncState } from '@ngneat/loadoff';

@Component({
  selector: 'woz-save-button',
  templateUrl: 'save-button.component.html',
  styleUrls: ['save-button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SaveButtonComponent implements OnChanges {
  @Input() color: string | undefined;
  @Input() state: AsyncState<any, any> | undefined | null;
  @Input() text: string = '';
  @Input() disabled: boolean = false;
  @Output() save = new EventEmitter<void>();
  loading = false;

  ngOnChanges(_: SimpleChanges): void {
    if (this.state) {
      this.loading = this.state.loading;
    }
  }

  onSave(): void {
    this.save.emit();
  }
}
