import React from 'react'
import PageWrapper from './PageWrapper'
import styled from 'styled-components'
import { sp } from 'media'
import { headerHeight } from 'constants/styles'
import UnderlinedText from 'components/UnderlinedText'
import CardList from 'components/CardList'

const StyledContainer = styled.div`
  min-height: 100%;
  margin: 0 auto;
  padding-top: calc(${headerHeight}px + 100px);
  ${sp`
    padding-top: calc(${headerHeight}px + 20px);
  `}
  display: flex;
  align-items: center;
  flex-direction: column;

  & > * {
    &:last-child {
      margin: 50px 0;
    }
  }
`

const StyledTitle = styled(UnderlinedText)`
  font-size: 2rem;
  ${sp`
    font-size: 1.6rem;
  `}
  height: 32px;
`

const Works = () => {
  return (
    <PageWrapper>
      <StyledContainer>
        <StyledTitle forwardedAs="h1">WORKS</StyledTitle>
        <CardList />
      </StyledContainer>
    </PageWrapper>
  )
}

export default Works
