import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
import { SearchLayoutService } from 'src/app/features/object-search/services/search-layout.service';
import { SelectedObjectsService } from '../../services/selected-objects.service';
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
  @Output() openNotes = new EventEmitter<number[]>();

  state$ = this.layoutService.state$;
  filterState$ = this.taxOverviewService.refresh$;
  selectedObjects$ = this.selectedObjectsService.selectedObjects$;
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

  onOpenNotes(selectedObjects: number[]) {
    this.openNotes.emit(selectedObjects);
  }

  constructor(
    private layoutService: SearchLayoutService,
    private taxOverviewService: TaxOverviewService,
    private selectedObjectsService: SelectedObjectsService
  ) {}
}
