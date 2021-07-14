import React from 'react';
import { Link } from 'gatsby';
import {
  StyledLink,
  StyledTitle,
  StyledWrapper,
  StyledInnerWrapper,
} from './Navbar-styles';

const Navbar = () => (
  <StyledWrapper>
    <StyledTitle>
      <Link to="/">ARCH</Link>
    </StyledTitle>
    <StyledInnerWrapper>
      <StyledLink>
        <Link to="/blog">Blog</Link>
      </StyledLink>
      <StyledLink>
        <Link to="/gallery">Gallery</Link>
      </StyledLink>
      <StyledLink>
        <Link to="/contact">Contact</Link>
      </StyledLink>
    </StyledInnerWrapper>
  </StyledWrapper>
);

export default Navbar;
