import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-object-properties',
  templateUrl: './object-properties.component.html',
  styleUrls: ['./object-properties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectPropertiesComponent {
  @Input() id: number | undefined = 0;
}
