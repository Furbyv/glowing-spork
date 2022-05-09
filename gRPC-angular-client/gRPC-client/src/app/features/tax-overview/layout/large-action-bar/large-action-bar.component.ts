import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { SearchLayoutService } from 'src/app/features/object-search/services/search-layout.service';
import { SelectedObjectsService } from '../../services/selected-objects.service';
import { TaxOverviewService } from '../../services/tax-overview.service';

@Component({
  selector: 'app-tax-large-action',
  templateUrl: 'large-action-bar.component.html',
  styleUrls: ['large-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeActionBarComponent {
  @Output() toggleMenu = new EventEmitter();
  @Output() doFilterAction = new EventEmitter();
  @Output() setFiltersAction = new EventEmitter();
  @Output() toggleObject = new EventEmitter();
  @Output() toggleGrid = new EventEmitter();
  @Output() toggleMap = new EventEmitter();
  @Output() openNotes = new EventEmitter<number[]>();

  state$ = this.layoutService.state$;
  filterState$ = this.taxOverviewService.filterRequest$;
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

  onToggleMap() {
    this.toggleMap.emit();
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
