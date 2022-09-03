import { FormControl, FormGroup } from '@angular/forms';
import { Advertisement } from '../models/advertisement';

export interface AdvertisementFormGroup {
  address: FormControl;
  advertisementType: FormControl;
  buildDate: FormControl;
  cityZip: FormControl;
  cityName: FormControl;
  description: FormControl;
  room: FormControl;
  halfRoom: FormControl;
  price: FormControl;
  size: FormControl;
}

export function fillFormWithAdvertisementDetails(
  form: FormGroup<AdvertisementFormGroup>,
  advertisement: Advertisement
) {
  form.setValue({
    address: advertisement.address,
    advertisementType: advertisement.advertisementType,
    buildDate: advertisement.buildDate,
    cityZip: advertisement.city?.zip,
    cityName: advertisement.city?.name,
    description: advertisement.description,
    room: advertisement.room,
    halfRoom: advertisement.halfRoom,
    price: advertisement.price,
    size: advertisement.size,
  });
}

export function createDto(
  form: FormGroup<AdvertisementFormGroup>,
  advertisement: Advertisement
): Advertisement {
  let dto: Advertisement = {
    address: form.controls.address.value,
    advertisementType: form.controls.advertisementType.value,
    buildDate: form.controls.buildDate.value,
    cityId: advertisement.cityId,
    description: form.controls.description.value,
    halfRoom: form.controls.halfRoom.value,
    room: form.controls.room.value,
    imageUrl: advertisement?.imageUrl,
    price: form.controls.price.value,
    size: form.controls.size.value,
  };

  if (advertisement) {
    dto = {
      ...dto,
      id: advertisement.id,
    };
  }

  return dto;
}
