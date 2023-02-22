import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosGetProduct } from '../../apis/itemApi';
import BasicHeader from '../../components/header/BasicHeader';
import ProductDetails from '../../components/product/ProductDetails/index';
import { Product } from '../../types/product/product.type';

export default function ProductDetailPage() {
  const location = useLocation<Product>();
  const oldProductInfo = location.state;

  // 초기데이터는 메인화면에서 상품을 클릭할 때 상품정보를 여기 페이지로 보내서 상품 데이터을 보여줄 수 있도록 하고,
  // 나중에 리액트 쿼리로 불러온 데이터의 로딩이 완료된 경우 신선한 데이터로 관리한다.
  const { data: freshProductInfo } = useQuery(
    ['product', oldProductInfo.product_id],
    () => axiosGetProduct(oldProductInfo.product_id),
  );

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `상품 상세 | 호두마켓`;
  }, []);

  return (
    <>
      <BasicHeader />
      <h2 className='ir'>상세 상품정보</h2>
      <ProductDetails productInfo={freshProductInfo || oldProductInfo} />
    </>
  );
}
