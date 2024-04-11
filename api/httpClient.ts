import axios from 'axios';
import { Const } from '../const';

export const defaultRequestConfig = (token: string) => {
  return {
    headers: {
      Accept: 'application/json; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8',
      Authorization: `Bearer ${token}`,
    },
  };
};

export const makeUrl = (path: string, params: object): string => {
  let apiUrl = `${Const.apiServerProtocol}://${Const.apiServerHost}:${Const.apiServerPort}${path}`;

  Object.entries(params).forEach((key, value) => {
    if (value === null) {
      return;
    }

    apiUrl += `${apiUrl.endsWith(path) ? '?' : '&'}${key}=${encodeURI(
      `${value}`,
    )}`;
  });
  return apiUrl;
};

export const httpGet = async (path: string, params: object, token: string) => {
  try {
    return await axios.get(makeUrl(path, params), defaultRequestConfig(token));
  } catch (e) {
    throw e;
  }
};

export const httpPost = async (
  path: string,
  params: object,
  data: object,
  token: string,
) => {
  try {
    return await axios.post(
      makeUrl(path, params),
      data,
      defaultRequestConfig(token),
    );
  } catch (e) {
    console.error(`Error while ${makeUrl(path, params)}`, e);
    throw e;
  }
};

export const httpPut = async (
  path: string,
  params: object,
  data: object,
  token: string,
) => {
  try {
    return await axios.put(
      makeUrl(path, params),
      data,
      defaultRequestConfig(token),
    );
  } catch (e) {
    throw e;
  }
};

export const httpPaths = {
  signup: '/user/signup',
  login: '/auth/authenticate',

  // group
  getUserGroup: '/user/group',
};
