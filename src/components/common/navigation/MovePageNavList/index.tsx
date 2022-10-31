import React from 'react';
import MovePageNavItem from '../MovePageNavItem';
import { NavList } from './style';
import cartIcon from '../../../../assets/icon/icon-shopping-cart.svg';
import userIcon from '../../../../assets/icon/icon-user.svg';

export default function MovePageNavList() {
  return (
    <NavList>
      <li>
        <MovePageNavItem to='/shoppingCart' title='장바구니' logo={cartIcon} />
      </li>
      <li>
        <MovePageNavItem to='/login' title='로그인' logo={userIcon} />
      </li>
    </NavList>
  );
}
