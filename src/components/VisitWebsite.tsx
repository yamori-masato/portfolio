import React, { FC } from 'react'
import { ReactSVG } from 'react-svg'
import Link from './Link'
import icon from 'assets/images/link.svg'

type Props = {
  url: string
}

// TODO: snsDataに依存しないようにしたい
const VisitWebsite: FC<Props> = ({ url }) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor"
    >
      <ReactSVG
        src={icon}
        style={{display: 'flex', alignItems: 'center', height: '10px'}}
      />
      <div>Visit website</div>
    </Link>
  )
}

export default VisitWebsite
