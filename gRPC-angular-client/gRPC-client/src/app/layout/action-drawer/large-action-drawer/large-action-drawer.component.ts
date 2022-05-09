import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseActionDrawerComponent } from '../base-action-drawer/base-action-drawer.component';
import { DrawerLayoutService } from '../drawer-layout.service';

@Component({
  selector: 'woz-large-action-drawer',
  templateUrl: 'large-action-drawer.component.html',
  styleUrls: ['large-action-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LargeActionDrawerComponent extends BaseActionDrawerComponent {
  constructor(layoutService: DrawerLayoutService) {
    super(layoutService);
  }
}
