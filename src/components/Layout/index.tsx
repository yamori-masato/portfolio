import React, { FC } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Background from './Background'

const StyledMain = styled.main`
  height: 100vh;
  overflow: auto;
`

const Layout: FC = ({children}) => {
  return (
    <div>
      <Header />
      <Background />
      <StyledMain>
        {children}
      </StyledMain>
    </div>
  )
}

export default Layout
