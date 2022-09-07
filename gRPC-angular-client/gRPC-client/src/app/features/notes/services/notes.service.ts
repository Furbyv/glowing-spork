import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import { BehaviorSubject, combineLatest, ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { AddNotesRequest, EditNoteRequest, GetNotesRequest, NoteRecord } from 'src/app/protos/notes.pb';
import { NotesClient } from 'src/app/protos/notes.pbsc';

@Injectable()
export class NotesService {
  private getNotesRequest: Subject<GetNotesRequest> = new ReplaySubject<GetNotesRequest>(1);
  private addNote$$: Subject<AddNotesRequest> = new ReplaySubject<AddNotesRequest>(1);
  private editNote$$: Subject<EditNoteRequest> = new ReplaySubject<EditNoteRequest>(1);
  private refresh$$: Subject<boolean> = new BehaviorSubject<boolean>(true);

  notes$ = combineLatest([this.getNotesRequest, this.refresh$$]).pipe(
    switchMap(([req]) => this.notesClient.getNotes(req)),
    map((reply) => reply.notes),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  saveState$ = this.addNote$$.pipe(
    switchMap((request) => this.notesClient.addNotes(request).pipe(toAsyncState())),
    shareReplay({ bufferSize: 1, refCount: true }),
    tap((state) => {
      if (state.success) {
        this.refresh$$.next(true);
      }
    })
  );

  editState$ = this.editNote$$.pipe(
    switchMap((request) => this.notesClient.editNote(request).pipe(toAsyncState())),
    shareReplay({ bufferSize: 1, refCount: true }),
    tap((state) => {
      if (state.success) {
        this.refresh$$.next(true);
      }
    })
  );

  constructor(private notesClient: NotesClient) {}

  getNotes(wozobjectnummer: number) {
    const request = new GetNotesRequest();
    request.wozobjectnummer = '' + wozobjectnummer;
    this.getNotesRequest.next(request);
  }

  saveNote(note: NoteRecord) {
    const request = new AddNotesRequest();
    note.userid = '1';
    request.note = note;
    this.addNote$$.next(request);
  }

  editNote(note: NoteRecord) {
    const request = new EditNoteRequest();
    note.userid = '1';
    request.editNote = note;
    this.editNote$$.next(request);
  }
}
