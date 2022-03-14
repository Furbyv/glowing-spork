import { Type } from '@angular/core';
import { AnyLayer } from 'mapbox-gl';
import { CustomPopUpComponent } from '../pop-up/custom-pop-up.component';
import { getLayerLayout } from '../utility/map-box.utility';

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
  Sky = 'sky',
}

export class FeatureLayer {
  readonly mainLayer: AnyLayer;
  private highLightLayer: AnyLayer | undefined;
  private visible: boolean = true;
  private multiSelect: boolean = false;
  readonly customPopUp: Type<CustomPopUpComponent> | undefined;
  public readonly onClickEvent: boolean = true;
  public readonly onDblClickEvent: boolean = true;

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

  /*
   ***Setting a custom component will disable the onClickEvent bool.
   ***Rather use dblClickEvent to have interaction with object in the map
   ***Or create interaction in the custom component
   */
  constructor(layer: AnyLayer, customPopUp?: Type<CustomPopUpComponent>) {
    this.mainLayer = layer;
    this.multiSelect = false;
    this.highLightLayer = undefined;
    this.visible = true;
    this.customPopUp = customPopUp;
    this.onDblClickEvent = true;
    if (customPopUp) {
      this.onClickEvent = false;
    }
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
