import React from 'react'
import styled from 'styled-components'
import ScrollNav from './ScrollNav'

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  user-select: none;
  margin-bottom: 10vh;

  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    text-align: center;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 3rem;
    letter-spacing: 40px;
    user-select: none;
  }

  a {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translateX(-50%);
  }
`

const FirstView = () => {
  return (
    <StyledSection>
      <h1>YAMORI MASATO</h1>
      <ScrollNav text="about me!"/>
    </StyledSection>
  )
}

export default FirstView