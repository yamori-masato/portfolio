import React from "react";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";
import UnderlinedText from "components/UnderlinedText";

const StyledContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const StyledContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;

  color: #fff;
  font-size: 16px;
  word-break: break-word;
  overflow-wrap: break-word;
  word-wrap: break-word;

  a {
    border: none;
    &:hover {
      border-bottom: solid 1px white;
    }
  }
  p {
    letter-spacing: 0.12em;
  }
`;

const Contact = () => {
  return (
    <PageWrapper>
      <StyledContainer>
        <UnderlinedText as="h2">CONTACT</UnderlinedText>
        <StyledContent>
          <p>ご連絡は下記gmailまでお願いします</p>
          <a href="mailto:yamorimasato@gmail.com" className="cursor">
            yamorimasato@gmail.com
          </a>
        </StyledContent>
      </StyledContainer>
    </PageWrapper>
  );
};

export default Contact;
