import {
  animate,
  state,
  style,
  transition,
  trigger
} from '@angular/animations';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { SearchLayoutService } from '../../object-search/services/search-layout.service';
import { SelectedObjectsService } from '../services/selected-objects.service';

@Component({
  selector: 'app-tax-overview-page',
  templateUrl: 'tax-overview-page.component.html',
  styleUrls: ['tax-overview-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('displayGridState', [
      state(
        'displayGrid',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 0,
          height: 0,
          margin: 0
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ]),
    trigger('displayObjectState', [
      state(
        'displayGrid',
        style({
          opacity: 0,
          height: '0'
        })
      ),
      state(
        'displayObject',
        style({
          opacity: 1,
          height: '100%'
        })
      ),
      transition('* => *', animate('300ms ease-out'))
    ])
  ]
})
export class TaxOverviewPageComponent {
  state$ = this.layoutService.state$;

  onOpenObject(objectnumber: number) {
    this.layoutService.toggleObject();
    this.router.navigate([objectnumber], {
      relativeTo: this.route
    });
  }

  onObjectSelect(objects: number[]) {
    this.selectedObjectsService.setSelectedObjects(objects);
  }

  constructor(
    private layoutService: SearchLayoutService,
    private selectedObjectsService: SelectedObjectsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.layoutService.state$.pipe(take(1)).subscribe(val => {
      if (val === 'displayMap') {
        this.layoutService.toggleGrid();
      }
    });
  }
}
