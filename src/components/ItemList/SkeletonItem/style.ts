import styled, { keyframes } from 'styled-components';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

const Wrapper = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ItemImage = styled.div`
  margin-bottom: 16px;
  width: 380px;
  height: 380px;
  border: 1px solid #c4c4c4;
  border-radius: 10px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const ItemStoreName = styled.span`
  margin-bottom: 10px;
  width: 70%;
  height: 22px;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const ItemProductName = styled.div`
  margin-bottom: 10px;
  height: 22px;
  width: 70%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const ItemPrice = styled.div`
  height: 30px;
  color: #000000;
  display: inline-block;
  width: 40%;
  background: #f2f2f2;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 100%;
    background: linear-gradient(to right, #f2f2f2, #ddd, #f2f2f2);
    animation: ${loading} 2s infinite linear;
  }
`;

const ItemPriceSuffix = styled.span`
  padding-left: 2px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
`;

export {
  Wrapper,
  ItemImage,
  ItemStoreName,
  ItemProductName,
  ItemPrice,
  ItemPriceSuffix,
};
