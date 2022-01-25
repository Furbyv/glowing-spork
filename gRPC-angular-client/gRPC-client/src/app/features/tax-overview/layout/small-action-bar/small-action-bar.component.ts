import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { SearchLayoutService } from 'src/app/features/object-search/services/search-layout.service';
import { TaxOverviewService } from '../../services/tax-overview.service';

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

  state$ = this.layoutService.state$;
  filterState$ = this.taxOverviewService.refresh$;

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

  constructor(
    private layoutService: SearchLayoutService,
    private taxOverviewService: TaxOverviewService
  ) {}
}
