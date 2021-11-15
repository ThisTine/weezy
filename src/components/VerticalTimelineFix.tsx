// @ts-nocheck

import { FC } from "react"
import { VerticalTimeline } from "react-vertical-timeline-component"
const VerticalTimelineFix:FC<{}> = ({children})=>{
   return <VerticalTimeline lineColor="gray">{children}</VerticalTimeline>
}

export default VerticalTimelineFix