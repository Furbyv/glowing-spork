import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface PhotoDialogData {
  id: number;
}

@Component({
  selector: 'woz-expand-dialog',
  styleUrls: ['expand-photo-dialog.component.scss'],
  templateUrl: 'expand-photo-dialog.component.html',
})
export class ExpandPhotoDialogComponent {
  id: number;
  constructor(
    public dialogRef: MatDialogRef<ExpandPhotoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: PhotoDialogData
  ) {
    this.id = data.id;
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
