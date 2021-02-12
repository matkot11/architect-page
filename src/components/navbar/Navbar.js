import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-right: 2rem;
`;

const StyledLink = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0 3rem;
`;

const Navbar = () => (
  <StyledWrapper>
    <StyledTitle>
      <Link to="/">ARCH</Link>
    </StyledTitle>
    <StyledLink>
      <Link to="/blog">Blog</Link>
    </StyledLink>
    <StyledLink>
      <Link to="/gallery">Gallery</Link>
    </StyledLink>
    <StyledLink>
      <Link to="/contact">Contact</Link>
    </StyledLink>
  </StyledWrapper>
);

export default Navbar;
