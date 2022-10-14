import { Link } from 'react-router-dom';
import styled from 'styled-components';

export interface NavItemProps {
  title: string;
  logo: string;
  to: string;
  onClick?: () => void;
}

const NavItem = styled(Link)<NavItemProps>`
  width: 48px;
  height: 50px;
  display: flex;
  flex-direction: column;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;

  @media screen and (max-width: 767px) {
    width: 180px;
  }

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 32px;
    background-image: url(${({ logo }) => logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin: 0 auto;
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
`;

export { NavItem };
