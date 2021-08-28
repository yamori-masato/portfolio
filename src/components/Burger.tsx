import React, { FC } from "react";
import styled, { css } from "styled-components";

const StyledContainer = styled.div<{ isOpen: boolean }>`
  position: relative;
  width: 30px;
  height: 20px;

  span {
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: #fff;
    border-radius: 10px;
    transition: all 300ms ease-out;
    opacity: 1;

    &:nth-child(1) {
      top: 0;
    }
    &:nth-child(2) {
      top: 50%;
      transform: translateY(-50%);
    }
    &:nth-child(3) {
      bottom: 0;
    }

    ${({ isOpen }) =>
      isOpen &&
      css`
        &:nth-child(1) {
          transform: translateY(calc(10px - 50%)) rotate(45deg) scale(0.9);
        }
        &:nth-child(2) {
          display: none;
        }
        &:nth-child(3) {
          transform: translateY(calc(-10px + 50%)) rotate(-45deg) scale(0.9);
        }
      `}
  }
`;

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

const Burger: FC<Props> = (props) => {
  return (
    <StyledContainer onClick={props.onClick} isOpen={props.isOpen}>
      <span></span>
      <span></span>
      <span></span>
    </StyledContainer>
  );
};

export default Burger;
