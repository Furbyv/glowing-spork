import {
  AnyLayer,
  AnySourceData,
  BackgroundLayer,
  BackgroundLayout,
  BackgroundPaint,
  CircleLayer,
  CircleLayout,
  CirclePaint,
  FillExtrusionLayer,
  FillExtrusionLayout,
  FillExtrusionPaint,
  FillLayer,
  FillLayout,
  FillPaint,
  HeatmapLayer,
  HeatmapLayout,
  HeatmapPaint,
  HillshadeLayer,
  HillshadeLayout,
  HillshadePaint,
  LineLayer,
  LineLayout,
  LinePaint,
  RasterLayer,
  RasterLayout,
  RasterPaint,
  SkyLayer,
  SkyLayout,
  SkyPaint,
  SymbolLayer,
  SymbolLayout,
  SymbolPaint
} from 'mapbox-gl';

export interface MapSource {
  id: string;
  source: AnySourceData;
}

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

export function getLayerLayout(
  layer: AnyLayer
):
  | BackgroundLayout
  | FillLayout
  | FillExtrusionLayout
  | LineLayout
  | SymbolLayout
  | RasterLayout
  | CircleLayout
  | HeatmapLayout
  | HillshadeLayout
  | SkyLayout
  | undefined {
  let l: AnyLayer;
  switch (layer.type) {
    case LayerType.Circle:
      l = layer as CircleLayer;
      return l.layout;
    case LayerType.Background:
      l = layer as BackgroundLayer;
      return l.layout;
    case LayerType.Fill:
      l = layer as FillLayer;
      return l.layout;
    case LayerType.FillExtrusion:
      l = layer as FillExtrusionLayer;
      return l.layout;
    case LayerType.Heatmap:
      l = layer as HeatmapLayer;
      return l.layout;
    case LayerType.Hillshade:
      l = layer as HillshadeLayer;
      return l.layout;
    case LayerType.Line:
      l = layer as LineLayer;
      return l.layout;
    case LayerType.Raster:
      l = layer as RasterLayer;
      return l.layout;
    case LayerType.Sky:
      l = layer as SkyLayer;
      return l.layout;
    case LayerType.Symbol:
      l = layer as SymbolLayer;
      return l.layout;
    default:
      return undefined;
  }
}

export function getLayerPaint(
  layer: AnyLayer
):
  | BackgroundPaint
  | FillPaint
  | FillExtrusionPaint
  | LinePaint
  | SymbolPaint
  | RasterPaint
  | CirclePaint
  | HeatmapPaint
  | HillshadePaint
  | SkyPaint
  | undefined {
  let l: AnyLayer;
  switch (layer.type) {
    case LayerType.Circle:
      l = layer as CircleLayer;
      return l.paint;
    case LayerType.Background:
      l = layer as BackgroundLayer;
      return l.paint;
    case LayerType.Fill:
      l = layer as FillLayer;
      return l.paint;
    case LayerType.FillExtrusion:
      l = layer as FillExtrusionLayer;
      return l.paint;
    case LayerType.Heatmap:
      l = layer as HeatmapLayer;
      return l.paint;
    case LayerType.Hillshade:
      l = layer as HillshadeLayer;
      return l.paint;
    case LayerType.Line:
      l = layer as LineLayer;
      return l.paint;
    case LayerType.Raster:
      l = layer as RasterLayer;
      return l.paint;
    case LayerType.Sky:
      l = layer as SkyLayer;
      return l.paint;
    case LayerType.Symbol:
      l = layer as SymbolLayer;
      return l.paint;
    default:
      return undefined;
  }
}
