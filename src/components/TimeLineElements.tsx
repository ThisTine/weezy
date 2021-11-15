import { FC } from "react";
import { AiFillAlert,AiOutlineFieldTime} from "react-icons/ai"
import { VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import { TimelineElementProps  } from "../etc/types";


const TimeLineElement:FC<TimelineElementProps> = ({title,description,type,subtitle,time})=>{
    return(
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={ type === "primary" ? { background: '#b33b10', color: '#fff' } :  { background: '#10b3a0', color: 'white' }}
        contentArrowStyle={ type === "primary" ? { borderRight: '7px solid  #b33b10' } : { borderRight: '7px solid  #10b3a0' } }
        date={(new Date(time)).toLocaleString() || ""}
        dateClassName="black"
        iconStyle={type === "primary" ? { background: '#b33b10', color: '#fff' } : { background: 'gray', color: '#fff' }}
        icon={type === "primary" ? <AiFillAlert/> : <AiOutlineFieldTime/> }
      >
        <h3 className="vertical-timeline-element-title">{title}</h3>
        {subtitle && <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>}
        {description && <p>
            {description}
        </p>}
      </VerticalTimelineElement>
    )
}

export default TimeLineElement