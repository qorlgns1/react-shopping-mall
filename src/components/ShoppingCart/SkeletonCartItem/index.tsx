import { useRef, useState } from 'react';
import Amount from '../../common/Amount';
import {
  AmountBox,
  CheckBox,
  DeliveryInfoWrapper,
  ProductDeleteFromShoppingCartButton,
  ProductImage,
  ProductInfoBox,
  ProductInfoWrapper,
  ProductName,
  ProductOrderButton,
  ProductPrice,
  ProductPriceBox,
  ProductTotalPrice,
  StoreName,
  Wrapper,
} from './style';

export default function SkeletonCartItem() {
  const [amount, setAmount] = useState<number>(1);
  const amountRef = useRef<any>(1);

  return (
    <Wrapper>
      <CheckBox>
        <input type='checkbox' id='check' />
        <label htmlFor='check'></label>
      </CheckBox>
      <ProductInfoBox>
        <ProductImage />
        <ProductInfoWrapper>
          <StoreName />
          <ProductName />
          <ProductPrice />
          <DeliveryInfoWrapper />
        </ProductInfoWrapper>
      </ProductInfoBox>
      <AmountBox>
        <Amount useRef={amountRef} setAmount={setAmount} count={amount} />
      </AmountBox>
      <ProductPriceBox>
        <ProductTotalPrice />
        <ProductOrderButton>주문하기</ProductOrderButton>
      </ProductPriceBox>
      <ProductDeleteFromShoppingCartButton />
    </Wrapper>
  );
}
