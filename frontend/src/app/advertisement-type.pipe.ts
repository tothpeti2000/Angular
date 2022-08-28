import { Pipe, PipeTransform } from '@angular/core';
import { AdvertisementType } from './models/advertisement';

@Pipe({
  name: 'advertisementType',
})
export class AdvertisementTypePipe implements PipeTransform {
  private static lookup = ['Lakás', 'Ház', 'Nyaraló', 'Építési telek'];

  transform(value: AdvertisementType) {
    return AdvertisementTypePipe.lookup[value];
  }
}
