import { VStack, Heading, InputGroup, InputLeftAddon, Input, Button, useToast } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import {Auth} from 'aws-amplify'
import { useRouter } from "next/dist/client/router"
interface ResetpwdInputs{
    pwd:string,
    repwd:string
}
export default ({email,code}:{email:string,code:string})=>{
    const {register,handleSubmit,watch,formState:{isSubmitting}} = useForm<ResetpwdInputs>()
    const toast = useToast({status:"success",position:"top-left",isClosable:true})
    const router = useRouter()

    const submit = async({pwd}:ResetpwdInputs)=>{
        try{
            
            await Auth.forgotPasswordSubmit(email,code,pwd)
            toast({title:"Success !"})
            router.replace("/")
        }catch(err){
            toast({title:"failed",status:"error",description:err.message})
        }
    }
    return(
        <VStack w="100%" spacing={10} as="form" onSubmit={handleSubmit(submit)}>
            <Heading> Reset password </Heading>
            <InputGroup>
            <InputLeftAddon>🔑</InputLeftAddon>
            <Input {...register("pwd",{required:true})} type="password" placeholder="password" />
            </InputGroup>
            <InputGroup>
            <InputLeftAddon>🔑</InputLeftAddon>
            <Input {...register("repwd",{required:true})}  type="password" isInvalid={watch("pwd") !== watch("repwd")} placeholder="re-enter password" />
            </InputGroup>
            <Button type="submit"
             size="lg" w="100%" rounded={"full"} colorScheme={"green"} isLoading={isSubmitting} isDisabled={!watch("pwd") || !watch("repwd") || watch("pwd") !== watch("repwd")} >Change password 🔑</Button>
        </VStack>
    )
}