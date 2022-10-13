import {
  ItemImage,
  ItemPrice,
  ItemPriceSuffix,
  ItemProductName,
  ItemStoreName,
  Wrapper,
} from './style';

export default function Item({ itemInfo, style }: any) {
  return (
    <Wrapper style={style}>
      <ItemImage src={itemInfo.image} alt={`${itemInfo.product_name} 이미지`} />
      <ItemStoreName>{itemInfo.store_name}</ItemStoreName>
      <ItemProductName>{itemInfo.product_name}</ItemProductName>
      <div>
        <ItemPrice>{itemInfo.price.toLocaleString()}</ItemPrice>
        <ItemPriceSuffix>원</ItemPriceSuffix>
      </div>
    </Wrapper>
  );
}
