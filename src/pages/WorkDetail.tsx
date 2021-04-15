import React, { FC } from 'react'
import { RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps<{id: string}> & {

} 

const WorkDetail: FC<Props> = (props) => {
  return (
    <div>
      {props.match.params.id}
    </div>
  )
}

export default WorkDetail
