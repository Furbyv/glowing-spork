import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-tax-small-action',
  templateUrl: 'small-action-bar.component.html',
  styleUrls: ['small-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallActionBarComponent {
  @Output() toggleMenu = new EventEmitter();
  @Output() doFilterAction = new EventEmitter();
  @Output() setFiltersAction = new EventEmitter();
  @Output() toggleObject = new EventEmitter();
  @Output() toggleGrid = new EventEmitter();

  onToggleMenu() {
    this.toggleMenu.emit();
  }

  onFilter() {
    this.doFilterAction.emit();
  }

  onSetFilters() {
    this.setFiltersAction.emit();
  }

  onToggleObject() {
    this.toggleObject.emit();
  }

  onToggleGrid() {
    this.toggleGrid.emit();
  }
}
