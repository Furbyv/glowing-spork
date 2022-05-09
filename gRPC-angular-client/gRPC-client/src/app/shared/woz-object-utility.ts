import { SafeUrl } from '@angular/platform-browser';
import { WozObjectOverview } from '../protos/taxoverview.pb';
import { TransactionOverview } from '../protos/transactions.pb';
import { FullWozObjectReply, WozObjectReply } from '../protos/wozobject.pb';

export function getAddress(w: WozObjectReply | FullWozObjectReply | WozObjectOverview | TransactionOverview): string {
  const straatnaam = w.straatnaam ? w.straatnaam.value : '';
  const huisnummer = w.huisnummer;
  const huisletter = w.huisletter ? w.huisletter.value : '';
  const huisnummertoevoeging = w.huisnummertoevoeging ? w.huisnummertoevoeging.value : '';
  return `${straatnaam} ${huisnummer}${huisletter} ${huisnummertoevoeging}`;
}

export function convertWozObjectsToGeoJson(
  wozObjects: WozObjectReply[] | FullWozObjectReply[] | WozObjectOverview[] | TransactionOverview[],
  image?: SafeUrl | undefined
): GeoJSON.Feature[] {
  return wozObjects.map((w) => {
    const geometry: GeoJSON.Point = {
      type: 'Point',
      coordinates: [w.lon?.value!, w.lat?.value!],
    };
    const feature: GeoJSON.Feature = {
      id: w.wozobjectnummer!,
      type: 'Feature',
      geometry,
      properties: {
        id: w.wozobjectnummer!,
        address: getAddress(w),
        image: image,
        soc: w.soortobjectcode?.value,
      },
    };
    return feature;
  });
}
