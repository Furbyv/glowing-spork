import { Type } from '@angular/core';
import { CircleLayer } from 'mapbox-gl';
import { FeatureLayer } from '../layer-definition/feature-layer';
import { CustomPopUpComponent } from '../pop-up/custom-pop-up.component';

const objectLayer: CircleLayer = {
  id: 'Objecten',
  type: 'circle',
  source: 'objects',
  paint: {
    'circle-color': '#87c2fa',
    'circle-opacity': 0.75,
  },
};

const multiSelectObjectLayer: CircleLayer = {
  id: 'Objecten-hl',
  type: 'circle',
  source: 'objects',
  paint: {
    'circle-color': '#2605ff',
    'circle-opacity': 0.75,
  },
  filter: ['in', 'id', ''],
};

export function createFeatureLayers(customPopUp?: Type<CustomPopUpComponent> | undefined): FeatureLayer[] {
  const layer = new FeatureLayer(objectLayer, customPopUp);
  layer.MakeMutliSelectable(multiSelectObjectLayer);
  return [layer];
}
