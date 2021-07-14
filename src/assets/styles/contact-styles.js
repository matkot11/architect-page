import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 12rem);
  width: calc(100vw - 12rem);
`;

export const StyledTitle = styled.h1`
  margin-bottom: 2rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > * {
    margin: 2rem 0%;
  }
`;

export const StyledInput = styled.input`
  min-width: 56rem;
  padding: 1rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  border: none;
  border-bottom: 5px solid #000000;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 1rem;
  min-width: 56rem;
  min-height: 25rem;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  border: 5px solid #000000;
  border-radius: 5px;

  :focus {
    outline: none;
  }
`;

export const StyledButton = styled.button`
  padding: 0.2rem 0.5rem;
  width: max-content;
  background-color: inherit;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.bold};
  border: 5px solid #000000;
  border-radius: 5px;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;

export const StyledMessage = styled.h1`
  margin: 2rem 0;
  font-size: ${({ theme }) => theme.fontSize.zl};
`;
