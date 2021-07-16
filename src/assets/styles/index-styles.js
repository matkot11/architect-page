import styled from 'styled-components';
import Image from 'gatsby-image';

export const StyledWrapper = styled.div`
  display: flex;
  height: calc(100vh - 6.9rem);

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    height: calc(100vh - 8.9rem);
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-left: auto;
  margin-right: 1rem;

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    margin: 0;
    width: 53%;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    width: 63%;
  }
`;

export const StyledTitle = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.l};
  width: min-content;
  text-align: end;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    font-size: 5.7rem;
  }
`;

export const StyledParagraph = styled.p`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  text-align: end;
  width: 80%;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 60%;
    font-size: 2.5rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 55%;
  }
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

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 45%;
    opacity: 1;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.l}) {
    width: 35%;
  }
`;
