import React from 'react';
import { Wrapper, CustomSearchBar } from './style';
import MainLogo from '../../common/logo/MainLogo';
import MovePageNavList from '../../common/navigation/MovePageNavList';

export default function BasicHeader() {
  return (
    <Wrapper>
      <MainLogo size={{ width: '128px', height: '38px' }} />
      <CustomSearchBar />
      <MovePageNavList />
    </Wrapper>
  );
}
