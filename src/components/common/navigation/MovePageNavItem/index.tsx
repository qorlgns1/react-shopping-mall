import React from 'react';
import PropTypes from 'prop-types';
import { NavItem, NavItemProps } from './style';

export default function MovePageNavItem({
  title,
  logo,
  to,
  onClick,
  ...props
}: NavItemProps) {
  return (
    <NavItem to={to} title={title} onClick={onClick} logo={logo} {...props}>
      {title}
    </NavItem>
  );
}

MovePageNavItem.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};
