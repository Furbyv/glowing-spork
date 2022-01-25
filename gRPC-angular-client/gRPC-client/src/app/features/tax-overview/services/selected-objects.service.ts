import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectedObjectsService {
  private selectedObjects$$: Subject<number[]> = new ReplaySubject<number[]>(1);
  selectedObjects$ = this.selectedObjects$$.asObservable();

  setSelectedObjects(objects: number[]) {
    this.selectedObjects$$.next(objects);
  }
}
