import React, { FC, useEffect, useState } from 'react'
import PageWrapper from './PageWrapper'
import styled from 'styled-components'
import { pc, sp } from 'media'
import useMediaQuery from 'hooks/useMediaQuery'
import { HEADER_HEIGHT } from 'constants/styles'
import works from 'data/works'
import { RouteComponentProps } from 'react-router-dom'
import Thumbnail from 'components/Thumbnail'
import WorkAbout from 'components/WorkAbout'
import WorkContent from 'components/WorkContent'

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 85%;
  ${sp`
    width: 90%;  
 `}
  min-height: 100%;
  margin: 0 auto;

  padding-top: calc(${HEADER_HEIGHT}px + 20px);
  ${pc`
    padding-top: calc(${HEADER_HEIGHT}px + 40px);
  `}
`

// TODO: Workと共通化
const StyledMainContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;

  width: 100%;
  ${pc`
    width: calc(100% - 310px);
  `}
`

const StyledSideContainer = styled.aside`
  width: 280px;
  z-index: 1;
`

type Props = RouteComponentProps<{id: string}> & { } 

const WorkDetail: FC<Props> = (props) => {
  const [work, setWork] = useState<schema.Work | undefined>(undefined)
  const mq = useMediaQuery()
  useEffect(() => {
    const selected = works.find(w => (w.id.toString() === props.match.params.id))
    setWork(selected)
  }, [props.match.params.id])

  return work ? (
    <PageWrapper>
      <StyledContainer>
        {mq.isPc && (
          <StyledSideContainer>
            <WorkAbout {...work}/>
          </StyledSideContainer>
        )}
        <StyledMainContainer>
          <Thumbnail image={work.thumbnail.image} video={work.thumbnail.youtubeId} />
          <WorkContent {...work}/>
        </StyledMainContainer>
      </StyledContainer>
    </PageWrapper>
  ) : (<></>)
}

export default WorkDetail
