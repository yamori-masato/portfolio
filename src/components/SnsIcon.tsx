import React, { FC } from "react";
import styled from "styled-components";
import Icon from "./Icon";

const StyledLink = styled.a<{ background?: string | number }>`
  display: block;
  border-radius: 50%;
  border: solid 2px #434343;
  transition: 0.5s;
  opacity: 0.9;

  &:hover {
    border: solid 2px #7d7d7d;
  }
`;

export type TSns = {
  name: string;
  link: string;
  svg: {
    url: string;
    style?: React.CSSProperties;
  };
};

const SnsIcon: FC<TSns> = ({ name, link, svg }) => {
  return (
    <StyledLink
      href={link}
      background={svg.style?.background}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor"
    >
      <Icon
        svg={svg.url}
        style={svg.style}
        size={34}
        background={svg.style?.background}
      />
    </StyledLink>
  );
};

export default SnsIcon;
