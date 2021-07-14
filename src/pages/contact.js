import React, { useState } from 'react';
import {
  StyledButton,
  StyledForm,
  StyledInput,
  StyledMessage,
  StyledTextarea,
  StyledTitle,
  StyledWrapper,
} from '../assets/styles/contact-styles';

const Contact = () => {
  const [send, isSend] = useState(false);

  return (
    <StyledWrapper>
      {!send ? (
        <>
          <StyledTitle>Get in touch</StyledTitle>
          <StyledForm onSubmit={() => isSend(true)}>
            <StyledInput type="text" placeholder="Name" required />
            <StyledInput type="email" placeholder="Email" required />
            <StyledTextarea placeholder="Message" required />
            <StyledButton type="submit">Send</StyledButton>
          </StyledForm>
        </>
      ) : (
        <>
          <StyledMessage>Thank you for message</StyledMessage>
          <StyledButton onClick={() => isSend(false)}>Send again</StyledButton>
        </>
      )}
    </StyledWrapper>
  );
};
export default Contact;
