import React, { FC } from 'react'
import styled from 'styled-components'

const StyledContainer = styled.div`
  h2 {
    display: inline-block;
    position: relative;
    color: #fff;
    font-size: 1.8rem;
    user-select: none;

    :after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: -15px;
      transform: translateX(-50%);
      width: 58%;
      height: 1px;
      background-color: yellow;
      border-radius: 2px;
    }
  }
`

type Props = {
  text: string
}


const Title: FC<Props> = ({text}) => {
  return (
    <StyledContainer>
      <h2>{text}</h2>
    </StyledContainer>
  )
}

export default Title
