import { ChangeDetectionStrategy, Component, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotesDialogComponent } from 'src/app/features/notes/pages/notes-dialog.component';
import { SearchLayoutService } from 'src/app/features/object-search/services/search-layout.service';
import { FilterRequest } from 'src/app/protos/overviewrequests.pb';
import { FilterDialogComponent } from 'src/app/shared/filter-dialog/filter-dialog.component';
import { TransactionOverviewService } from '../services/transaction-overview.service';

@Component({
  selector: 'woz-transaction-overview-drawer',
  templateUrl: 'transaction-overview-drawer.component.html',
  styleUrls: ['transaction-overview-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TransactionOverviewDrawerComponent {
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

  public toggleMap() {
    this.layoutService.toggleMap();
  }

  constructor(
    public dialog: MatDialog,
    private layoutService: SearchLayoutService,
    private transactionOverviewService: TransactionOverviewService,
    private vcr: ViewContainerRef
  ) {}

  onSetFilters() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: FilterRequest) => {
      this.transactionOverviewService.filter(result);
    });
  }

  onDoFilter() {
    this.transactionOverviewService.refresh();
  }

  openNotes(selectedObjects: number[]) {
    this.dialog.open(NotesDialogComponent, {
      width: '60vw',
      height: '60vh',
      viewContainerRef: this.vcr,
      data: { wozobjectnummers: selectedObjects },
    });
  }

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
