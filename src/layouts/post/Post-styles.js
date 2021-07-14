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
  width: 90vw;
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
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledParagraph = styled.p`
  margin: 3rem 1rem 3rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
