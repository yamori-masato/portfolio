import React, { FC } from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'
import GlobalNav from './GlobalNav'

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

  padding: 0 3.4rem;
  height: calc(3.4rem * 2.6);

  ${tab`
    padding: 0 2.8rem;
    height: calc(2.8rem * 2.7);
  `}

  ${sp`
    padding: 0 2.2rem;
    height: calc(2.2rem * 3.6);
  `}
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
