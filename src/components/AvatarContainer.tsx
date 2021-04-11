import React from 'react'
import styled from 'styled-components'
import Avatar from './Avatar'
import SnsIconList from './SnsIconList'
import { snsData } from 'snsData'
import headShot from 'assets/images/headShot.jpg'

const StyledAvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  & > *:last-child {
    /* margin-top: 1.2rem; */
  }
`

const AvatarContainer = () => {
  const name = "Yamori Masato"
  return (
    <StyledAvatarContainer>
      <Avatar
        src={headShot}
        name={name}
      />
      <SnsIconList data={snsData}/>
    </StyledAvatarContainer>
  )
}

export default AvatarContainer
