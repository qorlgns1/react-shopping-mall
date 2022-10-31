import { useEffect, useRef, useState } from 'react';
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

export default function CartItem({ item }: any) {
  const {
    product_id,
    image,
    product_info: productIntro,
    store_name,
    product_name,
    price,
    shipping_method,
    shipping_fee,
    stock,
    count,
  } = item;
  const [amount, setAmount] = useState<number>(count);
  const amountRef = useRef<any>(count);

  const handleProductDeleteFromShoppingCart = (e: any) => {
    e.target.parentElement.remove();
  };

  useEffect(() => {
    if (amount > stock) {
      setAmount(stock);
      amountRef.current.value = stock;
    }
  }, [amount]);

  return (
    <Wrapper>
      <CheckBox>
        <input type='checkbox' id='check' />
        <label htmlFor='check'></label>
      </CheckBox>
      <ProductInfoBox>
        <ProductImage src={image} alt={productIntro} />
        <ProductInfoWrapper>
          <StoreName>{store_name}</StoreName>
          <ProductName>{product_name}</ProductName>
          <ProductPrice>{`${price.toLocaleString('ko-KR')}원`}</ProductPrice>
          <DeliveryInfoWrapper>
            {shipping_method === 'DELIVERY'
              ? '택배배송 '
              : `직접배송(화물배달) `}
            /
            {shipping_fee === 0
              ? ' 무료배송'
              : ` 배송비: ${shipping_fee.toLocaleString('ko-KR')}원`}
          </DeliveryInfoWrapper>
        </ProductInfoWrapper>
      </ProductInfoBox>
      <AmountBox>
        <Amount useRef={amountRef} setAmount={setAmount} count={count} />
      </AmountBox>
      <ProductPriceBox>
        <ProductTotalPrice>
          {`${(amount * price).toLocaleString('ko-KR')}원`}
        </ProductTotalPrice>
        <ProductOrderButton onClick={() => alert('기능 구현 중입니다.')}>
          주문하기
        </ProductOrderButton>
      </ProductPriceBox>
      <ProductDeleteFromShoppingCartButton
        onClick={handleProductDeleteFromShoppingCart}
      />
    </Wrapper>
  );
}
