import {
  ItemImage,
  ItemPrice,
  ItemProductName,
  ItemStoreName,
  Wrapper,
} from './style';

export default function SkeletonItem() {
  return (
    <Wrapper>
      <ItemImage />
      <ItemStoreName />
      <ItemProductName />
      <ItemPrice />
    </Wrapper>
  );
}
