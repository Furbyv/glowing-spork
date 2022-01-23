import { Component } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { TaxOverviewService } from '../../services/tax-overview.service';

@Component({
  selector: 'app-tax-overview-grid',
  templateUrl: 'tax-overview-grid.component.html',
  styleUrls: ['tax-overview-grid.component.scss']
})
export class TaxOverviewGridComponent {
  data$ = this.taxOverviewService.overviewObject$.pipe(
    filter(state => state.success),
    map(state => state.res!),
    map(data => data.overviewObjects!)
  );

  constructor(private taxOverviewService: TaxOverviewService) {}
}
