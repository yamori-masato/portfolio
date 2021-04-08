import React, { FC } from 'react'
import styled from 'styled-components'

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

const StyledNav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      font-weight: 600;
      font-size: 1.6rem;
      margin-left: 4rem;
      position: relative;

      a {
        position: relative;
        padding-bottom: 2px;
        &:before {
          content: "";
          position: absolute;
          top: 100%;
          width: 0;
          left: 50%;
          transform: translate(-50%, 0);
          border-bottom: solid 1px yellow;
          transition: all 0.3s;
        }
        &:hover:before {
          width: 3rem;
        }
      }
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
          <li><a href="#">TOP</a></li>
          <li><a href="#">WORKS</a></li>
          <li><a href="#">CONTACT</a></li>
        </ul>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
