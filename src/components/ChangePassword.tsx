import { Button, Input, InputGroup, InputLeftAddon, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader,Text, useToast, VStack } from "@chakra-ui/react"
import { useForm } from "react-hook-form"
import { SettingModelProps } from "../etc/types"
import {Auth} from 'aws-amplify'
interface ChangePasswordInputs {
  old:string,
  newp:string,
  renew:string
}
const ChangePassword = ({ type,onClose }:SettingModelProps)=>{
  const { register,watch,formState:{isSubmitting},handleSubmit } = useForm<ChangePasswordInputs>()
  const toast = useToast({status:"success",position:"top-left",isClosable:true})
  const submit = async ({old,newp}:ChangePasswordInputs)=>{
    try{
      const user = await Auth.currentAuthenticatedUser()
      await Auth.changePassword(user,old,newp)
      toast({title:"Success !"})
      onClose()
    }catch(e){
      console.log(e.message)
      toast({title:"Error",description:e.message,status:"error"})
    }
  }
    return(
        <ModalContent as="form" onSubmit={handleSubmit(submit)}  >
          <ModalHeader>{"Change Password"}</ModalHeader>
          <ModalCloseButton />
          <ModalBody  >
            <VStack w="100%" alignItems={"flex-start"} >
            <Text>Old key</Text>
            <InputGroup>
            <InputLeftAddon>🗝️</InputLeftAddon>
            <Input {...register("old",{required:true})} type="password"/>
            </InputGroup>

            <Text>New key</Text>
            <VStack w="100%" >
            <InputGroup>
            <InputLeftAddon>🔑</InputLeftAddon>
            <Input {...register("newp",{required:true})} type="password"/>
            </InputGroup>
            <InputGroup>
            <InputLeftAddon>🔑</InputLeftAddon>
            <Input {...register("renew",{required:true})} isInvalid={watch("newp") !== watch("renew")}  type="password"/>
            </InputGroup>
            </VStack>
            </VStack>

            
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button type="submit" colorScheme={"green"} isDisabled={!watch("old") || !watch("newp") || !watch("renew") || watch("renew") !== watch("newp") } 
            isLoading={isSubmitting} >Save</Button>
          </ModalFooter>
        </ModalContent>
    )
}

export default ChangePassword