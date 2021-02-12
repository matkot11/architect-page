import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import slugify from 'slugify';
import ArticlePreview from '../components/articlePreview/ArticlePreview';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-evenly;
  width: 80%;
  margin: auto;
  margin-top: 5rem;

  a {
    :nth-child(2n) {
      align-self: flex-end;
    }
  }
`;

const Blog = ({ data }) => (
  <StyledWrapper>
    {data.allDatoCmsArticle.nodes.map((item) => (
      <ArticlePreview
        key={item.title}
        title={item.title}
        image={item.featuredImage.fluid}
        slug={slugify(item.title, { lower: true })}
      />
    ))}
  </StyledWrapper>
);

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        featuredImage {
          fluid {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`;

export default Blog;
