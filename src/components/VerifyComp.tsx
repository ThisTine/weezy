import { Box, Heading, VStack, Button, InputGroup, InputRightAddon, Input, PinInput, PinInputField, Text, HStack, useToast } from "@chakra-ui/react"
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import {Auth} from 'aws-amplify'
import { useRouter } from "next/dist/client/router"


const VerifyComp = ({email,setconcode,issended}:{email:string,setconcode?:Dispatch<SetStateAction<string>>,issended?:boolean})=>{

    const [code,setcode] = useState<string>("")
    const toast = useToast({status:"success",position:"top-left",isClosable:true})
    const [issubmitting,setissubmitting] = useState<boolean>(false)
    const [isresend,setisresend] = useState<boolean>(false)
    const [timer,settimer] = useState(0)
    const router = useRouter()


    useEffect(()=>{
        if(timer > 0){
            const xtimer = setInterval(()=>{
                if(timer <= 0){
                    clearInterval(xtimer)
                }
                settimer(timer-1)
            },1000)
            return ()=>clearInterval(xtimer)
        }
    },[timer])

    useEffect(()=>{
        if(isresend === true){
            settimer(60)
            const xtimer = setTimeout(() => {
                setisresend(false)
            }, 60000);

            return ()=>clearTimeout(xtimer)
        }
    },[isresend])

    useEffect(()=>{
        if(issended){
            setisresend(true)
        }
    },[])

    const sendcode = async()=>{
        try{
            if(setconcode){
                await Auth.forgotPassword(email)
            }else{
                await Auth.resendSignUp(email)
            }
            toast({title:"Pealse check your email !"})
            setisresend(true)
        }catch(err){
            toast({title:"error sending verification code",status:"error",description:err.message})
        }
    }

    const confirm = async()=>{
        setissubmitting(true)
        if(!setconcode){
            try{
               await Auth.confirmSignUp(email,code)
                toast({title:"confirm success !"})
                router.replace("/login")
            }catch(err){
                console.log(err)
                toast({title:"confirm failed",status:"error"})
            }
        }else{
            setconcode(code)
        }

        setissubmitting(false)
    }


    return(
        <Box width="100%" as="form"  onSubmit={()=>{}}>
        <Heading textAlign={"center"} >Verify email ✔️</Heading>
        <VStack width={"100%"} paddingY={10} spacing={10} >
            <Text> Verify for {email} </Text>
            <HStack>
            <PinInput size="lg" onChange={(e)=>setcode(e)} >
             <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
           </PinInput>
            </HStack>
            <Button colorScheme={"yellow"} onClick={sendcode} isDisabled={isresend} >{timer >0 && timer}  Resend verification code</Button>
        </VStack>
        <Button size="lg" width={"100%"} isLoading={issubmitting} onClick={confirm} isDisabled={(code.length !== 6)} colorScheme={"purple"} rounded={"full"} >✨ Verify</Button>
        </Box>
    )
}

export default VerifyComp