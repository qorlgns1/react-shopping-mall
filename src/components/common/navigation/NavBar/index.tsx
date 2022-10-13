import { useState } from 'react';
import './navbar.css';
import MovePageNavItem from '../MovePageNavItem/index';
import cartIcon from '../../../../assets/icon/icon-shopping-cart.svg';
import userIcon from '../../../../assets/icon/icon-user.svg';

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className='navigation'>
      <button
        className='hamburger'
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* icon from Heroicons.com */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-5 w-5'
          viewBox='0 0 20 20'
          fill='white'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
            clipRule='evenodd'
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? 'navigation-menu expanded' : 'navigation-menu'
        }
      >
        <ul>
          <li>
            <MovePageNavItem to='/shopping' title='장바구니' logo={cartIcon} />
          </li>
          <li>
            <MovePageNavItem to='/login' title='로그인' logo={userIcon} />
          </li>
        </ul>
      </div>
    </nav>
  );
}
