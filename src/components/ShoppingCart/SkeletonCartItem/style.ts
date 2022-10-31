import styled, { keyframes } from 'styled-components';
import deleteIcon from '../../../assets/icon/icon-delete.svg';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(210px);
  }
`;

export const Wrapper = styled.li`
  position: relative;
  display: flex;
  height: 200px;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  align-items: center;
`;

export const CheckBox = styled.div`
  padding-left: 30px;
  width: 108px;

  & > input {
    display: none;
  }

  & > input + label {
    cursor: pointer;
  }

  & > input + label:before {
    content: '';
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 4px solid #f2f2f2;
    border-radius: 50%;
  }
`;

export const ProductInfoBox = styled.div`
  padding: 20px 0;
  width: 662px;
  display: flex;
  gap: 36px;
`;

export const ProductImage = styled.div`
  width: 160px;
  height: 160px;
  border-radius: 10px;
  background-color: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StoreName = styled.div`
  margin-bottom: 10px;
  width: 180px;
  height: 18px;
  background-color: #f2f2f2;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const ProductName = styled.div`
  margin-bottom: 10px;
  width: 200px;
  height: 22px;
  background-color: #f2f2f2;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const ProductPrice = styled.div`
  margin-bottom: 40px;
  width: 110px;
  height: 20px;
  background-color: #f2f2f2;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const DeliveryInfoWrapper = styled.div`
  width: 200px;
  height: 18px;
  background-color: #f2f2f2;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
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
  width: 110px;
  height: 23px;
  background-color: #f2f2f2;
  border-radius: 5px;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const ProductOrderButton = styled.div`
  width: 130px;
  padding: 10px 0;
  background: #f2f2f2;
  border-radius: 5px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

export const ProductDeleteFromShoppingCartButton = styled.button`
  width: 22px;
  height: 22px;
  background-image: url(${deleteIcon});
  position: absolute;
  right: 18px;
  top: 18px;
`;
