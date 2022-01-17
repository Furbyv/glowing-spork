import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, map } from 'rxjs/operators';
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
    private getFullWozObjectService: GetFullWozObjectService
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(untilDestroyed(this)).subscribe((params: Params) => {
      this.id = +params['id'];
      console.log(`go to ${this.id}`);
      this.getFullWozObjectService.getFullWozObject(this.id);
    });
  }
}
