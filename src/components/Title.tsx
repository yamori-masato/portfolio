import React, { FC } from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'

const StyledContainer = styled.div`
  h2 {
    display: inline-block;
    position: relative;
    color: #fff;
    user-select: none;
    font-size: 1.8rem;
    ${sp`
      font-size: 1.6rem;
    `}

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
