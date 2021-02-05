import {ICity} from './city';

interface IOffer extends ICity {
  id: number;
  coords: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  title: string;
  price: number;
  type: string;
  promoImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  roomsCount: number;
  guestsCount: number;
  images: string[];
  features: string[];
  owner: {
    id: number;
    name: string;
    avatar: string;
    description: string[];
    isPro: boolean;
  };
}

export {IOffer};
