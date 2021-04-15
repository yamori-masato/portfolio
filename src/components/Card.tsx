import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCard = styled.div`
  color: #fff;
  background-color: rgba(15, 15, 15, 0.7);
  position: relative;
  width: 100%;
  margin: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 8px;

  a {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledImgOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, #dfdfdf, #000);

  opacity: 0;
  transition: 0.3s ease;
  ${StyledCard}:hover & {
    opacity: 0.8;
  }
`

const StyledInfo = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 6%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  opacity: 0;
  transition: 0.3s ease;
  ${StyledCard}:hover & {
    opacity: 0.8;
  }
`

const StyledCaption = styled.div`
  display: flex;
  flex-direction: column;

  figcaption {
    margin: 0;
    font-size: 2.4rem;
    font-weight: bold;
  }
  p {
    margin: 0;
    margin-top: 5px;
    font-size: 1.6rem;
  }
`

type Props = {
  id: number
  thumbnail: string
  title: string
  genre: string
}

const Card: FC<Props> = (props) => {
  return (
    <StyledCard>
      <StyledImg src={props.thumbnail} alt={props.title}/>
      <StyledImgOverlay />
      <StyledInfo>
        <StyledCaption>
          <figcaption>{props.title}</figcaption>
          <p>{props.genre}</p>
        </StyledCaption>
      </StyledInfo>
      <Link to={`/works/${props.id}`} className="cursor"/>
    </StyledCard>
  )
}

export default Card
