import { Product, ProductInfo } from '../types/product/product.type';
import { axiosInstance } from './index';

interface InfinityScrollProductData {
  results: Product[];
  nextPage: number | null;
  isLast: boolean;
}

export const axiosGetProducts = async (
  pageParam = 1,
): Promise<InfinityScrollProductData> => {
  const { data } = await axiosInstance.get<ProductInfo>(
    `/products?page=${pageParam}`,
  );

  // next: 다음 페이지 url
  const { results, next } = data;

  return next
    ? { results, nextPage: ++pageParam, isLast: false }
    : { results, nextPage: null, isLast: true };
};

export const axiosGetProduct = async (productId: number) => {
  const { data } = await axiosInstance.get<Product>(`/products/${productId}`);
  return data;
};
