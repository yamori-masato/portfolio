import React, { FC } from 'react'
import styled from 'styled-components'

const StyledImgWrapper = styled.div`
  background-color: var(--ui-background);
  position: relative;
  width: 100%;
  margin: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
  border-radius: 8px;
`

const StyledImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

type Props = React.ImgHTMLAttributes<HTMLImageElement>

// divで囲むことで親から「& > * { width: 100px }」のように指定できる
const Image: FC<Props> = (props) => {
  return (
    <div>
      <StyledImgWrapper>
        <StyledImg {...props} />
      </StyledImgWrapper>
    </div>
  )
}

export default Image
