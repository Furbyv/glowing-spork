import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { filter, map } from 'rxjs/operators';
import { NoteRecord } from 'src/app/proto/notes.pb';
import { NotesService } from '../../services/notes.service';

@Component({
  selector: 'woz-notes-form',
  templateUrl: 'notes-form.component.html',
  styleUrls: ['notes-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesFormComponent implements OnChanges {
  @Input() selectedObject: number | undefined;

  notes$ = this.notesService.notes$.pipe(
    filter(state => state.success),
    map(state => state.res!)
  );

  ngOnChanges(_: SimpleChanges): void {
    if (this.selectedObject) {
      this.notesService.getNotes(this.selectedObject);
    }
  }

  constructor(private notesService: NotesService) {}

  getShortText(note: NoteRecord): string {
    return `${note.user} - ${note.noteText!.substr(0, 20)}`;
  }
}
