import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseActionDrawerComponent } from '../base-action-drawer/base-action-drawer.component';
import { DrawerLayoutService } from '../drawer-layout.service';

@Component({
  selector: 'woz-small-action-drawer',
  templateUrl: 'small-action-drawer.component.html',
  styleUrls: ['small-action-drawer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SmallActionDrawerComponent extends BaseActionDrawerComponent {
  constructor(layoutService: DrawerLayoutService) {
    super(layoutService);
  }
}
