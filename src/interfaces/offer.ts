import {ICity} from './city';


interface IOffer {
  id: number;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  };
  city: ICity;
  title: string;
  price: number;
  type: string;
  description: string;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
  images: string[];
  goods: string[];
  host: {
    id: number;
    name: string;
    avatarUrl: string;
    isPro: boolean;
  };
}

export {IOffer};
