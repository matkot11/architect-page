import styled from 'styled-components';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

export const PreviewWrapper = styled(Link)`
  margin-top: 5rem;
  display: block;
  position: relative;

  background-image: url(${({ background }) => background});
  background-size: cover;
  border-radius: 5px;

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 50rem;
    height: 34rem;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 5px;
`;

export const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
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
