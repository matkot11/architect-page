import React from 'react';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import styled from 'styled-components';

export const query = graphql`
  query queryArticle($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      paragraph
      featuredImage {
        fluid {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
    }
  }
`;

const StyledWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledImage = styled(Image)`
  width: calc(100vw - 12rem);
  height: 50vh;
  border-radius: 5px;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding: 5px 1.5rem;
  border-radius: 5px;
  margin: 0 auto;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

const StyledParagraph = styled.p`
  margin-top: 3rem;
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.m};
`;

const PostLayout = ({ data }) => (
  <StyledWrapper>
    <StyledInnerWrapper>
      <StyledImage
        fluid={data.datoCmsArticle.featuredImage.fluid}
        alt={data.datoCmsArticle.title}
      />
      <PreviewInfoLabel>
        <h2>{data.datoCmsArticle.title}</h2>
      </PreviewInfoLabel>
    </StyledInnerWrapper>
    <StyledParagraph>{data.datoCmsArticle.paragraph}</StyledParagraph>
  </StyledWrapper>
);

export default PostLayout;
