import React from 'react';
import { Wrapper, CustomSearchBar } from './style';
import MainLogo from '../../common/logo/MainLogo';
import Navbar from '../../common/navigation/NavBar';
import { Link } from 'react-router-dom';

export default function BasicHeader() {
  return (
    <Wrapper>
      <Link to={'/'}>
        <MainLogo size={{ width: '128px', height: '38px' }} />
      </Link>
      <CustomSearchBar />
      <Navbar />
    </Wrapper>
  );
}
