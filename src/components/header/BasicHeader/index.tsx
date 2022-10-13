import React from 'react';
import { Wrapper, CustomSearchBar } from './style';
import MainLogo from '../../common/logo/MainLogo';
import Navbar from '../../common/navigation/NavBar';

export default function BasicHeader() {
  return (
    <Wrapper>
      <MainLogo size={{ width: '128px', height: '38px' }} />
      <CustomSearchBar />
      <Navbar />
    </Wrapper>
  );
}
