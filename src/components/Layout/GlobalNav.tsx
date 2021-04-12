import React, { FC } from 'react'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'
import { useMediaQuery } from 'hooks/useMediaQuery'
import DrawerMenu from 'components/DrawerMenu'

const StyledUl = styled.nav`
  font-weight: 600;
  font-size: 1.6rem;
  ${tab`
    font-size: 1.4rem;
  `}
  ${sp`
    font-size: 1.2rem;
  `}

  display: flex;
  list-style: none;
  padding: 0;
  li {
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
`

const ListNav = () => (
  <StyledUl>
    <li><a href="#" className="cursor">TOP</a></li>
    <li><a href="#" className="cursor">WORKS</a></li>
    <li><a href="#" className="cursor">CONTACT</a></li>
  </StyledUl>
)

const GlobalNav = () => {
  const mq = useMediaQuery()
  return (
    <nav>
      { mq.isSp ? <DrawerMenu /> : <ListNav /> }
    </nav>
  )
}

export default GlobalNav
