import React from 'react';
import {
  PreviewWrapper,
  PreviewInfoLabel,
  StyledImage,
} from './ArticlePreview-styles';

const ArticlePreview = ({ title, image, slug }) => (
  <PreviewWrapper to={`/blog/${slug}`}>
    <StyledImage fluid={image} />
    <PreviewInfoLabel>
      <h2>{title}</h2>
    </PreviewInfoLabel>
  </PreviewWrapper>
);

export default ArticlePreview;
