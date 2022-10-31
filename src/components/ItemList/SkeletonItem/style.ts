import styled, { css, keyframes } from 'styled-components';
import { ItemPrice, ItemProductName, ItemStoreName } from '../Item/style';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(460px);
  }
`;

const Animation = css`
  position: relative;
  overflow: hidden;
  border-radius: 5px;
  background-color: #f2f2f2;

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

export const SkeletonItemImage = styled.div`
  margin-bottom: 16px;
  height: 380px;
  border: 1px solid #c4c4c4;
  ${Animation}
  border-radius: 10px;

  @media screen and (max-width: 767px) {
    height: 180px;
  }
`;

export const SkeletonItemStoreName = styled(ItemStoreName)`
  width: 70%;
  height: 16px;
  ${Animation}
`;

export const SkeletonItemProductName = styled(ItemProductName)`
  width: 80%;
  height: 18px;
  ${Animation}
`;

export const SkeletonItemPrice = styled(ItemPrice)`
  width: 40%;
  height: 24px;
  ${Animation}

  @media screen and (max-width: 767px) {
    height: 20px;
  }
`;
