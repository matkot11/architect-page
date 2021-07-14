import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

export const StyledInnerWrapper = styled.nav`
  display: flex;
`;

export const StyledTitle = styled.h1`
  /* font-size: ${({ theme }) => theme.fontSize.m}; */
  font-size: 1.3rem;
  /* margin-right: 2rem; */
`;

export const StyledLink = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0 0.5rem;
`;
