import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'woz-wozobjectid-input',
  templateUrl: './wozobjectid-input.component.html',
  styleUrls: ['./wozobjectid-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WozobjectidInputComponent {
  @Input() wozobjectid: number;
  @Output() wozobjectidChange = new EventEmitter<number>();
  // objectIdControl = new FormControl<number | null>(null);
  constructor() {}
}

