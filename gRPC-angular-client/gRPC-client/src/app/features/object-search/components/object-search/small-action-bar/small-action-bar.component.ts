import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
@Component({
  selector: 'app-small-action-bar',
  templateUrl: './small-action-bar.component.html',
  styleUrls: ['./small-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SmallActionBarComponent {
  @Output() toggleMenu = new EventEmitter();
  @Output() toggleMap = new EventEmitter();
  @Output() toggleObject = new EventEmitter();

  onToggleMap() {
    this.toggleMap.emit();
  }

  onToggleMenu() {
    this.toggleMenu.emit();
  }

  onToggleObject() {
    this.toggleObject.emit();
  }
}
