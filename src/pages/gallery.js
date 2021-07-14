import { graphql } from 'gatsby';
import React from 'react';
import { StyledImage, StyledTitle, StyledWrapper } from './gallery-styles';

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
