import React from "react";
import styled from "styled-components";
import { sp, tab } from "media";
import Card from "./Card";
import works from "data/works";

const StyledGrid = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  max-width: 1000px;

  width: 80%;
  grid-column-gap: 25px;
  grid-row-gap: 30px;
  ${tab`
    width: 90%;
    grid-column-gap: 16px;
    grid-row-gap: 18px;   
  `}
  ${sp`
    width: 90%;
	  grid-template-columns: repeat(1, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 15px;
  `}
`;

const CardList = () => {
  return (
    <StyledGrid>
      {works.map((v, i) => (
        <li key={i.toString()}>
          <Card
            id={v.id}
            title={v.title}
            genre={v.genre}
            thumbnail={v.thumbnail.image}
          />
        </li>
      ))}
    </StyledGrid>
  );
};

export default CardList;
