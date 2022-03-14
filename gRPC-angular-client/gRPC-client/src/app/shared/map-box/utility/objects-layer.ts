import { CircleLayer } from "mapbox-gl";
import { FeatureLayer } from "../layer-definition/feature-layer";

const objectLayer: CircleLayer = {
  id: 'Objecten',
  type: 'circle',
  source: 'objects',
  paint: {
    'circle-color': '#87c2fa',
    'circle-opacity': 0.75
  }
};

const multiSelectObjectLayer: CircleLayer = {
  id: 'Objecten-hl',
  type: 'circle',
  source: 'objects',
  paint: {
    'circle-color': '#2605ff',
    'circle-opacity': 0.75
  },
  filter: ['in', 'id', '']
};

export function createFeatureLayers(): FeatureLayer[] {
  const layer = new FeatureLayer(objectLayer);
  layer.MakeMutliSelectable(multiSelectObjectLayer);
  return [layer];
}
