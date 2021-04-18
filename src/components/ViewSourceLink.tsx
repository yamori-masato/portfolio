import React, { FC } from 'react'
import { snsData } from 'data/sns'
import Icon from 'components/Icon'
import Link from './Link'

type Props = {
  url: string
}

// TODO: snsDataに依存しないようにしたい
const ViewSourceLink: FC<Props> = ({ url }) => {
  const github = snsData.find(v => v.name === "github")
  return github ? (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor"
    >
      <Icon
        svg={github.svg.url}
        style={github.svg.style}
        size={16}
        background={github.svg.style?.background}
      />
      <div>View source</div>
    </Link>
  ) : (<></>)
}

export default ViewSourceLink
