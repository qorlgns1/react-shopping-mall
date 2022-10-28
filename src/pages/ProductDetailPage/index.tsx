import React, { useEffect, useState } from 'react';
import BasicHeader from '../../components/header/BasicHeader';
import ProductDetails from '../../components/product/ProductDetails/index';

export default function ProductDetailPage({ location }: any) {
  const [productInfo] = useState(location.state);

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
