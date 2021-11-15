import { Heading, VStack,Input, Button, InputGroup, InputLeftAddon, toast, useToast } from "@chakra-ui/react"
import { Auth } from "aws-amplify"
import { Dispatch, SetStateAction, useState } from "react"
import { emailreg } from '../etc/regex'
const ResetPwdComp = ({setemail}:{setemail:Dispatch<SetStateAction<string>>})=>{
    const [value,setvalue] = useState<string>()
    const toast = useToast({status:"success",position:"top-left",isClosable:true})
    const [isloading,setisloading] = useState<boolean>(false)
    const submit = async()=>{
        setisloading(true)
        try{            
            await Auth.forgotPassword(value);
            toast({title:"Please check your email"})
            setemail(value)
        }catch(err){
            toast({title:"error",status:"error",description:err.message})
        }
        setisloading(false)
    }
    return(
        <VStack spacing={10}>
            <Heading>What is your email address ?</Heading>
            <InputGroup size="lg" >
            <InputLeftAddon>📧</InputLeftAddon>
            <Input isInvalid={!emailreg.test(value)} placeholder="tine@thistine.com" onChange={e=>setvalue(e.target.value)} />
            </InputGroup>
            <Button w="100%" colorScheme={"green"} rounded={"full"} onClick={submit} isLoading={isloading} isDisabled={!emailreg.test(value)} size="lg">Send verification code</Button>
        </VStack>
    )
}

export default ResetPwdComp