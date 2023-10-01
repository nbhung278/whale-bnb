import { MaxLength } from 'class-validator';

type ImageLocationType = {
  id: string;
  url: string;
};

export class createLocation {
  id: string;

  userId: string;

  @MaxLength(255)
  name: string;

  country: string;
  distance: string;
  startDate: Date;
  endDate: Date;
  address: string;
  isNew: number;
  price: number;
  servicePrice: number;
  tax: string;
  type: number;
  images: ImageLocationType[];
  rates: number;
  description: string;
}

export class getLocations {
  limit: number;
  skip: number;
}

export class getLocationById {
  id: string;
}

export class payloadUpdate {
  userId: string;

  @MaxLength(255)
  name: string;

  country: string;
  distance: string;
  startDate: Date;
  endDate: Date;
  address: string;
  isNew: number;
  price: number;
  servicePrice: number;
  tax: string;
  type: number;
  images: ImageLocationType[];
  rates: number;
  description: string;
}

export class deleteLocations {
  ids: string[];
}
