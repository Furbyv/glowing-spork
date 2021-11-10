import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagesService } from 'src/app/features/object-search/services/images.service';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: 'upload-dialog.component.html',
})
export class UploadDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    private imagesService: ImagesService,
    @Inject(MAT_DIALOG_DATA) public data: number
  ) {}

  onUpload(files: FileList | null) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
