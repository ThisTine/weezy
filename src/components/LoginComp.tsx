import {Box, Button, Heading, Input, InputGroup, InputLeftAddon, InputRightAddon, InputRightElement, useToast, VStack} from '@chakra-ui/react'
import { useContext, useEffect, useState } from 'react'
import {emailreg} from '../etc/regex'
import {useForm} from 'react-hook-form'
import {Auth} from 'aws-amplify'
import { useRouter } from 'next/dist/client/router'
import { AuthContext } from '../contexts/AuthContextProvider'
type LoginInputs ={
    username:string,
    password:string
}
const LoginComp = ()=>{
    const {register,formState:{isSubmitting},watch,handleSubmit} = useForm<LoginInputs>()
    const {isloggedin} = useContext(AuthContext)
    const [isshow,setisshow] = useState(false);
    const toast = useToast({status:"success",position:"top-left",isClosable:true})
    const router = useRouter()
    useEffect(()=>{
        if(isloggedin){
            router.replace("/dashboard")
        }
    },[isloggedin])

    const login = async ({password,username }:LoginInputs)=>{
        try{
           await Auth.signIn({username,password})
           toast({title:"Success !"})
            router.replace("/dashboard")
        }catch(err){
            if(err.message === "User is not confirmed."){
                router.replace(`/verify/${username}`)
            }
            console.log(err.message)
            toast({title:"Error",status:"error",description:err.message})

        }
    }
    return(
        <Box width="100%" as="form" onSubmit={handleSubmit(login)}>
        <Heading textAlign={"center"} >Welcome !</Heading>
        <VStack width={"100%"} paddingY={10} spacing={5} >
            <InputGroup >
            <InputLeftAddon> 🙆‍♂️ </InputLeftAddon>
            <Input isInvalid={watch("username") && !emailreg.test(watch("username"))} {...register("username",{required:true,pattern:emailreg})} placeholder='Email' />
            <InputRightAddon >{emailreg.test(watch("username")) ?  "👌" : "❌" }</InputRightAddon>
            </InputGroup>
            <InputGroup>
            <InputLeftAddon> 🔑 </InputLeftAddon>
            <Input {...register("password")} type={isshow ? "text" :"password"} autoComplete='off'  placeholder={isshow ? "Password" : "********"} />
            <InputRightElement>
            <Button p={2} borderLeftRadius={0} onClick={()=>setisshow(!isshow)} _focus={{ringOffset:0}} >{isshow ? "😚": "👁️"}</Button>
            </InputRightElement>
            </InputGroup>
        </VStack>
        <Button size="lg" width={"100%"} isLoading={isSubmitting} colorScheme={"purple"} rounded={"full"}
        type="submit" isDisabled={!(watch('username') && watch('password') && emailreg.test(watch('username')))} >✨ Login</Button>
        </Box>
    )
}

export default LoginComp