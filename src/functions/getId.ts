export const getid:(id:string | string[])=>string =(id:string | string[])=>{
    if(!id){
        return ""
    }
    if(typeof id !== "string"){
        return id[0]
    }else{
        return id
    }
}