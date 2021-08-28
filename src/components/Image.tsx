import React, { FC } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 100%;
`;

const StyledImgWrapper = styled.div`
  background-color: var(--ui-background);
  position: relative;
  width: 100%;
  margin: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 8px;
  border: solid 1px rgba(255, 255, 255, 0.1);
`;

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

type Props = React.ImgHTMLAttributes<HTMLImageElement>;

// divで囲むことで親から「& > * { width: 100px }」のように指定できる
const Image: FC<Props> = (props) => {
  return (
    <StyledContainer>
      <StyledImgWrapper>
        <StyledImg {...props} />
      </StyledImgWrapper>
    </StyledContainer>
  );
};

export default Image;
