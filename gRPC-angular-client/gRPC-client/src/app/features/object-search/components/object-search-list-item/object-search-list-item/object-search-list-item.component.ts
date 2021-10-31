import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WozObjectReply } from 'src/app/proto/wozobject_pb';

@Component({
  selector: 'app-object-search-list-item',
  templateUrl: './object-search-list-item.component.html',
  styleUrls: ['./object-search-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectSearchListItemComponent implements OnInit {
  @Input() wozObject: WozObjectReply.AsObject | undefined;
  src: string = 'https://cloud.funda.nl/valentina_media/151/205/843_2160.jpg';
  trimmedAddress: string = '';
  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.trimmedAddress =
      this.wozObject?.straatnaam.replace(/[^a-zA-Z ]/g, '') ?? '';
  }

  OnObjectClick() {
    this.router.navigate([this.wozObject?.wozobjectnummer], {
      relativeTo: this.route,
    });
  }
}
