import React, { FC } from 'react'
import styled from 'styled-components'
import Icon from './Icon'
import detail from 'assets/images/detail.svg'

const StyledContainer = styled.button`
  appearance: none;
  display: block;
  padding: 0;
  background-color: transparent;
  border: none;
  
  padding-bottom: 1px;

  position: relative;
  width: max-content;
  margin: 0;
  &:hover > :last-child,
  &:focus > :last-child {
    opacity: 1;
    visibility: visible;
  }
`

const StyledTip = styled.div`
  width: 18px;
  height: 18px;
`

const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  margin-top: 10px;
  padding: 8px;
  padding-top: 10px;
  background-color: var(--modal-background);
  border-radius: 4px;
  transition: 200ms ease-in;

  opacity: 0;
  visibility: hidden;

  &:before {
    content: "";
    position: absolute;
    top: -13px;
    left: 50%;
    margin-left: -7px;
    border: 6px solid transparent;
	  border-bottom: 7px solid var(--modal-background);
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StyledModalTitle = styled.p`
  width: 80%;
  text-align: center;
  margin: 0;
  margin-bottom: 15px;
  padding-bottom: 5px;
  border-bottom: solid 1px gray;
  font-size: 1.8rem;
  color: #fff;
`

const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  white-space: nowrap;
  font-size: 1.2rem;
  color: black;
`

const StyledTag = styled.div`
  display: inline-block;
  margin: 0 0.4em 0.6em 0;
  padding: 0.5em 0.6em;
  line-height: 1;

  color: #fff;
  background: transparent;
  border: 1px solid #bebebe;
  border-radius: 2em;
  font-size: 1.3rem;
`

type Props = {
  keywords: string[]
}

const SpeechBalloon: FC<Props> = ({ keywords }) => {
  return (
    <StyledContainer aria-label="open tooltip" aria-describedby="tooltip">
      <StyledTip>
        <Icon
          svg={detail}
          size={18}
          background={"transparent"}
        />
      </StyledTip>
      <MiniModal keywords={keywords}/>
    </StyledContainer>
  )
}

const MiniModal: FC<Props> = ({ keywords }) => {
  return keywords.length !== 0 ? (
    <StyledModal id="tooltip">
      <StyledModalTitle>Keywords</StyledModalTitle>
      <StyledTagContainer>
        {
          keywords.map((v, i) => (
            <StyledTag key={i.toString()}>{v}</StyledTag>
          ))
        }
      </StyledTagContainer>
    </StyledModal>
  ) : (<></>)
}

export default SpeechBalloon
