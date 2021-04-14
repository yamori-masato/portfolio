import React, { FC } from 'react'
import styled from 'styled-components'
import { sp } from 'media'

// TODO: NavListでも使いまわしたい
const StyledTitle = styled.h2`
  display: inline-block;
  position: relative;
  margin: 0;
  user-select: none;

  height: 3rem;
  color: #fff;
  font-size: 1.8rem;
  ${sp`
    font-size: 1.6rem;
  `}

  &:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);

    background-color: yellow;
    border-radius: 2px;
    height: 1px;
    width: 58%;
  }
`

type Props = {
  text: string
  className?: string
}


const UnderlinedText: FC<Props> = ({text, className}) => {
  return (
    <StyledTitle className={className}>
      {text}
    </StyledTitle>
  )
}

export default UnderlinedText
