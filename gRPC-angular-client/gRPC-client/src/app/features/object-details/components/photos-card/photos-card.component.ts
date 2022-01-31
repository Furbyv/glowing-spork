import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { merge, Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { ImagesService } from '../../services/images.service';
import { ExpandPhotoDialog } from './expand-photo-dialog/expand-photo-dialog.component';

@Component({
  selector: 'app-photos-card',
  templateUrl: 'photos-card.component.html',
  styleUrls: ['photos-card.component.scss']
})
export class PhotosCardComponent implements OnChanges {
  loadstate$$: Subject<boolean> = new Subject<boolean>();
  @Input() id: number | undefined;
  @Input() expanded: boolean = false;

  containerClass: string = 'photo-container';
  photoClass: string = 'photo';
  private getImageState$ = merge(
    this.imagesService.images$,
    this.imagesService.uploadRequest$
  ).pipe(
    map(state => state.loading),
    startWith(true)
  );

  loading$ = merge(this.getImageState$, this.loadstate$$);

  images$ = this.imagesService.images$.pipe(
    filter(state => state.success),
    map(state => state.res!),
    map(reply =>
      reply.map(r =>
        r.imageData
          ? this.imagesService.convertByteArrayToImage(r.imageData!)
          : null
      )
    ),
    map(reply => reply.filter(r => r !== null)),
    map(reply => (reply.length ? reply : [this.imagesService.defaultImage]))
  );

  ngOnChanges(changes: SimpleChanges) {
    if (changes.id && this.id) {
      this.imagesService.getImages(this.id, false);
    }
    this.containerClass = this.expanded
      ? 'photo-container-expanded'
      : 'photo-container';

    this.photoClass = this.expanded ? 'photo-expanded' : 'photo';
  }

  constructor(
    private imagesService: ImagesService,
    private dialog: MatDialog,
    private vcr: ViewContainerRef
  ) {}

  onFileSelected(files: FileList | null) {
    if (files && files.length && this.id) {
      for (let i = 0; i < files.length; i++) {
        files[i].arrayBuffer().then(buff => {
          let x = new Uint8Array(buff);
          this.imagesService.uploadImages(x, this.id!);
        });
      }
    }
  }

  onExpand() {
    this.dialog.open(ExpandPhotoDialog, {
      width: '80vw',
      height: '80vh',
      viewContainerRef: this.vcr,
      data: { name: this.id }
    });
  }

  refresh() {
    this.imagesService.refresh();
  }
}
