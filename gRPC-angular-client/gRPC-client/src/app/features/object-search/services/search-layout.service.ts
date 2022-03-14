import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable()
export class SearchLayoutService {
  private stateToggle$$: Subject<'displayMap' | 'displayObject' | 'displayGrid'> = new BehaviorSubject<
    'displayMap' | 'displayObject' | 'displayGrid'
  >('displayMap');

  state$ = this.stateToggle$$.asObservable();

  refreshEvent() {
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 500);
  }

  toggleGrid() {
    this.stateToggle$$.next('displayGrid');
    this.refreshEvent();
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
