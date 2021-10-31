import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { WozObjectReply } from 'src/app/proto/wozobject_pb';

@Component({
  selector: 'app-object-search-list',
  templateUrl: './object-search-list.component.html',
  styleUrls: ['./object-search-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectSearchListComponent implements OnInit {
  @Input() wozObjects: WozObjectReply.AsObject[] = [];

  constructor() {}

  ngOnInit(): void {}
}
