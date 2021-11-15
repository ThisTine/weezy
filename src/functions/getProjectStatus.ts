import { Bagedcolortype, ProgressDetailStatus, ProgressStatus } from "../etc/types";

export const getProjectStatus:(text:string)=>{status: ProgressStatus,detailstatus: ProgressDetailStatus,percent: number,color:Bagedcolortype } = (text:string)=>{
    switch(text){
        case "designing":
            return {detailstatus:"draft",status:"desigining",percent:20,color:"blue"}
        case "developing":
            return {detailstatus:"inprogress",status:"developing",percent:80,color:"red"}
        case "reviewing":
            return {detailstatus:"in review",status:"reviewing",percent:50,color:"orange"}
        case "done":
            return {detailstatus:"done",status:"done",percent:100,color:"green"}
        default :
            return {detailstatus:"draft",status:"desigining",percent:20,color:"gray"}

    }
    
}