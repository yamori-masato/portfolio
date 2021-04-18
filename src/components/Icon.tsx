import React, { FC } from 'react'
import styled from 'styled-components'
import { ReactSVG } from 'react-svg'

const StyledWrapper = styled.div<{size: number}>`
  border-radius: 50%;
  overflow: hidden;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`

type Props = {
  svg: string
  size: number
  style?: React.CSSProperties
}

const Icon: FC<Props> = ({svg, size, style}) => {
  return (
    <StyledWrapper size={size}>
      <ReactSVG
        src={svg}
        style={style}
      />
    </StyledWrapper>
  )
}

export default Icon
