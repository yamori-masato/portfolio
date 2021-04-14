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
  className?: string
  as?: React.ElementType
}


const UnderlinedText: FC<Props> = ({children, className, as='p'}) => {
  return (
    <StyledTitle className={className} as={as}>
      {children}
    </StyledTitle>
  )
}

export default UnderlinedText
