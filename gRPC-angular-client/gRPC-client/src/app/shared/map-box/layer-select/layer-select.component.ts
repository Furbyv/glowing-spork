import { Component, Input } from '@angular/core';
import { FeatureLayers } from '../map-box.component';

@Component({
  selector: 'map-layer-select',
  templateUrl: 'layer-select.component.html',
  styleUrls: ['layer-select.component.scss']
})
export class LayerSelectComponent {
  @Input() layers: FeatureLayers[] | null = [];
  @Input() map: mapboxgl.Map | undefined;

  onToggleLayer(layer: FeatureLayers) {
    if (this.map) {
      const visibility =
        this.map.getLayoutProperty(layer.id, 'visibility') === 'visible'
          ? 'none'
          : 'visible';
      this.map.setLayoutProperty(layer.id, 'visibility', visibility);
      if (layer.multiSelect) {
        if (this.map.getLayer('highlighted'))
          this.map.setLayoutProperty(`highlighted`, 'visibility', visibility);
      }
      layer.visible = !layer.visible;
    }
  }
}
