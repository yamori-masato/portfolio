import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { tab } from 'media'

// TODO: 汎用化
const StyledUl = styled.nav<{isMobile: boolean}>`
  display: flex;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  li {
    margin-left: 4rem;
    a {
      position: relative;
      padding-bottom: 4px;
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
        width: 80%;
      }
    }
  }

  ${({ isMobile }) => isMobile ? mobileStyle : pcStyle}
`

const pcStyle = css`
  flex-direction: row;
  font-weight: 600;
  font-size: 1.6rem;
  ${tab`
    font-size: 1.4rem;
  `}
`

const mobileStyle = css`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.6rem;
  li {
    margin: 1.4rem;
    a {
      padding-bottom: 6px;
    }
  }
`


type Props = {
  isMobile: boolean
  onLinkClick?: () => void
}

const NavList: FC<Props> = ({ isMobile, onLinkClick }) => {
  const paths = [
    { text: "TOP", path: "/" },
    { text: "WORKS", path:  "/works" },
    { text: "CONTACT", path: "/contact" },
  ]

  return (
    <StyledUl isMobile={isMobile}>
      {paths.map((v) => (
        <li>
          <Link
            to={v.path}
            className="cursor"
            onClick={onLinkClick}
          >
            {v.text}
          </Link>
        </li>
      ))}
    </StyledUl>
  )
}

export default NavList
