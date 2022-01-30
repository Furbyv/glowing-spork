import { Injectable } from '@angular/core';
import { toAsyncState } from '@ngneat/loadoff';
import { ReplaySubject, Subject } from 'rxjs';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { GetNotesRequest } from 'src/app/proto/notes.pb';
import { NotesClient } from 'src/app/proto/notes.pbsc';

@Injectable({ providedIn: 'root' })
export class NotesService {
  private getNotesRequest: Subject<GetNotesRequest> = new ReplaySubject<
    GetNotesRequest
  >(1);

  notes$ = this.getNotesRequest.pipe(
    switchMap(req => this.notesClient.getNotes(req)),
    map(reply => reply.notes),
    toAsyncState(),
    shareReplay({ bufferSize: 1, refCount: true })
  );

  constructor(private notesClient: NotesClient) {}

  getNotes(wozobjectnummer: number) {
    const request = new GetNotesRequest();
    request.wozobjectnummer = '' + wozobjectnummer;
    this.getNotesRequest.next(request);
  }
}
