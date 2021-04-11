import React, { FC } from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'
import GlobalNav from './GlobalNav'

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 3.4rem;
  color: #fff;
  user-select: none;
`

const StyledLogo = styled.a`
  font-size: 1.6rem;
  margin: 30px 0;
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo href="#">
        Portfolio
      </StyledLogo>
      <GlobalNav />
    </StyledHeader>
  )
}

export default Header
