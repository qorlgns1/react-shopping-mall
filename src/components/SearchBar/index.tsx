import React from 'react';
import { SearchButton, SearchInput, Wrapper } from './style';

export default function SearchBar(props: any) {
  return (
    <Wrapper {...props}>
      <SearchInput placeholder='상품을 검색해보아요!' />
      <SearchButton />
    </Wrapper>
  );
}
