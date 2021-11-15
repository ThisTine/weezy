import { HStack, Heading, VStack, Text, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Avatar, Box, Divider, useToast } from "@chakra-ui/react"
import { API, graphqlOperation } from "aws-amplify"
import NextLink from 'next/link'
import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { CreateDeveloperUpdateInput, Offer, UpdateProjectInput, User } from "../API"
import { createDeveloperUpdate, updateProject } from "../graphql/mutations"
import { getUser } from "../graphql/queries"
const DevList = ({offer,projectid,setrefreshdata}:{offer:Offer,projectid:string,setrefreshdata: Dispatch<SetStateAction<boolean>> })=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [userdata,setuserdata] = useState<User>()
    const toast = useToast({position:'top-left',status:"success",isClosable:true})
    const getdata = async(id:string)=>{
      try{
        const data = await API.graphql(graphqlOperation(getUser,{id})) as {data:{getUser:User}}
        if(data.data.getUser){
          setuserdata(data.data.getUser)
        }
      }catch(err){
        console.log(err)
      }
    }
    useEffect(()=>{
      if(offer){
        getdata(offer.offerOwnerID)
      }
    },[offer])
    const getdev = async()=>{
      try{
        const input:UpdateProjectInput = {
          id:projectid,
          developerID:userdata.id,
          status:"developing"
        }
        await API.graphql(graphqlOperation(updateProject,{input}))
        const input2:CreateDeveloperUpdateInput ={
          devID: userdata.id,
          projectID: projectid,
          title: "Acquire developer",
          createdAt: new Date().toISOString(),
          subtitle: userdata.aka,
          description: "We have a new developer for our project ! 💻"
        } 
        await API.graphql(graphqlOperation(createDeveloperUpdate,{input:input2}))
        onClose()
        setrefreshdata(true)
        toast({title:"Success !"})
        
      }catch(err){
        console.log(err)
      }
    }
    return(
        <>
              <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Developer Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <VStack>
              <Avatar size="xl"/>

              <Heading> {userdata?.firstname} {userdata?.lastname} </Heading>
              <Text> {userdata?.description} </Text>
              <Divider />
              <HStack w="100%" >
              <Button colorScheme={"blue"}  w="100%" size="lg" as="a" href={`mailto:${userdata?.email}`}  >📧 Email </Button>
              </HStack>
              <Divider />
                <Button colorScheme={"green"} w="100%" size="lg" onClick={()=>getdev()} >💻 เลือก Developer คนนี้</Button>
              </VStack>
              
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={onClose}>
              Close
            </Button>
            <NextLink href={`/dev/${userdata?.id}`}>
            <Button colorScheme={"blue"} as="a"  href={`/dev/${userdata?.id}`}   >เกี่ยวกับ Developer คนนี้ 🚪 </Button>
            </NextLink>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
        
        <VStack w="100%"   p={10} bg="gray.100" rounded="lg" cursor={"pointer"} _hover={{bg:"gray.200"}} transition={"0.25s"} onClick={onOpen} >

        <HStack w="100%" spacing={5} justifyContent={"flex-start"}>
        <HStack flex="3" >
        <Heading>
        {offer.price} Bath
        </Heading>
        {/* <Avatar size="full"/> */}
        </HStack>
        <VStack flex="5" alignItems={"flex-start"} >
            <Heading> {userdata?.firstname} {userdata?.lastname} </Heading>
            <Text> {userdata?.description} </Text>
            <Text whiteSpace={"pre-line"} flexWrap={"wrap"}>
                {
                  offer.description
                }
            </Text>

            
        </VStack>
    </HStack>
    </VStack>
    </>
    )
}

export default DevList