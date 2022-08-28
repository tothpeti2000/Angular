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
    cityZip: advertisement.city.zip,
    cityName: advertisement.city.name,
    description: advertisement.description,
    room: advertisement.room,
    halfRoom: advertisement.halfRoom,
    price: advertisement.price,
    size: advertisement.size,
  });
}

export function createDto(
  form: FormGroup<AdvertisementFormGroup>
): Advertisement {
  return {
    address: form.controls.address.value,
    advertisementType: form.controls.advertisementType.value,
    buildDate: form.controls.buildDate.value,
    cityId: 1,
    city: {
      id: 1,
      zip: form.controls.cityZip.value,
      name: form.controls.cityName.value,
    },
    description: form.controls.description.value,
    halfRoom: form.controls.halfRoom.value,
    room: form.controls.room.value,
    price: form.controls.price.value,
    size: form.controls.size.value,
  };
}
