import axios from 'axios';

import { IOffer } from '../interfaces/offer';
import { IReview } from '../interfaces/review';
import { IUser } from '../interfaces/user';
import { renameKeys } from '../utils/common';

const END_POINT = 'https://6.react.pages.academy/six-cities';
const TIMEOUT = 1000 * 5;

interface OffersResult {
  offers: IOffer[];
}

interface CommentsResult {
  comments: IReview[];
}

interface UserResult {
  authInfo: IUser;
}

const ApiPaths = {
  getPathAuth: (): string => '/login',
  getPathOffers: (): string => '/hotels',
  getPathOffersNearby: (id: string): string => `/hotels/${id}/nearby`,
  getPathComments: (id: string): string => `/comments/${id}`,
};

const createAPI = () => axios.create({
    baseURL: END_POINT,
    timeout: TIMEOUT,
    withCredentials: true,
  });

const apiInstance = createAPI();


async function getOffers(): Promise<OffersResult> {
  const url = `${ApiPaths.getPathOffers()}`;

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

async function getOffersNearby(id: string): Promise<OffersResult> {
  const url = `${ApiPaths.getPathOffersNearby(id)}`;

  try {
    const offersResponse = await apiInstance.get<IOffer[]>(url);
    const adaptedData = renameKeys(offersResponse.data);

    return {
      offers: adaptedData
    };
  } catch (err) {
    throw err;
  }
}

async function getComments(id: string): Promise<CommentsResult> {
  const url = `${ApiPaths.getPathComments(id)}`;

  try {
    const commentsResponse = await apiInstance.get<IReview[]>(url);
    const adaptedData = renameKeys(commentsResponse.data);

    return {
      comments: adaptedData
    };
  } catch (err) {
    throw err;
  }
}

async function checkAuthorization(): Promise<UserResult> {
  const url = `${ApiPaths.getPathOffers()}`;

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
  const url = `${ApiPaths.getPathAuth()}`;

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
  UserResult,
  getOffers,
  getOffersNearby,
  getComments,
  authorizeUser,
  checkAuthorization,
};
