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
  width: 380px;
  position: relative;

  @media screen and (max-width: 767px) {
    width: 180px;
  }
`;

const ItemImage = styled.div`
  margin-bottom: 16px;
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

  @media screen and (max-width: 767px) {
    height: 180px;
  }
`;

const ItemStoreName = styled.span`
  margin-bottom: 10px;
  width: 70%;
  height: 16px;
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
  height: 18px;
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
  height: 24px;
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

  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;

export { Wrapper, ItemImage, ItemStoreName, ItemProductName, ItemPrice };
