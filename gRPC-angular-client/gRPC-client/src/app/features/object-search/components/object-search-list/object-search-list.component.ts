import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  OnChanges
} from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { WozObjectReply } from 'src/app/proto/wozobject.pb';

@Component({
  selector: 'app-object-search-list',
  templateUrl: './object-search-list.component.html',
  styleUrls: ['./object-search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectSearchListComponent implements OnInit, OnChanges {
  @Input() wozObjects: WozObjectReply[] = [];
  // MatPaginator Inputs
  length = 100;
  pageSize = 25;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  slicedList: WozObjectReply[] = [];

  // MatPaginator Output
  pageEvent: PageEvent = new PageEvent();

  constructor() {}

  ngOnChanges() {
    this.length = this.wozObjects.length;
    this.slicedList = this.wozObjects.slice(
      0 * this.pageSize,
      1 * this.pageSize
    );
  }

  onPageEvent(event: PageEvent) {
    this.pageEvent = event;
    this.slicedList = this.wozObjects.slice(
      event.pageIndex * this.pageSize,
      (event.pageIndex + 1) * this.pageSize
    );
  }

  ngOnInit(): void {}

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput
        .split(',')
        .map(str => +str);
    }
  }
}
