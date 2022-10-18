import { Wrapper } from './style';
import { ReactNode } from 'react';

interface ItemListType {
  children: ReactNode;
}

export default function ItemList({ children }: ItemListType) {
  return <Wrapper>{children}</Wrapper>;
}
