import { axiosInstance } from './index';

export const axiosGetItemList = async () => {
  try {
    const { data } = await axiosInstance.get(`/products`);
    const { results } = data;
    return results;
  } catch (error) {
    console.error('axiosGetItemList error', error);
  }
};
