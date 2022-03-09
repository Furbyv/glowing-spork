import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectedObjectsService {
  private selectedObjects$$: Subject<number[]> = new BehaviorSubject<number[]>(
    []
  );
  selectedObjects$ = this.selectedObjects$$.asObservable();

  setSelectedObjects(objects: number[]) {
    this.selectedObjects$$.next(objects);
  }
}
