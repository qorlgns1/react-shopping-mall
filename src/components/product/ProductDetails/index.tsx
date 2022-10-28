import { useRef, useState, useEffect } from 'react';
import Amount from '../../common/Amount';
import {
  AddShoppingCartButton,
  AmountWrapper,
  BuyButtonWrapper,
  BuyNowButton,
  DeliveryInfoWrapper,
  EmphasizeCount,
  OrderInfoWrapper,
  PriceInfoWrapper,
  ProductImage,
  ProductInfoWrapper,
  ProductName,
  ProductPrice,
  StoreName,
  TotalOrderCount,
  TotalOrderPrice,
  TotalPriceText,
  Wrapper,
} from './style';

export default function ProductDetails({ productInfo }: any) {
  const {
    image,
    product_info: productIntro,
    store_name,
    product_name,
    price,
    shipping_method,
    shipping_fee,
    stock,
  } = productInfo;
  const [amount, setAmount] = useState<number>(1);
  const amountRef = useRef<any>(1);

  useEffect(() => {
    if (amount > stock) {
      setAmount(stock);
      amountRef.current.value = stock;
    }
  }, [amount]);

  return (
    <Wrapper>
      <ProductImage src={image} alt={productIntro} />
      <OrderInfoWrapper>
        <ProductInfoWrapper>
          <StoreName>{store_name}</StoreName>
          <ProductName>{product_name}</ProductName>
          <ProductPrice>{price.toLocaleString('ko-KR')}</ProductPrice>
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
        <AmountWrapper>
          <Amount useRef={amountRef} setAmount={setAmount} />
        </AmountWrapper>
        <PriceInfoWrapper>
          <TotalPriceText>총 상품 금액</TotalPriceText>
          <TotalOrderCount>
            총 수량 <EmphasizeCount>{amount}</EmphasizeCount>개
          </TotalOrderCount>
          <TotalOrderPrice>
            {(amount * price).toLocaleString('ko-KR')}
          </TotalOrderPrice>
        </PriceInfoWrapper>
        <BuyButtonWrapper>
          <BuyNowButton>바로구매</BuyNowButton>
          <AddShoppingCartButton>장바구니</AddShoppingCartButton>
        </BuyButtonWrapper>
      </OrderInfoWrapper>
    </Wrapper>
  );
}
