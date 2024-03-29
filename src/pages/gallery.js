import { graphql } from 'gatsby';
import React from 'react';
import { StyledImage, StyledWrapper } from '../assets/styles/gallery-styles';

const Gallery = ({ data }) => (
  <StyledWrapper>
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
