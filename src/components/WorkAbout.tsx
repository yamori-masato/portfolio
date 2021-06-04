import React, { FC } from 'react'
import styled from 'styled-components'
import { HEADER_HEIGHT } from 'constants/styles'
import ViewSourceLink from './ViewSourceLink'
import VisitWebsite from './VisitWebsite'
import SpeechBalloon from './SpeechBalloon'

const StyledContainer = styled.div`
  position: sticky;
  top: ${HEADER_HEIGHT}px;
`

const StyledOverview = styled.div`
  width: 100%;
  padding: 20px;
  background-color: var(--ui-background);
  border-radius: 8px;
  border: solid 1px var(--box-border-color);
  color: #fff;

  ul {
    display: flex;
    flex-direction: column;
    li {
      display: flex;
      align-items: flex-end;
      margin-bottom: 24px;
      &:last-child {
        margin-bottom: 0;
      }

      & > * {
        margin-left: 0.5em;
        font-size: 1.8rem;
        &:first-child {
          margin-left: 0;
          font-size: 2.0rem;
          font-weight: bold;
        }
      }
    }
  }
`
const StyledTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 2.4rem;
  font-weight: bold;
`

const StyledLinks = styled.div`
  margin-top: 20px;
  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

type Props = schema.Work

const WorkAbout: FC<Props> = (props) => {
  return (
    <StyledContainer>
      <Overview {...props} />
      <Links {...props} />
    </StyledContainer>
  )
}

const Overview: FC<Props> = (props) => {
  return (
    <StyledOverview>
      <StyledTitle>{props.title}</StyledTitle>
      <ul>
        <li>
          <div>Genre:</div>
          <div>{props.genre.join('/')}</div>
        </li>
        <li>
          <div>Role:</div>
          <div>{props.role.join('/')}</div>
        </li>
        <li>
          <div>Skills:</div>
          <div>{props.skills.join('/')}</div>
          <SpeechBalloon keywords={props.keywords}/>
        </li>
        <li>
          <div>Period:</div>
          <div>{props.period}</div>
        </li>
      </ul>
    </StyledOverview>
  )
}

const Links: FC<Props> = ({ urls }) => {
  const repo = urls?.repository
  const site = urls?.site
  return (
    <StyledLinks>
      <ul>
        { site && <li><VisitWebsite url={site} /></li> }
        { repo && <li><ViewSourceLink url={repo} /></li> }
      </ul>
    </StyledLinks>
  )
}

export default WorkAbout
