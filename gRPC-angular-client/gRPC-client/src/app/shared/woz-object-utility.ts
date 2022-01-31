import { FullWozObjectReply, WozObjectReply } from '../proto/wozobject.pb';

export function getAddress(w: WozObjectReply | FullWozObjectReply): string {
  const straatnaam = w.straatnaam ? w.straatnaam.value : '';
  const huisnummer = w.huisnummer;
  const huisletter = w.huisletter ? w.huisletter.value : '';
  const huisnummertoevoeging = w.huisnummertoevoeging
    ? w.huisnummertoevoeging.value
    : '';
  return `${straatnaam} ${huisnummer}${huisletter} ${huisnummertoevoeging}`;
}

export function convertWozObjectsToGeoJson(
  wozObjects: WozObjectReply[] | FullWozObjectReply[]
): GeoJSON.Feature[] {
  return wozObjects.map(w => {
    const geometry: GeoJSON.Point = {
      type: 'Point',
      coordinates: [w.lon?.value!, w.lat?.value!]
    };
    const feature: GeoJSON.Feature = {
      id: w.wozobjectnummer!,
      type: 'Feature',
      geometry,
      properties: {
        adres: getAddress(w)
      }
    };
    return feature;
  });
}
