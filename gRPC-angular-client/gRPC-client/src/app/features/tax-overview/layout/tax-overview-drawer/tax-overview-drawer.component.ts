import { ChangeDetectionStrategy, Component, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { map, startWith } from 'rxjs/operators';
import { NotesDialogComponent } from 'src/app/features/notes/pages/notes-dialog.component';
import { DrawerLayoutService } from 'src/app/layout/action-drawer/drawer-layout.service';
import { FilterRequest } from 'src/app/protos/overviewrequests.pb';
import { FilterDialogComponent } from 'src/app/shared/filter-dialog/filter-dialog.component';
import { SelectedObjectsService } from '../../services/selected-objects.service';
import { TaxOverviewService } from '../../services/tax-overview.service';

@Component({
  selector: 'woz-tax-overview-drawer',
  templateUrl: 'tax-overview-drawer.component.html',
  styleUrls: ['tax-overview-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaxOverviewDrawerComponent {
  isExpanded: boolean = false;
  hasFilterRequest$ = this.taxOverviewService.filterRequest$.pipe(
    map((_) => true),
    startWith(false)
  );
  selectedObjects$ = this.selectedObjectsService.selectedObjects$;

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
    private layoutService: DrawerLayoutService,
    private taxOverviewService: TaxOverviewService,
    private selectedObjectsService: SelectedObjectsService,
    private vcr: ViewContainerRef
  ) {}

  onSetFilters() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result: FilterRequest) => {
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
      data: { wozobjectnummers: selectedObjects },
    });
  }

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
