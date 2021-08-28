import React, { FC } from "react";
import styled from "styled-components";
import SnsIcon, { TSns } from "./SnsIcon";

const StyledContainer = styled.div`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;

    li {
      flex: 1;
      padding-left: 2rem;

      &:first-child {
        padding-left: 0;
      }
    }
  }
`;

type Props = {
  data: TSns[];
};

const SnsIconList: FC<Props> = ({ data }) => {
  return (
    <StyledContainer>
      <ul>
        {data.map((v, i) => (
          <li key={i.toString()}>
            <SnsIcon name={v.name} link={v.link} svg={v.svg} />
          </li>
        ))}
      </ul>
    </StyledContainer>
  );
};

export default SnsIconList;
