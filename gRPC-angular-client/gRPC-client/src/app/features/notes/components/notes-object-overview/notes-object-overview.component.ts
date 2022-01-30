import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { GetWozObjectsService } from 'src/app/features/get-woz-objects/get-wozobjects.service';

@Component({
  selector: 'woz-notes-object-overview',
  templateUrl: 'notes-object-overview.component.html',
  styleUrls: ['notes-object-overview.component.scss']
})
export class NotesObjectOverviewComponent implements OnChanges {
  @Input() wozobjectnummers: number[] = [];

  loading$ = this.getWozObjectsService.wozobjects$.pipe(
    map(state => state.loading)
  );
  wozObjects$ = this.getWozObjectsService.wozobjects$.pipe(
    filter(state => state.success),
    map(state => state.res!)
  );

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wozobjectnummers && this.wozobjectnummers) {
      this.getWozObjectsService.getWozObjects(this.wozobjectnummers);
    }
  }

  constructor(private getWozObjectsService: GetWozObjectsService) {}
}
