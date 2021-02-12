import React from 'react';
import styled from 'styled-components';
import Image from 'gatsby-image';
import { Link } from 'gatsby';

const PreviewWrapper = styled(Link)`
  display: block;
  position: relative;
  width: 50rem;
  height: 34rem;
  background-image: url(${({ background }) => background});
  background-size: cover;
  border-radius: 5px;
`;

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: max-content;
  min-height: 4rem;
  background-color: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.white};
  padding: 5px 1.5rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  h2,
  p {
    margin: 5px;
  }
`;

const ArticlePreview = ({ title, image, slug }) => (
  <PreviewWrapper to={`/blog/${slug}`}>
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default ArticlePreview;
