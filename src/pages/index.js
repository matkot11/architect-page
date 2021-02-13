import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const StyledWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 18rem);
`;

const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 60%;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    width: 100vw;
    align-items: center;
  }
`;

const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  width: min-content;
  text-align: end;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  width: 38rem;
  text-align: end;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.m}) {
    width: auto;
    margin: 0 0.5rem;
  }
`;

const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 40%;
  height: 100vh;
  min-height: calc(100vh - 18rem);
  object-fit: cover;
  z-index: -1;

  @media only screen and (max-width: ${({ theme }) => theme.size.xxl}) {
    width: 100vw;
    opacity: 0.5;
    min-height: 100vh;
  }

  @media only screen and (max-height: 500px) {
    display: none;
  }
`;

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
