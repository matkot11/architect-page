import styled from 'styled-components';

const StyledWrapper = styled.div`
  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    margin: auto;
    width: 80vw;

    a {
      margin: 2rem 0;
      :nth-child(2n) {
        align-self: flex-end;
      }
    }
  }
`;

export default StyledWrapper;
