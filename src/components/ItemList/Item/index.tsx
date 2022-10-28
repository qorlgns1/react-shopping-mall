import { useHistory } from 'react-router-dom';
import {
  ItemImage,
  ItemPrice,
  ItemPriceSuffix,
  ItemProductName,
  ItemStoreName,
  Wrapper,
} from './style';

export default function Item({ itemInfo, style }: any) {
  const history = useHistory();
  const handleItemClick = () => {
    history.push(`/product/${itemInfo.product_id}`, itemInfo);
  };

  return (
    <Wrapper style={style} onClick={handleItemClick}>
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
