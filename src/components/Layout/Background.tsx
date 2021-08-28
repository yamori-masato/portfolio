import React, { FC } from "react";
import styled from "styled-components";
import P5Wrapper from "react-p5-wrapper";
import sketch from "sketche";

const StyledWrapper = styled.div`
  position: absolute;
  z-index: -1;
  background-color: #000;
  width: 100%;
  overflow-x: hidden;
`;

type Props = {
  count: number;
};

const Background: FC<Props> = ({ count }) => {
  return (
    <StyledWrapper>
      <P5Wrapper sketch={sketch} count={count} />
    </StyledWrapper>
  );
};

export default Background;
