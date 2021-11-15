import { Dispatch, SetStateAction } from "react"
import { User, Work } from "../API"



export interface  TextInputBoxProps{
    id:string,
    question: string,
    placeholder: string,
    forward: (value:ProjDetailInterface)=>void,
    back: (value:ProjDetailInterface)=>void,
    isback: boolean,
    type?:string,
    isrequire?:boolean,
    value?: ProjDetailInterface
}
export interface SelectInputBoxProps extends TextInputBoxProps  {
    choices: string[],
    isother:boolean
}

export interface SettingModelProps {
    type:string|null,
    onClose: ()=> void, 
}

export interface EditWorkModelProps extends SettingModelProps{
    currentvalue?: Work,
    setisgetnewdata?: Dispatch<SetStateAction<boolean>>
}

export type Bagedcolortype = "blue" | "cyan" | "gray" | "green" | "orange" | "pink" | "purple" | "red" | "teal" | "yellow" | "whiteAlpha" | "blackAlpha" | "linkedin" | "facebook" | "messenger" | "whatsapp" | "twitter" | "telegram"

export type ProgressStatus = "desigining" | "developing" | "done" | "reviewing"
export type ProgressDetailStatus = "draft" | "inprogress" | "done" | "in review"

export interface ProgressTabProps {
    name:string,
    detail:ProgressDetailStatus,
    progress:number,
    progressname: ProgressStatus,
    id:string,
    description?:string,
    owner?:User,
    issubmitted?:boolean,
    color?:string
}

export type TimelineType = "primary" | "secondary"

export interface TimelineElementProps {
    title:string,
    subtitle?:string,
    description:string,
    type:TimelineType,
    time:string
}

export interface ProjDetailInterface{
    id:string,
    question:string,
    value:string
}
// export type TextInputBoxProps = TextInputBoxPropsInterface

// export type SelectInputBoxProps = SelectInputBoxPropsInterface