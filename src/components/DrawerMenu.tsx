import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import Burger from './Burger'

const StyledWrapper = styled.div<{isOpen: boolean}>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 500ms ease-out;

  ${({ isOpen }) => isOpen
    ? css`
      opacity: 1;
      visibility: visible;
    `
    : css`
      opacity: 0;
      visibility: hidden;
    `
  }
`

const StyledUl = styled.ul`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  list-style: none;
  margin: 0;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-size: 2.6rem;
  li {
    margin: 1.4rem;
  }
`

const ListNav = () => (
  <StyledUl>
    <li><a href="#" className="cursor">TOP</a></li>
    <li><a href="#" className="cursor">WORKS</a></li>
    <li><a href="#" className="cursor">CONTACT</a></li>
  </StyledUl>
)

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <StyledWrapper
        isOpen={isOpen}
      >
        <ListNav />
      </StyledWrapper>
      <Burger
        onClick={() => { setIsOpen(prev => !prev) }}
        isOpen={isOpen}
      />
    </div>
  )
}

export default DrawerMenu
