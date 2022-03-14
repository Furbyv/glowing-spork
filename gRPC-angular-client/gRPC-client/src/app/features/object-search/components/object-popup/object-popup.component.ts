import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GeoJsonProperties } from 'geojson';
import { CustomPopUpComponent } from 'src/app/shared/map-box/pop-up/custom-pop-up.component';

@Component({
  selector: 'woz-object-popup',
  templateUrl: 'object-popup.component.html',
  styleUrls: ['object-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ObjectPopupComponent implements CustomPopUpComponent {
  @Input() data: GeoJsonProperties;
}
