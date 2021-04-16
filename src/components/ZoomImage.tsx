import React, { FC } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Image from './Image'

type Props = React.ImgHTMLAttributes<HTMLImageElement>

const ZoomImage: FC<Props> = (props) => {
  return (
    <Zoom
      zoomMargin={120}
      overlayBgColorStart={'rgba(0, 0, 0, 0)'}
      overlayBgColorEnd={'rgba(0, 0, 0, 0.75)'}
    >
      <Image {...props}/>
    </Zoom>
  )
}

export default ZoomImage
