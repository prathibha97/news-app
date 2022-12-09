'use client'
import TimeAgo from 'react-timeago'

interface IProps{
  time:string
}

const LiveTimestamp = ({time}:IProps) => {
  return (
    <TimeAgo date={time}/>
  )
}

export default LiveTimestamp