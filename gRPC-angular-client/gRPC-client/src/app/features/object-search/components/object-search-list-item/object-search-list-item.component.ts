import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { WozObjectReply } from 'src/app/proto/wozobject.pb';
import { ObjectSearchService } from '../../services/object-search.service';
import { SearchLayoutService } from '../../services/search-layout.service';

@UntilDestroy()
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
  private state: 'displayMap' | 'displayObject' = 'displayMap';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private layoutService: SearchLayoutService,
    private objectSearchService: ObjectSearchService
  ) {
    this.layoutService.state$
      .pipe(untilDestroyed(this))
      .subscribe(state => (this.state = state));
  }

  ngOnInit(): void {
    this.trimmedAddress =
      this.wozObject!.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ?? '';
    this.trimmedAddress =
      this.trimmedAddress +
      ` ${this.wozObject?.huisnummer ?? 0}${this.wozObject?.huisletter?.value ??
        ''} ${this.wozObject?.huisnummertoevoeging?.value ?? ''}`;
    this.secondLineAddress = `${this.wozObject?.postcode?.value ?? ''} | ${this
      .wozObject?.gemeentenaam?.value ?? ''}`;
  }

  onObjectDblClick() {
    this.layoutService.toggleObject();
    this.router.navigate([this.wozObject?.wozobjectnummer], {
      relativeTo: this.route
    });
  }

  onObjectClick() {
    if (this.state === 'displayMap') {
      this.objectSearchService.goToObject(+this.wozObject?.wozobjectnummer!);
    } else {
      this.router.navigate([this.wozObject?.wozobjectnummer], {
        relativeTo: this.route
      });
    }
  }
}
