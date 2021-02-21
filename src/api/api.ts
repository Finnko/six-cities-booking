import axios from 'axios';

import {END_POINT} from '../const';
import {IOffer} from '../interfaces/offer';
import {renameKeys} from '../utils/common';

interface OffersResult {
  offers: IOffer[];
}

const ApiPaths = {
  getPathAuth: (): string => '/login',
  getPathOffers: (): string => '/hotels',
  getPathOffer: (id: number): string => `/offer/${id}`,
  getPathOffersNearby: (id: number): string => `/hotels/${id}/nearby`,
  getPathRoot: (): string => '/',
};


async function getOffers(): Promise<OffersResult> {
  const url = `${END_POINT}${ApiPaths.getPathOffers()}`;

  try {
    const offersResponse = await axios.get<IOffer[]>(url);
    const adaptedData = offersResponse.data.map(renameKeys);

    return {
      offers: adaptedData
    };
  } catch (err) {
    throw err;
  }
}


export {
  OffersResult,
  getOffers,
};
