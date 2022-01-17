import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map } from 'rxjs/operators';
import { SearchLayoutService } from '../../object-search/services/search-layout.service';
import { GetFullWozObjectService } from '../services/get-full-object.service';

@UntilDestroy()
@Component({
  selector: 'app-object-details',
  templateUrl: './object-details.component.html',
  styleUrls: ['./object-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectDetailsComponent implements OnInit {
  id: number | undefined;

  loading$ = this.getFullWozObjectService.fullWozObject$.pipe(
    map(state => state.loading)
  );
  wozObject$ = this.getFullWozObjectService.fullWozObject$.pipe(
    filter(state => state.success),
    map(state => state.res!)
  );
  address$ = this.getFullWozObjectService.address$;

  constructor(
    private route: ActivatedRoute,
    private getFullWozObjectService: GetFullWozObjectService,
    private searchLayoutService: SearchLayoutService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      this.searchLayoutService.toggleObject();
      this.id = +params['id'];
      this.getFullWozObjectService.getFullWozObject(this.id);
    });
  }
}
