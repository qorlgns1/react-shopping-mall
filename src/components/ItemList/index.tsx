import React from 'react';
import Item from './Item';
import { ItemType } from './Item/style';
import { Wrapper } from './style';

export default function ItemList({ itemList }: any) {
  return (
    <Wrapper>
      {itemList.map((itemInfo: ItemType) => (
        <Item key={itemInfo.product_id} itemInfo={itemInfo} />
      ))}
    </Wrapper>
  );
}
