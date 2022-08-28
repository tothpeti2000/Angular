import { City } from './city';

export interface Advertisement {
  id?: number;
  address: string;
  advertisementType: AdvertisementType;
  buildDate: number;
  cityId: number;
  city: City;
  description: string;
  halfRoom: number;
  room: number;
  imageUrl?: string;
  price: number;
  size: number;
}

export enum AdvertisementType {
  Flat = 0,
  House = 1,
  HolidayHouse = 2,
  BuildingPlot = 3,
}
