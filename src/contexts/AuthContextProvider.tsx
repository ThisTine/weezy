import { createContext, FC, useEffect, useState } from "react"
import {API, Auth,graphqlOperation,Hub} from 'aws-amplify'
import { createUser, updateUser } from "../graphql/mutations"
import { getUser } from "../graphql/queries"
import { User,CreateUserInput } from "../API"
interface authInterfaces {
    isloggedin:boolean,
    isloading:boolean,
    username?:string,
    email?:string,
    aka?:string,
    role?:string,
    uid?:string,
    firstname?:string,
    lastname?:string,
    description?:string
}

export const AuthContext = createContext<authInterfaces>({
    isloading:true,
    isloggedin:false
})

const AuthContextProvider:FC<{}> = ({children})=>{
    const [userState,setuserState] = useState<authInterfaces>({isloading:true,isloggedin:false})
    const getdata = async ()=>{
        try{
            const { username,attributes } = await Auth.currentUserInfo()
            setuserState({
                uid:username,
                isloading:false,
                isloggedin:true,
                email: attributes.email,
                aka: attributes["custom:aka"],
                role: attributes["custom:role"],
                firstname: attributes["custom:firstname"],
                lastname: attributes["custom:lastname"],
                description: attributes["custom:description"] || ""
            })

        }catch(err){
            // console.log(err.message)
            setuserState({isloading:false,isloggedin:false})
        }
    }

    const registerdata = async ()=>{
        try{
            const { uid,email,aka,role,firstname,lastname,description } = userState
            const userdata= await API.graphql(graphqlOperation(getUser,{id:uid})) as {data: {getUser: User}}
            const userInput:CreateUserInput = {
                id:uid,
                email:email,
                aka: aka,
                role: role,
                firstname: firstname,
                lastname: lastname,
                description: description || ""   
            }
            if(!userdata.data.getUser){
                await API.graphql(graphqlOperation(createUser,{input:userInput}))
            }else{
                await API.graphql(graphqlOperation( updateUser, {input:userInput} ))
            }
        }catch(err){
            // console.log(err)
        }
    } 

    useEffect(()=>{
        if(!userState.isloading && userState.isloggedin && userState.uid){
            registerdata()
        }
    },[userState])

    useEffect(()=>{
        getdata()

        const hub = Hub.listen('auth',(data)=>{
            getdata()
        })
        return hub
    },[])
    return(
        <AuthContext.Provider value={userState} >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider