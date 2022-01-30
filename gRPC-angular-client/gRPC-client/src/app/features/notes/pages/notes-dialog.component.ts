import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface NotesDialogInput {
  wozobjectnummers: number[];
}

@Component({
  templateUrl: 'notes-dialog.component.html',
  styleUrls: ['notes-dialog.component.scss']
})
export class NotesDialogComponent {
  wozobjectnummers: number[];
  constructor(
    private dialogRef: MatDialogRef<NotesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) private data: NotesDialogInput
  ) {
    this.wozobjectnummers = data.wozobjectnummers;
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
