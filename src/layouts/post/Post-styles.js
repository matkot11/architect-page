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
  border-radius: 5px;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 80vw;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    height: 40rem;
    width: 45vw;
  }
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
    font-size: 2.5rem;

    @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }
  }
`;

export const StyledParagraph = styled.p`
  margin: 3rem 1rem 3rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.s};

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    margin: 5rem 0 3rem 0;
    width: 90vw;
    font-size: 2.2rem;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.m}) {
    width: 50vw;
  }
`;
