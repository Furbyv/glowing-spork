import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Timestamp } from '@ngx-grpc/well-known-types';
import { merge } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { NoteRecord } from 'src/app/proto/notes.pb';
import { NotesService } from '../../services/notes.service';

export enum FormMode {
  editMode,
  addMode,
  readMode
}

@Component({
  selector: 'woz-notes-form',
  templateUrl: 'notes-form.component.html',
  styleUrls: ['notes-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NotesFormComponent implements OnChanges {
  @Input() selectedObject: number | undefined;
  private oldText: string = '';
  private formMode: FormMode = FormMode.readMode;
  readOnly = this.formMode === FormMode.readMode;
  selectedNote: NoteRecord | undefined;
  notes$ = this.notesService.notes$.pipe(
    tap(a => console.log(a)),
    filter(state => state.success),
    map(state => state.res!)
  );
  saveState$ = merge(
    this.notesService.saveState$,
    this.notesService.editState$
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

  onSave() {
    if (this.selectedNote) {
      switch (this.formMode) {
        case FormMode.addMode:
          this.notesService.saveNote(this.selectedNote);
          break;
        case FormMode.editMode:
          this.notesService.editNote(this.selectedNote);
          break;
      }
    }
    this.formMode = FormMode.readMode;
  }

  onAdd() {
    if (this.selectedObject) {
      this.selectedNote = new NoteRecord();
      this.selectedNote.wozobjectnummer = this.selectedObject.toString();
      this.selectedNote.noteDate = Timestamp.fromDate(new Date());
      this.selectedNote.user = 'Demo';
      this.selectedNote.userid = '0';
      this.oldText = '##';
      this.formMode = FormMode.addMode;
    }
  }

  onEdit() {
    if (this.selectedNote) {
      this.oldText = this.selectedNote.noteText ?? '';
      this.formMode = FormMode.editMode;
    }
  }

  isAddMode(): boolean {
    return this.formMode === FormMode.addMode;
  }

  isReadOnly() {
    return this.formMode === FormMode.readMode;
  }
}
