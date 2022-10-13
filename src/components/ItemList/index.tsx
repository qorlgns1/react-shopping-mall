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

      {/* 상품 개수가 홀수일때 마지막 하나의 상품이 가운데로 와서 UI가 망가져서 추가함 */}
      {itemList.length % 2 === 1 ? (
        <Item
          style={{ visibility: 'hidden' }}
          key='temp'
          itemInfo={itemList[itemList.length - 1]}
        />
      ) : null}
    </Wrapper>
  );
}
