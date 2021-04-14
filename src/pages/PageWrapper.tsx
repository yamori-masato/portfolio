import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'

// TODO: react-router-domのSwitchに組み込みたい
const StyledWrapper = styled.div<{ visible: boolean }>`
  transition: all 1s;
  opacity: ${({ visible }) => visible ? 1 : 0};
  height: 100%;
  width: 100%;
`

const PageWrapper: FC = ({ children }) => {
  const [visible, setVisible] = useState(false)
  const timeout = 100 // TODO: useEffectが初期render後に行われるのに、タイムアウトを設けないと機能しない理由を調査
  useEffect(() => {
    setTimeout(() => {
      setVisible(true)
    }, timeout)
  }, [])
  return (
    <StyledWrapper visible={visible}>
      {children}
    </StyledWrapper>
  )
}

export default PageWrapper
