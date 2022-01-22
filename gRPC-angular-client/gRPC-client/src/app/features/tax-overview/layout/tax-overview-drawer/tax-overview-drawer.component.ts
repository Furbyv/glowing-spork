import { ChangeDetectionStrategy, Component } from '@angular/core';

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

  onSetFilters() {}

  onDoFilter() {}

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }
}
