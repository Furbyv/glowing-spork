import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GeoJsonProperties } from 'geojson';
import { CustomPopUpComponent } from 'src/app/shared/map-box/pop-up/custom-pop-up.component';
import { SearchLayoutService } from '../../services/search-layout.service';

@Component({
  selector: 'woz-object-popup',
  templateUrl: 'object-popup.component.html',
  styleUrls: ['object-popup.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class ObjectPopupComponent implements CustomPopUpComponent {
  @Input() data: GeoJsonProperties;

  onOpenObject(id: string | null) {
    if (id) {
      this.layoutService.toggleObject();
      this.router.navigate([id], {
        relativeTo: this.route,
      });
    }
  }

  constructor(private layoutService: SearchLayoutService, private router: Router, private route: ActivatedRoute) {}
}
