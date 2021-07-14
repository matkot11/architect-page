import React from 'react';
import { graphql } from 'gatsby';
import {
  StyledImage,
  StyledParagraph,
  StyledTextWrapper,
  StyledTitle,
  StyledWrapper,
} from '../assets/styles/index-styles';

const IndexPage = ({ data }) => (
  <StyledWrapper>
    <StyledTextWrapper>
      <StyledTitle>Emily Bordough </StyledTitle>
      <StyledParagraph>
        I am Architect with Master degree and 5 years of experience in interior
        design.
      </StyledParagraph>
    </StyledTextWrapper>
    <StyledImage fluid={data.file.childImageSharp.fluid} />
  </StyledWrapper>
);

export const query = graphql`
  {
    file(name: { eq: "hero" }) {
      childImageSharp {
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

export default IndexPage;
