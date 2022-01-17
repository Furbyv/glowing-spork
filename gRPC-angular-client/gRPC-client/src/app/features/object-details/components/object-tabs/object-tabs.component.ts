import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-object-tabs',
  templateUrl: './object-tabs.component.html',
  styleUrls: ['./object-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ObjectTabsComponent {
  @Input() id: number | undefined = 0;
}
