import { Avatar, Box, Text, Divider, Heading, HStack, VStack, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Grid, useToast } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import ChangePassword from "../components/ChangePassword"
import CropContainer from "../components/CropContainer"
import AboutModel from "../components/AboutModel"
import WorkModel from "../components/EditWorkModel"
import {Auth} from 'aws-amplify'
import { useRouter } from "next/dist/client/router"
import { AuthContext } from "../contexts/AuthContextProvider"
import PastWork from "../components/PastWork"

const account = ()=>{
    const { firstname,lastname,description,role,isloading,isloggedin } = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [type,settype] = useState<string>()
    const router = useRouter()
    const toast = useToast({status:"success",position:"top-left",isClosable:true})
    useEffect(()=>{
        if(!isloading && !isloggedin){
            router.replace("/login")

        }
    },[isloading,isloggedin])

    const open = (text:string)=>{
        settype(text)
        onOpen()
    }
    const logOut = async ()=>{
        try{
           await Auth.signOut()
           toast({title:"Success !"})
           router.replace("/login")

        }catch(err){
            console.log(err)
            toast({title:"Error",status:"error"})
        }
    }
    return(
        <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        {type === "password" && <ChangePassword onClose={onClose} type={type}/>}
        {type === "about" && <AboutModel onClose={onClose} type={type}/>}
        {type === "work" && <WorkModel onClose={onClose} type={type}  /> }

      </Modal>
        
        
        <CropContainer containerProps={{minH:"100vh",mb:10}}>
            <VStack bg="white" p={10} rounded={"2xl"} shadow={"md"} w="100%" >
                <Avatar size="2xl" />
                <Heading size="xl" color="gray.700"> {firstname} {lastname} </Heading>

                <Divider />
                <HStack w="100%" justifyContent={"space-between"} p={3} _hover={{bg:"gray.100"}} rounded={"lg"} cursor={"pointer"}  onClick={()=>open("about")} >
                    <VStack alignItems={"flex-start"}>
                    <Box> <Text fontSize={"lg"} > About </Text> </Box>
                    <Text>{description || "บอกเราหน่อยว่าคุณคือใคร เกี่ยวกับตัวคุณ"}</Text>
                    </VStack>
                    <Button>✏️</Button>
                </HStack>
                {role === "developer" &&<PastWork />}
                

                <Divider/>
                <VStack w="100%" paddingY={5}>
                
                <HStack w="100%" justifyContent={"space-between"} onClick={()=>open("password")} p={3} _hover={{bg:"gray.100"}} rounded={"lg"} cursor={"pointer"} >
                    <Box> <Text fontSize={"lg"} > Password </Text> </Box>
                    <Text>*******</Text>
                    <Button>✏️</Button>
                </HStack>
                

                </VStack>
                <Divider/>
                <Button colorScheme={"red"} size="lg" w="100%" onClick={logOut} >Logout</Button>                
                
            </VStack>
        </CropContainer>
        </>
    )
}

export default account