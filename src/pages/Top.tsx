import React from 'react'
import styled from 'styled-components'
import Layout from 'components/Layout'
import FirstView from 'components/FirstView'
import Introduction from 'components/Introduction'

const Top = () => {
  return (
    <Layout>
      <FirstView />
      <Introduction />
    </Layout>
  )
}

export default Top
