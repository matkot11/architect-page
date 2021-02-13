import { graphql } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';
import Image from 'gatsby-image';

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 1rem;
  height: calc(100vh - 10rem);

  @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    margin: 1rem;
  }
`;

const StyledImage = styled(Image)`
  border-radius: 5px;

  ${({ name }) => {
    switch (name) {
      case 'chair':
        return css`
          grid-area: 2 / 1 / 4 / 3;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 2 / 1 / 3 / 2;
          }
        `;
      case 'bed':
        return css`
          grid-area: 2 / 3 / 5 / 7;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 2 / 2 / 3 / -1;
          }
        `;
      case 'closet':
        return css`
          grid-area: 4 / 7 / 5 / 8;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 3 / 1 / 4 / 2;
          }
        `;
      case 'bath':
        return css`
          grid-area: 2 / 7 / 4 / 9;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 3 / 2 / 4 / -1;
          }
        `;
      case 'flower':
        return css`
          grid-area: 2 / 9 / 4 / -1;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 4 / 1 / 5 / 2;
          }
        `;
      case 'paintings':
        return css`
          grid-area: 4 / 1 / -1 / 3;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 4 / 2 / 5 / -1;
          }
        `;
      case 'table':
        return css`
          grid-area: 5 / 3 / -1 / 8;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 5 / 1 / -1 / 2;
          }
        `;
      case 'sofa':
        return css`
          grid-area: 4 / 8 / -1 / -1;

          @media only screen and (max-width: ${({ theme }) => theme.size.l}) {
            grid-area: 5 / 2 / -1 / -1;
          }
        `;
      default:
        return null;
    }
  }}
`;

const StyledTitle = styled.h2`
  grid-area: 1 / 1 / 2 / -1;
  justify-self: center;
  align-self: center;
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

const Gallery = ({ data }) => (
  <StyledWrapper>
    <StyledTitle>Gallery</StyledTitle>
    {data.allFile.nodes.map((item) => (
      <StyledImage
        fluid={item.childImageSharp.fluid}
        key={item.name}
        name={item.name}
      />
    ))}
  </StyledWrapper>
);

export const query = graphql`
  {
    allFile(filter: { absolutePath: { regex: "/gallery/" } }) {
      nodes {
        name
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default Gallery;
