import React, { FC } from 'react'
import styled from 'styled-components'
import { headerHeight } from 'constants/styles'

const StyledContainer = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--ui-background);
  border-radius: 8px;
  border: solid 1px rgba(255,255,255,0.5);

  position: sticky;
  top: ${headerHeight}px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    li {
      margin-top: 24px;
      color: #fff;
      font-size: 1.8rem;
      span {
        font-size: 2.0rem;
        font-weight: bold;
        padding-right: 0.5em;
      }

      &:first-child {
        margin-top: 0;
        text-align: center;
        font-weight: bold;
        font-size: 2.4rem;
        font-weight: bold;
      }
    }
  }
`

type Props = schema.Work

const WorkAbout: FC<Props> = (props) => {
  return (
    <StyledContainer>
      <ul>
        <li>{props.title}</li>
        <li><span>Genre:</span>{props.genre.join('/')}</li>
        <li><span>Role:</span>{props.role.join('/')}</li>
        <li><span>Skills:</span>{props.skills.join('/')}</li>
        <li><span>Period:</span>{props.period}months</li>
      </ul>
    </StyledContainer>
  )
}

export default WorkAbout
