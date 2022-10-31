import styled from 'styled-components';
import deleteIcon from '../../../assets/icon/icon-delete.svg';

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  height: 200px;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  border-radius: 10px;
  align-items: center;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
`;

export const CheckBox = styled.div`
  padding-left: 30px;
  width: 108px;
  position: relative;

  & > input {
    display: none;
  }

  & > input + label {
    cursor: pointer;
    position: relative;
  }

  & > input + label:before {
    content: '';
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    border: 4px solid #21bf48;
    border-radius: 50%;
  }

  & > input:checked + label:after {
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: -4px;
    left: 8px;
    border-radius: 50%;
    background-color: #21bf48;
  }
`;

export const ProductInfoBox = styled.div`
  padding: 20px 0;
  width: 662px;
  display: flex;
  gap: 36px;
`;

export const ProductImage = styled.img`
  max-width: 160px;
  max-height: 160px;
  border-radius: 10px;
  background-image: url(${(props) => props.src});
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 400;
`;

export const StoreName = styled.span`
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

export const ProductName = styled.strong`
  margin-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
`;

export const ProductPrice = styled.span`
  margin-bottom: 40px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const DeliveryInfoWrapper = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
`;

export const AmountBox = styled.div``;

export const ProductPriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  text-align: center;
  height: 100%;
`;

export const ProductTotalPrice = styled.strong`
  margin: 56px 0 26px 0;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #eb5757;
`;

export const ProductOrderButton = styled.button`
  width: 130px;
  padding: 10px 0;
  background: #21bf48;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
`;

export const ProductDeleteFromShoppingCartButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${deleteIcon});
  position: absolute;
  right: 18px;
  top: 18px;
`;
