import React from 'react'
import styled from 'styled-components'
import { Element } from 'react-scroll'
import Title from './Title'
import AvatarContainer from './AvatarContainer'
import Profile from './Profile'

const StyledSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
`

const StyledContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 22%;
  left: 50%;
  transform: translateX(-50%);
`

const StyledContent = styled.div`
  margin-top: 50px;
  min-height: 50vh;
  width: 80%;
  max-width: 1200px;
  /* background-color: rgba(255, 255, 255, 0.05); */
  background-color: rgba(15, 15, 15, 0.7);

  display: flex;

  & > div:first-child {
    flex: 3
  }
  & > div:last-child {
    flex: 7
  }
`

const Introduction = () => {
  return (
    <Element name="introduction">
      <StyledSection>
        <StyledContainer>
          <Title text="ABOUT ME" />
          <StyledContent>
            <AvatarContainer />
            <Profile />
          </StyledContent>
        </StyledContainer>
      </StyledSection>
    </Element>
  )
}

export default Introduction
