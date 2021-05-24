import React, { FC } from 'react'
import styled from 'styled-components'
import GlobalNav from './GlobalNav'
import { HEADER_HEIGHT } from 'constants/styles'
import { useHistory } from 'react-router-dom'

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
  height: ${HEADER_HEIGHT}px;
`

const StyledLogo = styled.div`
  font-size: 1.6rem;
  font-weight: bold;
`

type Props = {
  onLogoClick: () => void
}

const Header: FC<Props> = ({onLogoClick}) => {
  const history = useHistory()
  return (
    <StyledHeader>
      <StyledLogo
        className="cursor"
        onClick={() => {
          if (history.location.pathname !== '/') {
            history.push('/')
          }
          onLogoClick()
        }}
      >
        Portfolio
      </StyledLogo>
      <GlobalNav />
    </StyledHeader>
  )
}

export default Header
