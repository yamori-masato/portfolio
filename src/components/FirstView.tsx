import React from 'react'
import styled from 'styled-components'
import ScrollNav from './ScrollNav'
import { sp, tab } from 'media'

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
  margin-bottom: 10vh;

  h1 {
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 3rem;
    letter-spacing: 40px;
    text-indent: 40px;
    user-select: none;
    ${tab`
      letter-spacing: 3.3vw;
      text-indent: 3.3vw;
      font-size: 2.8rem;
    `}
    ${sp`
      letter-spacing: 3.3vw;
      text-indent: 3.3vw;
      font-size: 1.8rem;
    `}
  }

  a {
    position: absolute;
    font-size: 3rem;
    color: white;
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
