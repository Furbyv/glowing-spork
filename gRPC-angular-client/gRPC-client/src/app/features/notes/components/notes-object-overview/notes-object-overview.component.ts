import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { GetWozObjectsService } from 'src/app/features/get-woz-objects/get-wozobjects.service';

@Component({
  selector: 'woz-notes-object-overview',
  templateUrl: 'notes-object-overview.component.html',
  styleUrls: ['notes-object-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesObjectOverviewComponent implements OnChanges {
  @Input() wozobjectnummers: number[] = [];
  @Output() close = new EventEmitter<void>();
  selectedObject: number | undefined;

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

  onSelect(id: number) {
    this.selectedObject = id;
  }

  constructor(private getWozObjectsService: GetWozObjectsService) {}

  onClose() {
    this.close.emit();
  }
}
