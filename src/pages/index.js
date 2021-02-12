import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 60%;
  min-height: calc(100vh - 12rem);
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  width: min-content;
  text-align: end;
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 38rem;
  text-align: end;
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  object-fit: cover;
`;

const IndexPage = ({ data }) => (
  <StyledWrapper>
    <StyledTextWrapper>
      <StyledTitle>Emily Bordough </StyledTitle>
      <StyledParagraph>
        I am Architect with Master degree and with 5 years of experience in
        interior design.
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
