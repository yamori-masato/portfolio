import React, { FC } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  p {
    color: #fff;
    font-size: 1.4rem;
    margin-bottom: 0;
  }
`

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 100%;
  border-radius: 50%;
  overflow: hidden;
`

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  display: block;
  background-color: gray;
  object-fit: cover;
  transform: scale(1.1);
`

type Props = {
  src: string,
  name: string
}

const Avatar: FC<Props> = ({src, name}) => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledImg src={src} alt="avatar" />
      </StyledWrapper>
      <p>{name}</p>
    </StyledContainer>
  )
}

export default Avatar
