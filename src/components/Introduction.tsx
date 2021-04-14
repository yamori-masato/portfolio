import React, { useRef, useEffect, useState } from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'
import { Element } from 'react-scroll'
import UnderlinedText from './UnderlinedText'
import AvatarContainer from './AvatarContainer'
import Profile from './Profile'

const StyledSection = styled.section<{offset: number}>`
  display: flex;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  margin-bottom: 20vh;
  box-sizing: content-box;
  padding-top: ${({offset}) => offset}px;
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const StyledContent = styled.div`
  min-height: 50vh;
  background-color: rgba(15, 15, 15, 0.7);
  display: flex;

  & > div:first-child {
    flex: 3;
    ${tab`
      margin-bottom: 30px;
    `}
    ${sp`
      margin-bottom: 30px;
    `}
  }
  & > div:last-child {
    flex: 7
  }

  width: 80%;
  max-width: 1000px;
  padding: 30px;
  margin-top: 50px;
  ${tab`
    flex-direction: column;
  `}
  ${sp`
    width: 90%;
    flex-direction: column;
    margin-top: 30px;
  `} 
`

const Introduction = () => {
  const [offset, setOffset] = useState<number>(0)
  const [vh, setVh] = useState<number>(window.innerHeight)
  const contentRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.clientHeight
      const headerHeight = 66
      const top = (vh - contentHeight) / 2
      const newOffset = top > 0 ? headerHeight - top : headerHeight
      setOffset(() => (
        newOffset > 0
          ? newOffset
          : 0
      ))
    }
  }, [contentRef.current, vh])
  useEffect(() => {
    const onResize = () => {
      const current = window.innerHeight
      if (current !== vh) setVh(current)
    } // TODO: innerHeightが正しいか検証
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <Element name="introduction">
      <StyledSection offset={offset}>
        <StyledContainer ref={contentRef}>
          <UnderlinedText text="ABOUT ME" />
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
