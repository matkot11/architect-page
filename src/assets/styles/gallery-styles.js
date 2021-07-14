import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

export const StyledWrapper = styled.div`
  /* display: grid; */
  /* grid-template-columns: repeat(10, 1fr); */
  /* grid-template-rows: repeat(6, 1fr); */
  /* grid-gap: 1rem; */
  /* height: calc(100vh - 10rem); */
`;

export const StyledImage = styled(Image)`
  margin-top: 2rem;
  /* border-radius: 5px; */

  /* ${({ name }) => {
    switch (name) {
      case 'chair':
        return css`
          grid-area: 2 / 1 / 4 / 3;
        `;
      case 'bed':
        return css`
          grid-area: 2 / 3 / 5 / 7;
        `;
      case 'closet':
        return css`
          grid-area: 4 / 7 / 5 / 8;
        `;
      case 'bath':
        return css`
          grid-area: 2 / 7 / 4 / 9;
        `;
      case 'flower':
        return css`
          grid-area: 2 / 9 / 4 / -1;
        `;
      case 'paintings':
        return css`
          grid-area: 4 / 1 / -1 / 3;
        `;
      case 'table':
        return css`
          grid-area: 5 / 3 / -1 / 8;
        `;
      case 'sofa':
        return css`
          grid-area: 4 / 8 / -1 / -1;
        `;
      default:
        return null;
    }
  }} */
`;
