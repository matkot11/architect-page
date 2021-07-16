import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

export const StyledWrapper = styled.div`
  margin: 5rem 2rem 3rem 2rem;
  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    grid-gap: 2rem;
    align-items: stretch;
    justify-content: center;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(6, 1fr);
  }
`;

export const StyledImage = styled(Image)`
  margin-top: 2rem;
  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    margin-top: 0;
    border-radius: 5px;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    ${({ name }) => {
    switch (name) {
      case 'chair':
        return css`
            grid-area: 1 / 1 / 3 / 3;
          `;
      case 'bed':
        return css`
            grid-area: 1 / 3 / 4 / 7;
          `;
      case 'closet':
        return css`
            grid-area: 3 / 7 / 4 / 8;
          `;
      case 'bath':
        return css`
            grid-area: 1 / 7 / 3 / 9;
          `;
      case 'flower':
        return css`
            grid-area: 1 / 9 / 3 / -1;
          `;
      case 'paintings':
        return css`
            grid-area: 3 / 1 / -1 / 3;
          `;
      case 'table':
        return css`
            grid-area: 4 / 3 / -1 / 8;
          `;
      case 'sofa':
        return css`
            grid-area: 3 / 8 / -1 / -1;
          `;
      default:
        return null;
    }
  }}
  }
`;
