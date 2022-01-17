import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output
} from '@angular/core';
@Component({
  selector: 'app-large-action-bar',
  templateUrl: './large-action-bar.component.html',
  styleUrls: ['./large-action-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LargeActionBarComponent {
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
