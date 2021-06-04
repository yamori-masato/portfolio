import React, { FC } from 'react'
import styled from 'styled-components'
import YouTube from 'react-youtube'
import Image from './Image'

// TODO: YoutubeでもImageを使いたい
const StyledBase = styled.div`
  width: 100%;
  .wrapper {
    background-color: var(--ui-background);
    position: relative;
    width: 100%;
    margin: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    border-radius: 8px;

    & > * {
      position: absolute;
      width: 100%;
      height: 100%;
      border: none;
    }
  }
`

type Props = {
  image: string
  video?: string
}

const Thumbnail: FC<Props> = (props) => {
  return (
    <StyledBase>
      {
        props.video ? (
          <VideoThumbnail {...props} />
        ) : (
          <ImageThumbnail {...props} />
        )
      }
    </StyledBase>
  )
}

// ----------

const ImageThumbnail: FC<Props> = (props) => {
  return (
    <Image src={props.image} alt="thumbnail"/>
  )
}

// ----------

const VideoThumbnail: FC<Props> = (props) => {
  return (
    <YouTube
      videoId={props.video}
      containerClassName="wrapper"
    />
  )
}

export default Thumbnail
