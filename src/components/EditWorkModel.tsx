import { ModalContent, ModalHeader, ModalCloseButton, ModalBody, VStack, Textarea, ModalFooter, Button, InputGroup, InputLeftAddon, Input, useToast, HStack } from "@chakra-ui/react"
import {EditWorkModelProps} from '../etc/types'
import {useForm} from 'react-hook-form'
import {API,graphqlOperation} from 'aws-amplify'
import {createWork, deleteWork, updateWork} from '../graphql/mutations'
import { CreateWorkInput, CreateWorkMutation } from "../API"
import { useContext } from "react"
import {AuthContext} from '../contexts/AuthContextProvider'

interface EditWorkInputs {
  title:string,
  time:string,
  link:string,
  detail:string
}

const EditWorkModel = ({onClose,currentvalue,setisgetnewdata}:EditWorkModelProps)=>{
    const {uid} = useContext(AuthContext)
    const {register,watch, formState:{isSubmitting},handleSubmit } = useForm<EditWorkInputs>()
    const toast = useToast({status:"success",position:"top-left",isClosable:true})

    const addwork = async ({detail,link,time,title}:EditWorkInputs)=>{
      const inputs:CreateWorkInput = {
        userID:uid,
        detail:detail,
        title:title,
        time:time,
        link:link
      }
      try{
        await API.graphql(graphqlOperation(createWork,{input:inputs}))  as {data: {getUser: CreateWorkMutation}}
        toast({title:"success"})
        setisgetnewdata(true)
        onClose()
      }catch(err){
        console.log(err.message)
        toast({title:"error",description:err.message,status:"error"})
      }
    }

    const updatework = async ({detail,link,time,title}:EditWorkInputs)=>{
      const inputs:CreateWorkInput = {
        id:currentvalue.id,
        userID:uid,
        detail:detail,
        title:title,
        time:time,
        link:link
      }
      try{
        await API.graphql(graphqlOperation(updateWork,{input:inputs}))  as {data: {getUser: CreateWorkMutation}}
        toast({title:"success"})
        setisgetnewdata(true)
        onClose()
      }catch(err){
        console.log(err.message)
        toast({title:"error",description:err.message,status:"error"})
      }
    }
    const deletethiswork = async ()=>{
      try{
        await API.graphql(graphqlOperation(deleteWork,{input:{id:currentvalue.id}}))
        toast({title:"success"})
        setisgetnewdata(true)
        onClose()
      }catch(err){
        console.log(err.message)

        toast({title:"error",description:err.message,status:"error"})

      }
    }
    return(
        <ModalContent as="form" onSubmit={handleSubmit(currentvalue ? updatework : addwork)}>
        <ModalHeader>{currentvalue ? "Edit Work" : "Add Work"}</ModalHeader>
        <ModalCloseButton />
        <ModalBody  >
          <VStack w="100%" alignItems={"flex-start"} >
          
          <InputGroup>
          <InputLeftAddon >🏆</InputLeftAddon>
          <Input {...register("title",{required:true})} defaultValue={currentvalue?.title || ""} placeholder="title" />
          </InputGroup>

          <InputGroup>
          <InputLeftAddon >⏱️</InputLeftAddon>
          <Input {...register("time",{required:true})} defaultValue={currentvalue?.time || ""} placeholder="2021" />
          </InputGroup>

          <Textarea {...register("detail",{required:true})} defaultValue={currentvalue?.detail || ""} placeholder="Detail ⚽" ></Textarea>


          <InputGroup>
          <InputLeftAddon defaultValue={currentvalue?.link || ""} >🔗</InputLeftAddon>
          <Input {...register("link")} placeholder="Link of evedence" />
          </InputGroup>

          </VStack>

          
        </ModalBody>

        <ModalFooter>
          <HStack w="100%" justifyContent={currentvalue ? "space-between" : "flex-end"}>
          {currentvalue && <Button colorScheme={"red"} onClick={deletethiswork}  >Delete</Button>}
          <HStack>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme={"green"} type="submit" 
          isLoading={isSubmitting}
          isDisabled={!watch("detail") || !watch("title") || !watch("time")} >Save</Button>
          </HStack>
          </HStack>


        </ModalFooter>
      </ModalContent>
    )
}

export default EditWorkModel