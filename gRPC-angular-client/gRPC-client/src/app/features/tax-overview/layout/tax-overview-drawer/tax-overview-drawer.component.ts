import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WozObjectFilterRequest } from 'src/app/proto/taxoverview.pb';
import { FilterDialogComponent } from '../../components/filter-dialog/filter-dialog.component';
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

  constructor(
    public dialog: MatDialog,
    private taxOverviewService: TaxOverviewService
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

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
