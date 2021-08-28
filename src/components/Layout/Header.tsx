import React, { FC } from "react";
import styled from "styled-components";
import GlobalNav from "./GlobalNav";
import { HEADER_HEIGHT, HEADER_MAX_WIDTH } from "constants/styles";
import { useHistory } from "react-router-dom";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${HEADER_HEIGHT}px;
  position: fixed;
  z-index: 1;
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
  user-select: none;
`;

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${HEADER_MAX_WIDTH}px;
  padding: 0 2.2rem;
  margin: 0 auto;
`;

const StyledLogo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
  color: #fff;
`;

type Props = {
  onLogoClick: () => void;
};

const Header: FC<Props> = ({ onLogoClick }) => {
  const history = useHistory();
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo
          className="cursor"
          onClick={() => {
            if (history.location.pathname !== "/") {
              history.push("/");
            }
            onLogoClick();
          }}
        >
          Portfolio
        </StyledLogo>
        <GlobalNav />
      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
