import { Component, Input, OnChanges, SimpleChanges, ViewContainerRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { merge, Subject } from 'rxjs';
import { filter, map, startWith } from 'rxjs/operators';
import { ImagesService } from '../../services/images.service';
import { ExpandPhotoDialogComponent } from './expand-photo-dialog/expand-photo-dialog.component';

@Component({
  selector: 'woz-photos-card',
  templateUrl: 'photos-card.component.html',
  styleUrls: ['photos-card.component.scss'],
})
export class PhotosCardComponent implements OnChanges {
  loadstate$$: Subject<boolean> = new Subject<boolean>();
  @Input() set id(value: number | string | undefined | null) {
    if (value) {
      this.imagesService.getImages(+value, false);
    }
  }
  @Input() address: string | null = '';
  @Input() expanded: boolean = false;

  imageId$ = this.imagesService.imageId$;
  containerClass: string = 'photo-container';
  photoClass: string = 'photo';

  private getImageState$ = merge(this.imagesService.images$, this.imagesService.uploadRequest$).pipe(
    map((state) => state.loading),
    startWith(true)
  );

  loading$ = merge(this.getImageState$, this.loadstate$$);

  images$ = this.imagesService.images$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((reply) => reply.map((r) => (r.imageData ? this.imagesService.convertByteArrayToImage(r.imageData!) : null))),
    map((reply) => reply.filter((r) => r !== null)),
    map((reply) => (reply.length ? reply : [this.imagesService.defaultImage]))
  );

  ngOnChanges(_: SimpleChanges) {
    this.containerClass = this.expanded ? 'photo-container-expanded' : 'photo-container';
    this.photoClass = this.expanded ? 'photo-expanded' : 'photo';
  }

  constructor(private imagesService: ImagesService, private dialog: MatDialog, private vcr: ViewContainerRef) {}

  onFileSelected(files: FileList | null, id: number) {
    if (files && files.length && this.id) {
      for (let i = 0; i < files.length; i++) {
        files[i].arrayBuffer().then((buff) => {
          const x = new Uint8Array(buff);
          this.imagesService.uploadImages(x, id);
        });
      }
    }
  }

  onExpand() {
    this.dialog.open(ExpandPhotoDialogComponent, {
      width: '80vw',
      height: '80vh',
      viewContainerRef: this.vcr,
      data: { name: this.id },
    });
  }

  refresh() {
    this.imagesService.refresh();
  }
}
