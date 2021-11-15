import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Input, Textarea, ModalFooter, Button, useToast } from "@chakra-ui/react"
import { API, graphqlOperation } from "aws-amplify"
import { Dispatch, FC, SetStateAction, useContext } from "react"
import { useForm } from "react-hook-form"
import { CreateDeveloperUpdateInput } from "../API"
import { AuthContext } from "../contexts/AuthContextProvider"
import { createDeveloperUpdate } from "../graphql/mutations"

interface ProgressUpdateInterface{
  title:string,
  subtitle:string,
  description:string
}

const ProgressUpdate:FC<{onClose:()=>void,projectID:string,setrefreshdata:Dispatch<SetStateAction<boolean>>}> = ({onClose,projectID,setrefreshdata})=>{
  const { uid } = useContext(AuthContext)
  const { register,watch,formState:{isSubmitting},handleSubmit } = useForm<ProgressUpdateInterface>()
  const toast = useToast({position:'top-left',status:"success",isClosable:true})
  const update = async ({description,subtitle,title}:ProgressUpdateInterface)=>{
    try{
      const input:CreateDeveloperUpdateInput = {
        description,
        title,
        subtitle,
        projectID,
        devID:uid
      }
      await API.graphql(graphqlOperation(createDeveloperUpdate,{input}))
      toast({title:"Success !"})
      setrefreshdata(true)
      onClose()
    }catch(err){
      toast({title:"Error !",status:"error",description:err.message})
    }
  }
    return(
        <ModalContent as="form" onSubmit={handleSubmit(update)}>
        <ModalHeader>Update</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack>
          <Input {...register("title",{required:true})} placeholder="Title" />
          <Input {...register("subtitle",{required:true})} placeholder="Second-title" />
          <Textarea {...register("description",{required:true})} placeholder="Description" ></Textarea>
          </VStack>


        </ModalBody>

        <ModalFooter>
          <Button colorScheme="gray" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button type="submit" colorScheme="green" isDisabled={!watch("description") || !watch("title") || !watch("subtitle")} isLoading={isSubmitting} >Save 💾</Button>
        </ModalFooter>
      </ModalContent>
    )
}

export default ProgressUpdate