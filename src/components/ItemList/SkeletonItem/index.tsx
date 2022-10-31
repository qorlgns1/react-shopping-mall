import { Wrapper } from '../Item/style';
import {
  SkeletonItemImage,
  SkeletonItemPrice,
  SkeletonItemProductName,
  SkeletonItemStoreName,
} from './style';

export default function SkeletonItem() {
  return (
    <Wrapper>
      <SkeletonItemImage />
      <SkeletonItemStoreName />
      <SkeletonItemProductName />
      <SkeletonItemPrice />
    </Wrapper>
  );
}
