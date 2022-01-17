import { Component, Inject, OnChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImagesService } from 'src/app/features/object-details/services/images.service';

export interface PhotoDialogData {
  id: number;
}

@Component({
  selector: 'app-expand-dialog',
  styleUrls: ['expand-photo-dialog.component.scss'],
  templateUrl: 'expand-photo-dialog.component.html'
})
export class ExpandPhotoDialog {
  id: number;
  constructor(
    public dialogRef: MatDialogRef<ExpandPhotoDialog>,
    @Inject(MAT_DIALOG_DATA) public data: PhotoDialogData
  ) {
    this.id = data.id;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
