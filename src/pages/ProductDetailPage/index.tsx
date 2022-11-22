import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { axiosGetProduct } from '../../apis/itemApi';
import BasicHeader from '../../components/header/BasicHeader';
import ProductDetails from '../../components/product/ProductDetails/index';

export default function ProductDetailPage({ location }: any) {
  const [productInfo, setProductInfo] = useState(location.state);

  // 초기데이터는 메인화면에서 상품을 클릭할 때 상품정보를 여기 페이지로 보내서 상품 데이터을 보여줄 수 있도록 하고,
  // 나중에 리액트 쿼리로 불러온 데이터의 로딩이 완료된 경우 신선한 데이터로 관리한다.
  const { data } = useQuery(
    ['productDetails'],
    () => axiosGetProduct(productInfo.product_id),
    { onSuccess: (data) => setProductInfo(data) },
  );

  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `상품 상세 | 호두마켓`;
  }, []);

  return (
    <>
      <BasicHeader />
      <h2 className='ir'>상세 상품정보</h2>
      <ProductDetails productInfo={productInfo} />
    </>
  );
}
