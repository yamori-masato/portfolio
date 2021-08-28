import React from "react";
import styled from "styled-components";
import PageWrapper from "./PageWrapper";
import FirstView from "components/FirstView";
import Introduction from "components/Introduction";

const StyledContainer = styled.div`
  min-height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    margin-bottom: 15vh;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const Top = () => {
  return (
    <PageWrapper>
      <StyledContainer>
        <FirstView />
        <Introduction />
      </StyledContainer>
    </PageWrapper>
  );
};

export default Top;
