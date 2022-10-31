import React, { useEffect } from 'react';
import styled from 'styled-components';
import BasicHeader from '../../components/header/BasicHeader';
import ShoppingCart from '../../components/ShoppingCart';

const Wrapper = styled.div`
  min-width: 1280px;
`;

export default function ShoppingCartPage() {
  useEffect(() => {
    const titleElement = document.getElementsByTagName('title')[0];
    titleElement.innerHTML = `장바구니 | 호두마켓`;
  }, []);

  return (
    <Wrapper>
      <BasicHeader />
      <ShoppingCart />
    </Wrapper>
  );
}
