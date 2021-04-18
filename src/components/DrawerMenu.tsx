import React, { FC, useState } from 'react'
import styled, { css } from 'styled-components'
import Burger from './Burger'
import NavList from './NavList'

const StyledWrapper = styled.div<{isOpen: boolean}>`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 500ms ease-out;
  display: flex;
  align-items: center;
  justify-content: center;

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

const StyledTouch = styled.div`
  position: absolute;
  padding: 36px;
  right: 0;
  top: 0;
`

const DrawerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <StyledWrapper
        isOpen={isOpen}
      >
        <NavList
          isMobile={true}
          onLinkClick={ () => setIsOpen(false) }
        />
      </StyledWrapper>
      <Burger
        onClick={()=>{}}
        isOpen={isOpen}
      />
      <StyledTouch onClick={() => { setIsOpen(prev => !prev) }} />
    </div>
  )
}

export default DrawerMenu
