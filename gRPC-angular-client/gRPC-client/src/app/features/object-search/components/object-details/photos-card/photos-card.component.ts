import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { merge, Subject } from 'rxjs';
import { filter, map, startWith, take, tap } from 'rxjs/operators';
import { ImagesService } from '../../../services/images.service';

@Component({
  selector: 'app-photos-card',
  templateUrl: 'photos-card.component.html',
  styleUrls: ['photos-card.component.scss'],
})
export class PhotosCardComponent implements OnChanges {
  loadstate$$: Subject<boolean> = new Subject<boolean>();
  @Input() id: number | undefined;

  private getImageState$ = merge(
    this.imagesService.images$,
    this.imagesService.uploadRequest$
  ).pipe(
    map((state) => state.loading),
    startWith(true)
  );

  loading$ = merge(this.getImageState$, this.loadstate$$);

  images$ = this.imagesService.images$.pipe(
    filter((state) => state.success),
    map((state) => state.res!),
    map((reply) =>
      reply.map((r) =>
        this.imagesService.convertByteArrayToImage(r.toObject().imageData)
      )
    ),
    map((reply) => (reply.length ? reply : [this.imagesService.defaultImage]))
  );

  ngOnChanges(changes: SimpleChanges) {
    if (changes.id && this.id) {
      this.imagesService.getImage(this.id, false);
    }
  }

  constructor(
    private imagesService: ImagesService,
    private dialog: MatDialog
  ) {}

  onFileSelected(files: FileList | null) {
    if (files && files.length && this.id) {
      for (let i = 0; i < files.length; i++) {
        files[i].arrayBuffer().then((buff) => {
          let x = new Uint8Array(buff);
          this.imagesService.uploadImages(x, this.id!);
        });
      }
    }
  }

  refresh() {
    this.imagesService.refresh();
  }
}
