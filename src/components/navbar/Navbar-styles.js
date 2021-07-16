import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    text-decoration: none;
    color: inherit;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    margin: 2rem;
    flex-direction: row;
  }
`;

export const StyledInnerWrapper = styled.nav`
  display: flex;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-bottom: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    margin: 0 1rem 0 0;
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledLink = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.s};
  margin: 0 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    font-size: ${({ theme }) => theme.fontSize.m};
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    margin: 0 1.5rem;
  }
`;
