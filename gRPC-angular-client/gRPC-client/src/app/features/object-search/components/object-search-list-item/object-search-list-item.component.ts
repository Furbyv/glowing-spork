import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { SafeUrl } from '@angular/platform-browser';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ImagesService } from 'src/app/features/object-details/services/images.service';
import { WozObjectReply } from 'src/app/protos/wozobject.pb';

@UntilDestroy()
@Component({
  selector: 'woz-object-search-list-item',
  templateUrl: './object-search-list-item.component.html',
  styleUrls: ['./object-search-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectSearchListItemComponent implements OnInit, OnChanges {
  @Input() wozObject: WozObjectReply | undefined;
  @Output() singleClick = new EventEmitter<number>();
  @Output() doubleClick = new EventEmitter<number>();
  trimmedAddress: string = '';
  secondLineAddress: string = '';
  objectDetails: string = '';
  image: SafeUrl | undefined;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.wozObject && this.wozObject && this.wozObject.imageData && this.wozObject.imageData.value) {
      this.image = this.imageService.convertByteArrayToImage(this.wozObject.imageData.value);
    }
  }

  constructor(private imageService: ImagesService) {}

  ngOnInit(): void {
    this.trimmedAddress = this.wozObject!.straatnaam?.value!.replace(/[^a-zA-Z ]/g, '') ?? '';
    this.trimmedAddress =
      this.trimmedAddress +
      ` ${this.wozObject?.huisnummer ?? 0}${this.wozObject?.huisletter?.value ?? ''} ${
        this.wozObject?.huisnummertoevoeging?.value ?? ''
      }`;
    this.secondLineAddress = `${this.wozObject?.postcode?.value ?? ''} | ${this.wozObject?.gemeentenaam?.value ?? ''}`;
  }

  onObjectDblClick() {
    this.doubleClick.emit(+this.wozObject?.wozobjectnummer!);
  }

  onObjectClick() {
    this.singleClick.emit(+this.wozObject?.wozobjectnummer!);
  }
}
