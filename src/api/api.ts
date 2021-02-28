import axios, {AxiosResponse} from 'axios';

import { IOffer } from '../interfaces/offer';
import { IUser } from '../interfaces/user';
import { renameKeys } from '../utils/common';

const END_POINT = 'https://6.react.pages.academy/six-cities';
const TIMEOUT = 1000 * 5;

interface OffersResult {
  offers: IOffer[];
}

interface OfferResult {
  offer: IOffer;
}

interface UserResult {
  authInfo: IUser;
}

const ApiPaths = {
  getPathAuth: (): string => '/login',
  getPathOffers: (): string => '/hotels',
  getPathOffer: (id: string): string => `/offer/${id}`,
  getPathOffersNearby: (id: number): string => `/hotels/${id}/nearby`,
  getPathRoot: (): string => '/',
};

const createAPI = () => axios.create({
    baseURL: END_POINT,
    timeout: TIMEOUT,
    withCredentials: true,
  });

const apiInstance = createAPI();


async function getOffers(): Promise<OffersResult> {
  const url = `${END_POINT}${ApiPaths.getPathOffers()}`;

  try {
    const offersResponse = await apiInstance.get<IOffer[]>(url);
    const adaptedData = offersResponse.data.map(renameKeys);

    return {
      offers: adaptedData
    };
  } catch (err) {
    throw err;
  }
}

async function getOffer(id: string): Promise<OfferResult> {
  const url = `${END_POINT}${ApiPaths.getPathOffer(id)}`;

  try {
    const offersResponse = await apiInstance.get<IOffer>(url);
    const adaptedData = renameKeys(offersResponse.data);

    return {
      offer: adaptedData
    };
  } catch (err) {
    throw err;
  }
}

async function checkAuthorization(): Promise<UserResult> {
  const url = `${END_POINT}${ApiPaths.getPathOffers()}`;

  try {
    const data = await apiInstance.get<UserResult>(url);

    return {
      authInfo: renameKeys(data)
    };
  } catch (err) {
    throw err;
  }
}

async function authorizeUser(email: string, password: string): Promise<UserResult> {
  const url = `${END_POINT}${ApiPaths.getPathAuth()}`;


  try {
    const response = await apiInstance.post<IUser>(url, {email, password});
    const adaptedData = renameKeys(response.data);

    return {
      authInfo: adaptedData
    };
  } catch (err) {
    throw err;
  }
}


export {
  OffersResult,
  OfferResult,
  UserResult,
  getOffers,
  getOffer,
  authorizeUser,
  checkAuthorization,
};
