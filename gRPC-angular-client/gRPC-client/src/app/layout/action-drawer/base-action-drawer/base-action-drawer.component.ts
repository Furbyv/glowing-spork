import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { DrawerLayoutService } from '../drawer-layout.service';

@Component({ template: '' })
export abstract class BaseActionDrawerComponent {
  protected selectedObjects$$: Subject<number[]> = new ReplaySubject<number[]>(1);
  selectedObjects$ = this.selectedObjects$$.asObservable();
  @Input() set selectedObjects(objects: number[]) {
    this.selectedObjects$$.next(objects);
  }
  protected enableRefresh$$: Subject<boolean> = new ReplaySubject<boolean>(1);
  enableRefresh$ = this.enableRefresh$$.asObservable();
  @Input() set enableRefresh(enable: boolean) {
    this.enableRefresh$$.next(enable);
  }
  @Output() toggleMenu = new EventEmitter();
  @Output() doFilterAction = new EventEmitter();
  @Output() setFiltersAction = new EventEmitter();
  @Output() toggleObject = new EventEmitter();
  @Output() toggleGrid = new EventEmitter();
  @Output() toggleMap = new EventEmitter();
  @Output() openNotes = new EventEmitter<number[]>();

  state$ = this.layoutService.state$;

  onToggleMenu() {
    this.toggleMenu.emit();
  }

  onFilter() {
    this.doFilterAction.emit();
  }

  onSetFilters() {
    this.setFiltersAction.emit();
  }

  onToggleObject() {
    this.toggleObject.emit();
  }

  onToggleGrid() {
    this.toggleGrid.emit();
  }

  onToggleMap() {
    this.toggleMap.emit();
  }

  onOpenNotes(selectedObjects: number[]) {
    this.openNotes.emit(selectedObjects);
  }

  constructor(protected layoutService: DrawerLayoutService) {}
}
