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
  margin: auto;
  width: 80%;
  margin-top: 5rem;

  a {
    :nth-child(2n) {
      align-self: flex-end;
      margin: 1rem 0;

      @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
        align-self: center;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.size.xl}) {
    align-items: center;
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
