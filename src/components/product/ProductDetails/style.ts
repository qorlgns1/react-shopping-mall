import styled from 'styled-components';

export const Wrapper = styled.section`
  margin: 0 auto;
  padding: 80px 10px;
  max-width: 1280px;
  display: flex;
  gap: 50px;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    padding-top: 40px;
  }
`;

export const ProductImage = styled.img`
  max-width: 600px;
  max-height: 600px;
  margin: 0 auto;
`;

export const OrderInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreName = styled.span`
  margin-bottom: 16px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
`;

export const ProductName = styled.strong`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
`;

export const ProductPrice = styled.span`
  margin: 0 2px 138px 0;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;

  &::after {
    content: '원';
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }

  @media screen and (max-width: 1000px) {
    margin-bottom: 60px;
  }
`;

export const DeliveryInfoWrapper = styled.div`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  color: #767676;
`;

export const AmountWrapper = styled.div`
  padding: 30px 0;
  border-top: 2px solid #c4c4c4;
  border-bottom: 2px solid #c4c4c4;
`;

export const PriceInfoWrapper = styled.div`
  padding: 30px 0 22px;
  display: flex;
  align-items: baseline;
`;

export const TotalPriceText = styled.span`
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

export const TotalOrderCount = styled.span`
  margin-left: auto;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #767676;

  &:after {
    content: '|';
    margin: 0 12px;
    display: inline-block;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #c4c4c4;
  }
`;

export const EmphasizeCount = styled.em`
  font-weight: 700;
  color: #21bf48;
`;

export const TotalOrderPrice = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #21bf48;

  &:after {
    content: '원';
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    margin-left: 2px;
  }
`;

export const Soldout = styled.span`
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: red;
`;

export const BuyButtonWrapper = styled.div`
  display: flex;
  gap: 14px;
`;

export const BuyNowButton = styled.button`
  padding: 19px 0;
  flex-grow: 2;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background: #21bf48;
  border-radius: 5px;
`;

export const AddShoppingCartButton = styled.button`
  padding: 19px 0;
  flex-grow: 1;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  background: #767676;
  border-radius: 5px;
`;
