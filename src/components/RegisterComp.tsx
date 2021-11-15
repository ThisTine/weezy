import {Box, Button, Heading, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Text, Stack, VStack,InputRightElement, useToast} from '@chakra-ui/react'
import { useContext, useState,useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { emailreg } from '../etc/regex'
import  {Auth} from 'aws-amplify'
import { useRouter } from 'next/router'
import { AuthContext } from '../contexts/AuthContextProvider'

type RegisterInputs = {
    firstname:string,
    lastname:string,
    email:string,
    aka?:string,
    password:string,
    repassword:string,
}
const RegisterComp = ()=>{
    const {register,watch,handleSubmit,formState:{isSubmitting}} = useForm<RegisterInputs>()
    const [role,setrole] = useState("customer");
    const { isloading, isloggedin } = useContext(AuthContext)
    const [isshow,setisshow] = useState(false);
    const toast = useToast({status:"success",position:"top-left",isClosable:true})
    const router = useRouter()
    useEffect(()=>{
        if(isloggedin && !isloading){
            router.replace("/dashboard")
        }
    },[isloggedin,isloading])
    const signup = async ({email,firstname,lastname,password,aka}:RegisterInputs)=>{
        // console.log(email)
        try{
            const {user} = await Auth.signUp({
                username: email,
                password,
                attributes:{
                   "custom:firstname": firstname,
                   "custom:lastname":lastname,
                   "custom:role":role,
                   "custom:aka": aka || firstname+lastname
                }
            })

            toast({title:"Success !"})
            router.push(`/verify/${user.getUsername()}`)
        }catch(err){
            toast({title:"Error",status:err.message})
        }
    }
    

    return (
        <Box width="100%" as="form"  onSubmit={handleSubmit(signup)}>
        <Heading textAlign={"center"} >Get In ! 🏎️</Heading>
        <VStack width={"100%"} paddingY={10} spacing={10} >

        <Stack direction={{base:"column",lg:"row"}} w="100%">
        <InputGroup flex="1" >
            <Input   autoComplete='off' placeholder='Firstname' {...register('firstname',{required:true})} />
        </InputGroup>
        <InputGroup flex="1" >
            <Input   autoComplete='off' placeholder='Lastname' {...register('lastname',{required:true})} />
        </InputGroup>
        </Stack>

        <InputGroup >
            <InputLeftAddon> 📧 </InputLeftAddon>
            <Input isInvalid={watch("email") && !emailreg.test(watch("email"))}  {...register("email",{required:true,pattern:emailreg})} placeholder='Email' />
            <InputRightAddon >{emailreg.test(watch("email")) ?  "👌" : "❌" }</InputRightAddon>
        </InputGroup>



        <InputGroup>
            <InputLeftAddon> 🔑 </InputLeftAddon>
            <Input {...register("password",{required:true})} type={isshow ? "text" :"password"} autoComplete='off'  placeholder={"Password"} />
            <InputRightElement>
            <Button p={2} borderLeftRadius={0} onClick={()=>setisshow(!isshow)} _focus={{ringOffset:0}} >{isshow ? "😚": "👁️"}</Button>
            </InputRightElement>
        </InputGroup>

        <InputGroup>
            <InputLeftAddon> 🔐 </InputLeftAddon>
            <Input isInvalid={watch('repassword') && (watch("password") !== watch("repassword"))} {...register("repassword",{required:true})} type={isshow ? "text" :"password"} autoComplete='off'  placeholder={"re-password"} />
            <InputRightElement>
            <Button p={2} borderLeftRadius={0} onClick={()=>setisshow(!isshow)} _focus={{ringOffset:0}} >{isshow ? "😚": "👁️"}</Button>
            </InputRightElement>
        </InputGroup>

        <Box width="100%">
        <HStack width={"100%"} spacing={0} >
            <HStack flex="1" justifyContent={"center"} onClick={()=>setrole("customer")} transition="0.25s" bg={role === "customer" ? "gold" : "gray.400"} cursor="pointer" paddingY={3} rounded={"3xl"} borderRightRadius={"0"} ><Heading size={"md"}>💸 Customer</Heading></HStack>
            <HStack flex="1" justifyContent={"center"} onClick={()=>setrole("developer")}  transition="0.25s" bg={role === "developer" ? "purple.500" : "gray.400"} cursor="pointer" paddingY={3} rounded={"3xl"} borderLeftRadius={"0"}><Heading size={"md"} >💻 Developer</Heading></HStack>
        </HStack>
        </Box>

        {role==="developer" && <InputGroup >
        <InputLeftAddon> AKA </InputLeftAddon>
            <Input   autoComplete='off' placeholder={watch('firstname')+watch('lastname')+" (default)"} {...register('aka')} />
        </InputGroup>}
        
        </VStack>
        <Button size="lg" width={"100%"} colorScheme={"purple"} rounded={"full"} isDisabled={!(
        watch('email') 
        && watch('firstname') 
        && watch('lastname') 
        && watch('password')
        && watch('repassword')
        && emailreg.test(watch('email'))
        && (watch('password') === watch('repassword')))} type='submit' isLoading={isSubmitting} >✨ Register</Button>
        </Box>
    )
}

export default RegisterComp