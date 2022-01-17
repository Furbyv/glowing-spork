import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SearchLayoutService {
  private stateToggle$$: Subject<
    'displayMap' | 'displayObject'
  > = new BehaviorSubject<'displayMap' | 'displayObject'>('displayMap');

  state$ = this.stateToggle$$.asObservable();

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  toggleMap() {
    this.stateToggle$$.next('displayMap');
    this.refreshEvent();
  }

  toggleObject() {
    this.stateToggle$$.next('displayObject');
    this.refreshEvent();
  }
}
