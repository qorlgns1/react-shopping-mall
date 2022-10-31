import styled from 'styled-components';

export const CartListHeader = styled.header`
  margin-bottom: 35px;
  padding-top: 5px;
  display: flex;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  background: #f2f2f2;
  border-radius: 10px;
  height: 60px;
  align-items: center;
  text-align: center;
`;

export const CheckBox = styled.div`
  width: 108px;
  text-align: start;

  & > input {
    display: none;
  }

  & > input + label {
    cursor: pointer;
    position: relative;
    padding-left: 30px;
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
    right: 8px;
    border-radius: 50%;
    background-color: #21bf48;
  }
`;

export const ProductInfoBox = styled.div`
  width: 662px;
`;

export const AmountBox = styled.span`
  width: 150px;
`;

export const ProductPriceBox = styled.span`
  flex-grow: 1;
`;
