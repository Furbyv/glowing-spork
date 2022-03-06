import { Component, Input } from '@angular/core';
import { FeatureLayer } from '../layer-definition/feature-layer';
import { FeatureLayers } from '../map-box.component';

@Component({
  selector: 'map-layer-select',
  templateUrl: 'layer-select.component.html',
  styleUrls: ['layer-select.component.scss']
})
export class LayerSelectComponent {
  @Input() layers: FeatureLayer[] | null = [];
  @Input() map: mapboxgl.Map | undefined;

  onToggleLayer(layer: FeatureLayer) {
    if (this.map) {
      const visibility = layer.Visible ? 'none' : 'visible';
      this.map.setLayoutProperty(layer.mainLayer.id, 'visibility', visibility);
      if (layer.HighLightLayer) {
        this.map.setLayoutProperty(
          layer.HighLightLayer.id,
          'visibility',
          visibility
        );
      }
      layer.setLayerVisibility(!layer.Visible);
    }
  }
}
