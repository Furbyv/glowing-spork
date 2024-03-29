import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  ViewContainerRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReplaySubject, Subject } from 'rxjs';
import { NotesDialogComponent } from 'src/app/features/notes/pages/notes-dialog.component';
import { SearchLayoutService } from 'src/app/features/object-search/services/search-layout.service';
import { WozObjectFilterRequest } from 'src/app/proto/taxoverview.pb';
import { FilterDialogComponent } from '../../components/filter-dialog/filter-dialog.component';
import { SelectedObjectsService } from '../../services/selected-objects.service';
import { TaxOverviewService } from '../../services/tax-overview.service';

@Component({
  selector: 'app-tax-overview-drawer',
  templateUrl: 'tax-overview-drawer.component.html',
  styleUrls: ['tax-overview-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaxOverviewDrawerComponent {
  isExpanded: boolean = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
    this.refreshEvent();
  }

  public toggleObject() {
    this.layoutService.toggleObject();
  }

  public toggleGrid() {
    this.layoutService.toggleGrid();
  }

  constructor(
    public dialog: MatDialog,
    private layoutService: SearchLayoutService,
    private taxOverviewService: TaxOverviewService,
    private vcr: ViewContainerRef
  ) {}

  onSetFilters() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe((result: WozObjectFilterRequest) => {
      this.taxOverviewService.filter(result);
    });
  }

  onDoFilter() {
    this.taxOverviewService.refresh();
  }

  openNotes(selectedObjects: number[]) {
    this.dialog.open(NotesDialogComponent, {
      width: '60vw',
      height: '60vh',
      viewContainerRef: this.vcr,
      data: { wozobjectnummers: selectedObjects }
    });
  }

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
