import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const StyledWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: max-content;

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    flex-direction: column;
    justify-content: center;
    margin: auto;
    margin-top: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-right: 2rem;

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    margin-right: 0;
  }
`;

const StyledLink = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin: 0 3rem;

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    margin: 1rem 0;
  }
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
