import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tax-large-action',
  templateUrl: 'large-action-bar.component.html',
  styleUrls: ['large-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LargeActionBarComponent {
  @Output() toggleMenu = new EventEmitter();
  @Output() doFilterAction = new EventEmitter();
  @Output() setFiltersAction = new EventEmitter();

  onToggleMenu() {
    this.toggleMenu.emit();
  }

  onFilter() {
    this.doFilterAction.emit();
  }

  onSetFilters() {
    this.setFiltersAction.emit();
  }
}
