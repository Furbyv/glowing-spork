import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'woz-wozobjectid-input',
  templateUrl: './wozobjectid-input.component.html',
  styleUrls: ['./wozobjectid-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WozobjectidInputComponent {
  public objectIdControl = new FormControl<number | null | undefined>(null, [
    Validators.required,
    Validators.minLength(12),
    Validators.maxLength(12),
  ]);
  @Input() set wozobjectid(value: number | null | undefined) {
    this.objectIdControl.setValue(value);
  }
  @Output() wozobjectidChange = new EventEmitter<number>();

  constructor() {}

  onSearch() {
    if (this.objectIdControl.valid && this.objectIdControl.value) {
      this.wozobjectidChange.emit(this.objectIdControl.value);
    }
  }
}

