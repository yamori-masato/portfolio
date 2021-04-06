import React from 'react'
import styled from 'styled-components'
import P5Wrapper from 'react-p5-wrapper'
import sketch from 'sketches/background'

const StyledWrapper = styled.div`
  position: absolute;
  z-index: -1;
  background-color: #000;
  width: 100%;
  overflow-x: hidden;
`

const Background = () => {
  return (
    <StyledWrapper>
      <P5Wrapper sketch={sketch}/>
    </StyledWrapper>
  )
}

export default Background
