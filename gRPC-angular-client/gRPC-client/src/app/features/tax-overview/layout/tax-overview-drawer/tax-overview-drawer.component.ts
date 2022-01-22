import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../../components/filter-dialog/filter-dialog.component';

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

  constructor(public dialog: MatDialog) {}

  onSetFilters() {
    const dialogRef = this.dialog.open(FilterDialogComponent, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  onDoFilter() {}

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
