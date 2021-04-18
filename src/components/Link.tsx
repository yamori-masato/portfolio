import React, { FC } from 'react'
import styled from 'styled-components'

const StyledLink = styled.a`
  display: flex;
  align-items: center;

  background-color: var(--text-background);
  color: #ffffff;
  border: solid 1px #696969;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 1.4rem;

  & > * {
    margin-right: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
`

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { }

const Link: FC<Props> = (props) => {
  return (
    <StyledLink {...props}>
      {props.children}
    </StyledLink>
  )
}

export default Link
