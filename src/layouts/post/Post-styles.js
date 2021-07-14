import Image from 'gatsby-image';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledInnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledImage = styled(Image)`
  width: calc(100vw - 12rem);
  height: 50vh;
  border-radius: 5px;
`;

export const PreviewInfoLabel = styled.div`
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

export const StyledParagraph = styled.p`
  margin-top: 3rem;
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.m};
`;