import { useRef, useState } from 'react';
import Amount from '../../common/Amount';
import { CheckBox } from '../common/style';
import {
  Wrapper,
  ProductInfoBox,
  ProductInfoWrapper,
  AmountBox,
  ProductPriceBox,
  ProductDeleteFromShoppingCartButton,
} from '../CartItem/style';
import {
  SkeletonProductImage,
  SkeletonProductOrderButton,
  SkeletonStoreName,
  SkeletonProductName,
  SkeletonProductPrice,
  SkeletonDeliveryInfoWrapper,
  SkeletonProductTotalPrice,
} from './style';

export default function SkeletonCartItem() {
  const [amount, setAmount] = useState<number>(1);
  const amountRef = useRef<any>(1);

  return (
    <Wrapper>
      <CheckBox skeleton={true}>
        <input type='checkbox' id='check' />
        <label htmlFor='check'></label>
      </CheckBox>
      <ProductInfoBox>
        <SkeletonProductImage />
        <ProductInfoWrapper>
          <SkeletonStoreName />
          <SkeletonProductName />
          <SkeletonProductPrice />
          <SkeletonDeliveryInfoWrapper />
        </ProductInfoWrapper>
      </ProductInfoBox>
      <AmountBox>
        <Amount useRef={amountRef} setAmount={setAmount} count={amount} />
      </AmountBox>
      <ProductPriceBox>
        <SkeletonProductTotalPrice />
        <SkeletonProductOrderButton>주문하기</SkeletonProductOrderButton>
      </ProductPriceBox>
      <ProductDeleteFromShoppingCartButton />
    </Wrapper>
  );
}
