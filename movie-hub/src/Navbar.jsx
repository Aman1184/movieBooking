import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavContainer,
  Logo,
  NavLinks,
  NavLink as StyledNavLink
} from './Navbar.styles';

const Navbar = () => {
  return (
    <NavContainer>
      <Logo>Movie-HUB</Logo>
      <NavLinks>
        <StyledNavLink as={Link} to="/about">About Us</StyledNavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;
