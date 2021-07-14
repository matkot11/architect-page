import React from 'react';
import { graphql } from 'gatsby';
import slugify from 'slugify';
import ArticlePreview from '../components/articlePreview/ArticlePreview-component';
import StyledWrapper from '../assets/styles/blog-styles';

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
