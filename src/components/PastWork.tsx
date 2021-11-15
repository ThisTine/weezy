import { VStack, Box, Grid, Heading,Text, Modal, ModalOverlay, useDisclosure, Skeleton } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import { GrAdd } from "react-icons/gr"
import WorkModel from "./EditWorkModel"
import {API, graphqlOperation} from 'aws-amplify'
import { onCreateWork, onUpdateWork } from "../graphql/subscriptions"
import { AuthContext } from "../contexts/AuthContextProvider"
import { listWorks } from "../graphql/queries"
import { ListWorksQuery, Work } from "../API"

const PastWork = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [datalist,setdatalist] = useState<Work[]>([])
    const { uid} = useContext(AuthContext)
    const [currentvalue,setcurrentvalue] = useState<Work>()
    const [isgetnewdata,setisgetnewdata] = useState(true)
    const [isgettingdata,setisgettingdata] = useState(true)
    useEffect(()=>{
        const getdata = async()=>{
          try{
            const data = await (API.graphql(graphqlOperation(listWorks,{userID:uid})) as Promise<{data:ListWorksQuery}> )
            setisgettingdata(false)
            if(data.data){
              setdatalist([...data.data.listWorks.items])
            }
          }catch(err){
            console.log(err)
          }
        }        
        if(uid && isgetnewdata){
          getdata()
          setisgetnewdata(false)
          
        }
    },[uid,isgetnewdata])
    
    return(
        <> 
        <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <WorkModel onClose={onClose} type={"work"} currentvalue={currentvalue} setisgetnewdata={setisgetnewdata}  />

      </Modal>
        
        <VStack w="100%" alignItems={"flex-start"} justifyContent={"space-between"} p={3}  rounded={"lg"}  >
                    <Box> <Text fontSize={"lg"} > Past-Works </Text> </Box>
                    <Grid w="100%" templateColumns={{base:"repeat(1,1fr)",md:"repeat(3,1fr)"}} gap={3} >
                    {datalist.map(item=> <Box bg="gray.100" key={item.id} 
                    rounded={"2xl"} p={10} onClick={()=>{onOpen();setcurrentvalue(item) }} cursor={"pointer"} > <Heading size="md" >{item.title}</Heading> </Box>) }
                    {isgettingdata && <>
                      <Box bg="gray.100" rounded={"2xl"} p={10} cursor={"pointer"} > <Heading size="md" > <Skeleton w="100%" h="50px"/> </Heading> </Box>
                      <Box bg="gray.100" rounded={"2xl"} p={10} cursor={"pointer"} > <Heading size="md" > <Skeleton w="100%" h="50px"/> </Heading> </Box>
                      <Box bg="gray.100" rounded={"2xl"} p={10} cursor={"pointer"} > <Heading size="md" > <Skeleton w="100%" h="50px"/> </Heading> </Box>
                      <Box bg="gray.100" rounded={"2xl"} p={10} cursor={"pointer"} > <Heading size="md" > <Skeleton w="100%" h="50px"/> </Heading> </Box>

                    
                    </>}

                    <Box bg="gray.100" rounded={"2xl"} p={10} onClick={()=>{onOpen();setcurrentvalue(null) }} cursor={"pointer"} > 
                    <VStack> <Heading fontSize={"3xl"} > <GrAdd /> </Heading> </VStack>  </Box>
                    </Grid>
        </VStack>
        </>
    )
}

export default PastWork