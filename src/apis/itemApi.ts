import { axiosInstance } from './index';

export const axiosGetProducts = async (pageParam = 1) => {
  try {
    const { data } = await axiosInstance.get(`/products?page=${pageParam}`);

    // next: 다음 페이지 url
    const { results, next } = data;
    console.log(results);

    return next
      ? { results, nextPage: ++pageParam, isLast: false }
      : { results, nextPage: null, isLast: true };
  } catch (error) {
    console.error('axiosGetProducts error', error);
  }
};

export const axiosGetProduct = async (productId: number) => {
  try {
    const { data } = await axiosInstance.get(`/products/${productId}`);

    return data;
  } catch (error) {
    console.error('axiosGetProducts error', error);
  }
};
