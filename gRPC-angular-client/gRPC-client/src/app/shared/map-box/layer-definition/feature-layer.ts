import { AnyLayer } from 'mapbox-gl';
import { getLayerLayout } from '../map-box.utility';

export enum LayerType {
  Circle = 'circle',
  Background = 'background',
  FillExtrusion = 'fill-extrusion',
  Fill = 'fill',
  Heatmap = 'heatmap',
  Hillshade = 'hillshade',
  Line = 'line',
  Raster = 'raster',
  Symbol = 'symbol',
  Sky = 'sky'
}

export class FeatureLayer {
  readonly mainLayer: AnyLayer;
  private highLightLayer: AnyLayer | undefined;
  private visible: boolean = true;
  private multiSelect: boolean = false;

  get Visible() {
    return this.visible;
  }

  get MultiSelectable() {
    return this.multiSelect;
  }

  get HighLightLayer(): AnyLayer | undefined {
    return this.highLightLayer;
  }

  public MakeMutliSelectable(onMultiSelectLayer: AnyLayer) {
    this.multiSelect = true;
    this.highLightLayer = onMultiSelectLayer;
  }

  constructor(layer: AnyLayer) {
    this.mainLayer = layer;
    this.multiSelect = false;
    this.highLightLayer = undefined;
    this.visible = true;
  }

  public setLayerVisibility(visibility: boolean) {
    this.visible = visibility;
    let layout = getLayerLayout(this.mainLayer);
    if (layout) {
      layout.visibility = visibility ? 'visible' : 'none';
    } else {
      layout = { visibility: visibility ? 'visible' : 'none' };
    }
  }
}
