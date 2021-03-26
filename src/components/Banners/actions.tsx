import { FETCH_BANNERS } from './constants';

export function getBanners(data: any[]) {
  return {
    type: FETCH_BANNERS,
    payload: data,
  };
}
