import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const StyledLink = styled.a<{background?: string | number}>`
  display: block;
  width: 3.4rem;
  height: 3.4rem;
  border-radius: 50%;
  overflow: hidden;
  background: ${({ background }) => background ? background : 'none'};
  border: solid 2px #434343;
  transition: .5s;
  opacity: 0.9;
  
  &:hover {
    border: solid 2px #7d7d7d;
  }

  & > div {
    width: 100%;
    height: 100%;
  }
`

export type TSns = {
  name: string
  link: string
  svg: {
    url: string
    style?: React.CSSProperties
  }
}

const SnsIcon: FC<TSns> = ({ name, link, svg }) => {
  return (
    <StyledLink href={link} background={svg.style?.background} target="_blank" rel="noopener noreferrer">
      <ReactSVG
        src={svg.url}
        style={svg.style}
      />
    </StyledLink>
  )
}

export default SnsIcon
