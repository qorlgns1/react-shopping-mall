import React from 'react';
import Item from './Item';
import { ItemType } from './Item/style';
import SkeletonItem from './SkeletonItem';
import { Wrapper } from './style';

interface ItemListType {
  isLoading: boolean;
  itemList: [];
}

export default function ItemList({ isLoading, itemList }: ItemListType) {
  return (
    <Wrapper>
      {!isLoading
        ? new Array(15).fill(0).map((_, i) => <SkeletonItem key={i} />)
        : itemList.map((itemInfo: ItemType) => (
            <Item key={itemInfo.product_id} itemInfo={itemInfo} />
          ))}
    </Wrapper>
  );
}
