import styled, { css, keyframes } from 'styled-components';
import {
  DeliveryInfoWrapper,
  ProductName,
  ProductOrderButton,
  ProductPrice,
  ProductTotalPrice,
  StoreName,
} from '../CartItem/style';

const loading = keyframes`
  0% {
    transform: translateX(0);
  }
  50%,
  100% {
    transform: translateX(210px);
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

export const SkeletonProductImage = styled.div`
  width: 160px;
  height: 160px;
  ${Animation}
  border-radius: 10px;
`;

export const SkeletonStoreName = styled(StoreName)`
  width: 180px;
  height: 18px;
  ${Animation}
`;

export const SkeletonProductName = styled(ProductName)`
  width: 200px;
  height: 22px;
  ${Animation}
`;

export const SkeletonProductPrice = styled(ProductPrice)`
  width: 110px;
  height: 20px;
  ${Animation}
`;

export const SkeletonDeliveryInfoWrapper = styled(DeliveryInfoWrapper)`
  width: 200px;
  height: 18px;
  ${Animation}
`;

export const SkeletonProductTotalPrice = styled(ProductTotalPrice)`
  width: 110px;
  height: 23px;
  ${Animation}
`;

export const SkeletonProductOrderButton = styled(ProductOrderButton)`
  ${Animation}
`;
