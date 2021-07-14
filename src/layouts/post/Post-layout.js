import React from 'react';
import { graphql } from 'gatsby';
import {
  PreviewInfoLabel,
  StyledImage,
  StyledInnerWrapper,
  StyledParagraph,
  StyledWrapper,
} from './Post-styles';

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
