import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { tab } from 'media'
import UnderlinedText from './UnderlinedText'

// TODO: 汎用化
const StyledUl = styled.nav<{isMobile: boolean}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  li {
    margin-left: 4rem;
    a {
      display: block;
    }
  }

  ${({ isMobile }) => isMobile && css`
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li {
      margin: 0;
      padding-bottom: 30px;
      &:last-child {
        padding-bottom: 0;
      }
    }
  `}
`

const StyledText = styled(UnderlinedText) <{ isMobile: boolean }>`
  height: 2.2rem;
  &:after {
    transition: all 300ms;
    width: 0;
  }
  &:hover:after {
    width: 60%;
  }

  ${({ isMobile }) => isMobile
    ? css`
      font-size: 2.6rem;
      height: 3.4rem;
    `
    : css`
      font-weight: 600;
      font-size: 1.6rem;
      ${tab`
        font-size: 1.4rem;
      `}
    `
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
      {paths.map((v, i) => (
        <li key={i.toString()}>
          <Link
            to={v.path}
            className="cursor"
            onClick={onLinkClick}
          >
            <StyledText isMobile={isMobile}>{v.text}</StyledText>
          </Link>
        </li>
      ))}
    </StyledUl>
  )
}

export default NavList
