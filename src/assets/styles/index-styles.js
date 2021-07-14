import styled from 'styled-components';
import Image from 'gatsby-image';

export const StyledWrapper = styled.div`
  display: flex;
  min-height: calc(100vh - 6.9rem);
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 1rem;
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  width: min-content;
  text-align: end;
`;

export const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: end;
`;

export const StyledImage = styled(Image)`
  position: absolute !important;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  opacity: 0.4;
  object-fit: cover;
  z-index: -1;
`;
