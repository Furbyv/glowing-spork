import { Type } from '@angular/core';
import { CircleLayer } from 'mapbox-gl';
import { FeatureLayer } from '../layer-definition/feature-layer';
import { CustomPopUpComponent } from '../pop-up/custom-pop-up.component';

const transactionLayer: CircleLayer = {
  id: 'Transacties',
  type: 'circle',
  source: 'comparables',
  paint: {
    'circle-color': '#f58025',
    'circle-opacity': 0.75,
  },
};

const multiSelectLayer: CircleLayer = {
  id: 'Transacties-hl',
  type: 'circle',
  source: 'comparables',
  paint: {
    'circle-color': '334756',
    'circle-opacity': 0.75,
  },
  filter: ['in', 'id', ''],
};

export function createComparablesFeatureLayer(customPopUp?: Type<CustomPopUpComponent> | undefined): FeatureLayer {
  const layer = new FeatureLayer(transactionLayer, customPopUp);
  layer.MakeMutliSelectable(multiSelectLayer);
  return layer;
}
