import React, { FC, useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import Background from './Background'
import Div100vh from 'react-div-100vh'

const StyledMain = styled.main`
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`

const Layout: FC = ({ children }) => {
  const [count, setCount] = useState<number>(0)
  const onLogoClick = () => { setCount(prev => prev+1) }
  return (
    <div>
      <Header onLogoClick={onLogoClick}/>
      <Background count={count}/>
      <StyledMain id="scroll-container">
        <Div100vh>
          {children}
        </Div100vh>
      </StyledMain>
    </div>
  )
}

export default Layout
