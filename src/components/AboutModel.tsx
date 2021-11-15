import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, InputGroup, InputLeftAddon, Input, ModalFooter, Button,Text, Textarea, useToast } from "@chakra-ui/react"
import { FC, useContext, useState } from "react"
import { AuthContext } from "../contexts/AuthContextProvider"
import { SettingModelProps } from "../etc/types"
import { Auth } from 'aws-amplify'
const AboutModel = ({onClose}:SettingModelProps)=>{
      const { description } = useContext(AuthContext)
      const [value,setvalue] = useState<string>()
      const toast = useToast({status:"success",position:"top-left",isClosable:true})
      const [isloading,setisloading] = useState(false)
      const submit = async ()=>{
        setisloading(true)
        try{
          const user = await Auth.currentAuthenticatedUser()
          await Auth.updateUserAttributes(user,{"custom:description":value})
          toast({title:"Success"})
          onClose()
        }catch(err){
          toast({title:"Failed ! please try again !"})
        }
        setisloading(false)
      }
    return(
        <ModalContent>
        <ModalHeader>{"Edit About"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody  >
          <VStack w="100%" alignItems={"flex-start"} >
          <Textarea defaultValue={description || ""} onChange={(e)=>setvalue(e.target.value)} placeholder="เกี่ยวกับตัวคุณว่าเป็นอย่างไร" />
          </VStack>

          
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme={"green"} isDisabled={!value || value === description} isLoading={isloading} onClick={submit} >Save</Button>
        </ModalFooter>
      </ModalContent>
    )
}

export default AboutModel