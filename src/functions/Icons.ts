import { ThemingProps } from "@chakra-ui/react"
import { Bagedcolortype, ProgressDetailStatus, ProgressStatus } from "../etc/types"

export const getProgressIcon:(text:ProgressStatus)=>string = (text)=>{
    switch (text) {
        case "desigining":
            return "🎨"
        case "developing":
            return "💻"
        case "reviewing":
            return "⌛"
        case "done":
            return "👌"
    
        default:
            return "🔥"
    }
}

export const getDetailColor:(text:ProgressDetailStatus)=>Bagedcolortype = (text)=>{
    switch(text){
        case "done":
            return "green"
        case "draft":
            return "gray"
        case "in review":
            return "yellow"
        case "inprogress":
            return "blue"
        default:
            return "gray"
    }
}