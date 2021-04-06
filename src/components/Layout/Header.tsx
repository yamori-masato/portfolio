import React, { FC } from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
  position: fixed;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  color: #fff;
  user-select: none;
`

const StyledLogo = styled.a`
  font-size: 1.6rem;
  margin: 30px 0;
`

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      font-size: 1.4rem;
      margin-left: 30px;
    }
  }
`

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo href="#">
        Portfolio
      </StyledLogo>
      <StyledNav>
        <ul>
          <li><a href="#">Top</a></li>
          <li><a href="#">Works</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
