import React, { FC } from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'
import GlobalNav from './GlobalNav'
import { headerHeight } from 'constants/styles'

const StyledHeader = styled.div`
  background: linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.2));
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #fff;
  user-select: none;

  padding: 0 2.2rem;
  height: ${headerHeight}px;
`

const StyledLogo = styled.a`
  font-size: 1.6rem;
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo href="#" className="cursor">
        Portfolio
      </StyledLogo>
      <GlobalNav />
    </StyledHeader>
  )
}

export default Header
