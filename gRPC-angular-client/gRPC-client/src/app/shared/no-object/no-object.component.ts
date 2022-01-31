import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-no-object',
  templateUrl: './no-object.component.html',
  styleUrls: ['./no-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoObjectComponent {}
