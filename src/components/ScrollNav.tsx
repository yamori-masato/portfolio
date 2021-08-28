import React, { FC } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 50px;
  padding: 10px 20px;
  cursor: pointer;
`;

const StyledText = styled.span`
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 0.2rem;
`;

const StyledTriangle = styled.div`
  @keyframes down {
    0% {
      opacity: 0;
      transform: translate(-50%, -50%) rotate(135deg);
    }

    50% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      transform: translate(-50%, calc(-50% + 10px)) rotate(135deg);
    }
  }

  position: relative;
  padding: 10px;
  ::before {
    content: "";
    width: 14px;
    height: 14px;
    border-top: solid 2px yellow;
    border-right: solid 2px yellow;
    position: absolute;
    top: 50%;
    left: 50%;
    transform-origin: center center;
    animation: down 3s infinite;
  }
`;

type Props = {
  text: string;
};

const ScrollNav: FC<Props> = ({ text }) => {
  return (
    <Link
      to="introduction"
      spy={true}
      smooth={true}
      containerId="scroll-container"
    >
      <StyledContainer className="cursor">
        <StyledText>{text}</StyledText>
        <StyledTriangle />
      </StyledContainer>
    </Link>
  );
};

export default ScrollNav;
