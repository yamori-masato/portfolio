import React, { FC, useEffect, useState } from 'react'
import PageWrapper from './PageWrapper'
import styled from 'styled-components'
import { pc, sp, tab } from 'media'
import { headerHeight } from 'constants/styles'
import works from 'data/works'
import { RouteComponentProps } from 'react-router-dom'
import Thumbnail from 'components/Thumbnail'

// TODO: Workと共通化
const StyledContainer = styled.div`
  min-height: 100%;
  width: 70%;
  max-width: 1000px;
  margin: 0 auto;
  padding-top: calc(${headerHeight}px + 20px);
  ${sp`
    padding-top: calc(${headerHeight}px + 20px);
  `}
  display: flex;
  align-items: center;
  flex-direction: column;
`

type Props = RouteComponentProps<{id: string}> & { } 

const WorkDetail: FC<Props> = (props) => {
  const [work, setWork] = useState<schema.Work | undefined>(undefined)
  useEffect(() => {
    const selected = works.find(w => (w.id.toString() === props.match.params.id))
    setWork(selected)
  }, [props.match.params.id])

  return work ? (
    <PageWrapper>
      <StyledContainer>
        <Thumbnail image={work.thumbnail} video={work?.video}/>
      </StyledContainer>
    </PageWrapper>
  ) : (<></>)
}

export default WorkDetail
