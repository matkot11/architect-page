import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledTitle = styled.h1`
  margin: 3rem 0 1rem 0;
  font-size: ${({ theme }) => theme.fontSize.l};

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 2rem 0;
  }
`;

export const StyledInput = styled.input`
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  border-bottom: 2px solid #000000;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  :focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 30rem;
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 1rem;
  min-height: 15rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: 2px solid #000000;
  border-radius: 5px;

  :focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    width: 30rem;
  }
`;

export const StyledButton = styled.button`
  padding: 0.2rem 0.5rem;
  width: max-content;
  background-color: inherit;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  border: 2px solid #000000;
  border-radius: 5px;
  cursor: pointer;

  :focus {
    outline: none;
  }

  @media only screen and (min-width: ${({ theme }) => theme.size.s}) {
    font-size: 2.5rem;
  }
`;

export const StyledMessage = styled.h1`
  margin: 2rem 0;
  text-align: center;
  font-size: 2.5rem;
`;
