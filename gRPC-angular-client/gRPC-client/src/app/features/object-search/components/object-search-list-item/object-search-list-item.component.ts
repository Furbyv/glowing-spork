import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WozObjectReply } from 'src/app/proto/wozobject.pb';

@Component({
  selector: 'app-object-search-list-item',
  templateUrl: './object-search-list-item.component.html',
  styleUrls: ['./object-search-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ObjectSearchListItemComponent implements OnInit {
  @Input() wozObject: WozObjectReply | undefined;
  trimmedAddress: string = '';
  secondLineAddress: string = '';
  objectDetails: string = '';

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.trimmedAddress =
      this.wozObject!.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ?? '';
    this.trimmedAddress =
      this.trimmedAddress +
      ` ${this.wozObject?.huisnummer ?? 0}${this.wozObject?.huisletter?.value ??
        ''} ${this.wozObject?.huisnummertoevoeging?.value ?? ''}`;
    this.secondLineAddress = `Gemeente: ${this.wozObject?.gemeentenaam?.value ??
      ''}, postcode: ${this.wozObject?.postcode?.value ?? ''}`;
    this.objectDetails = `soc: ${this.wozObject?.soortobjectcode?.value ?? ''}`;
  }

  OnObjectClick() {
    this.router.navigate([this.wozObject?.wozobjectnummer], {
      relativeTo: this.route
    });
  }
}
