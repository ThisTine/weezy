import { Avatar, Badge, Box, Button, Divider, Heading ,HStack,Input,InputGroup,InputRightAddon,Modal,ModalBody,ModalCloseButton,ModalContent,ModalFooter,ModalHeader,ModalOverlay,Progress,Skeleton,Text, Textarea, useDisclosure, useToast, VStack} from "@chakra-ui/react"
import CropContainer from "../../components/CropContainer"
import { getDetailColor, getProgressIcon } from "../../functions/Icons"
import 'react-vertical-timeline-component/style.min.css';
import TimeLineElement from "../../components/TimeLineElements";
import VerticalTimelineFix from "../../components/VerticalTimelineFix";
import ProgressUpdate from "../../components/ProgressUpdate";
import DevList from "../../components/DevList";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContextProvider";
import { useRouter } from "next/router";
import { API, graphqlOperation } from "aws-amplify";
import { getProject } from "../../graphql/queries";
import { CreateDeveloperUpdateInput, DeveloperUpdate, Project, UpdateProjectInput } from "../../API";
import { getProjectStatus } from "../../functions/getProjectStatus";
import DevSubmit from "../../components/DevSubmit";
import { createDeveloperUpdate, updateProject } from "../../graphql/mutations";
import NextLink from 'next/link'
import { getid } from "../../functions/getId";
const project = ()=>{
    const {isloading,isloggedin,role,uid} = useContext(AuthContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast({position:'top-left',status:"success",isClosable:true})
    const [project,setproject] = useState<Project>()
    const [refreshdata,setrefreshdata] = useState(false)

    const router = useRouter()
    const getdata = async (id:string)=>{
        try{
            const projectdata = await API.graphql(graphqlOperation(getProject,{id})) as {data:{getProject:Project}}
            // console.log(projectdata)
            if(projectdata.data.getProject){
                const compare = (a:DeveloperUpdate,b:DeveloperUpdate)=>{
                    if(a.updatedAt < b.updatedAt){
                        return 1;
                    }
                    if(a.updatedAt > b.updatedAt){
                        return -1;
                    }
                    return 0
                }
                const items = projectdata.data.getProject.updates.items.sort(compare)
                setproject({...projectdata.data.getProject,updates:{...projectdata.data.getProject.updates,items:items}})
            }else{
                toast({title:"Error",description:"not found",status:"error"})
            }
        }catch(err){
            toast({title:"Error",description:err.message,status:"error"})
        }
    }
    
    useEffect(()=>{
        if(router.query.id){
            let id:string;
            if(typeof router.query.id !== "string"){
                id = router.query.id[0]
            }else{
                id = router.query.id
            }
            getdata(id)
        }
    },[router.query])
    useEffect(()=>{
        if(refreshdata && router.query.id){
                let id:string;
                if(typeof router.query.id !== "string"){
                    id = router.query.id[0]
                }else{
                    id = router.query.id
                }
                getdata(id)
            setrefreshdata(false)
        }
    },[refreshdata,router.query.id])
    useEffect(()=>{
        if(!isloading && !isloggedin){
            router.replace("/login")
        }
    },[isloading,isloggedin])
    const onDone = async()=>{
        try{
            const input:UpdateProjectInput = {
                id: getid(router.query.id),
                status: "done"
            }
            await API.graphql(graphqlOperation(updateProject,{input}))
            const input2:CreateDeveloperUpdateInput = {
                devID:uid,
                description: "Mark project as Done !",
                title: "Done 🥂",
                subtitle: "",
                createdAt: new Date().toISOString(),
                projectID: getid(router.query.id)
            }
            await API.graphql(graphqlOperation(createDeveloperUpdate,{input:input2}))
            setrefreshdata(true)
            toast({title:"Success !"})
        }catch(err){
            console.log(err)
            toast({status:"error",title:"Error",description:err.message})
        }
    }
    return(
        <>
              <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
            <ProgressUpdate onClose={onClose} setrefreshdata={setrefreshdata} projectID={getid(router.query.id)} />
             </Modal>
        <CropContainer containerProps={{mt:10}} >




            <VStack w="100%" spacing={10}>
                <VStack w="100%" alignItems={"flex-start"} p={5} paddingY={10} bg="white" rounded={"2xl"} shadow={"md"} > 
                {!project && <Skeleton w="100%" h={20} />}
                {!project && <Skeleton w="100%" h={10} />}
                <Heading> {project?.name} </Heading>
                <Text whiteSpace={"pre-line"}> {project?.description} </Text>
                <Divider/>
                {!project && <Skeleton w="100%" h={20} />}

                <HStack>
                    <Heading>{project?.status==="designing" ? "Continue designing" : "Design"} : </Heading>
                    {project?.designtool === "link" && <> 
                    <Button colorScheme={"yellow"} as="a" href={project?.designdata} target={"_blank"} >Design File</Button> </> }
                    {project?.designtool === "weezy" && <NextLink href={`/design/${project.id}`} ><Button 
                    colorScheme={"cyan"} as="a" href={`/design/${project.id}`}
                    > Design </Button></NextLink>}
                </HStack>

                {uid === project?.developerID && <VStack w="100%" alignItems={"flex-start"}>
                <Divider />

                {(role === "developer" && project?.status === "developing" && project?.developerID === uid) && <HStack>
                    <Button colorScheme={"teal"} onClick={onOpen}>Developer Update ✏️</Button>
                    <Button colorScheme={"green"} onClick={()=>onDone()} >Done developing</Button>
                </HStack>}
                </VStack>}
                </VStack>


                {project?.ownerID === uid && <VStack w="100%" alignItems={"flex-start"} p={5} paddingY={10} bg="white" rounded={"2xl"} shadow={"md"}>
                {!project && <Skeleton w="10%" h={5} />}
                {!project && <Skeleton w="100%" h={20} />}
                {!project && <Skeleton w="100%" h={10} />}

                 {project && <> <Badge colorScheme={ getDetailColor( getProjectStatus(project?.status || "").detailstatus )} fontSize="0.8em" > {getProjectStatus(project?.status || "").detailstatus} </Badge>
                    <Heading fontSize={"5xl"} color="gray.600" >{getProjectStatus(project?.status || "").status} {getProgressIcon(getProjectStatus(project?.status || "").status)} </Heading>
                    <Progress colorScheme={getProjectStatus(project.status).color || "gray"} size="lg" w="100%" value={getProjectStatus(project?.status || "").percent} rounded={"2xl"} /> </>}
                </VStack>}

                {project?.status === "reviewing" && role==="developer" && <VStack w="100%" alignItems={"flex-start"} p={5} paddingY={10} bg="white" rounded={"2xl"} shadow={"md"}>
                    <Heading>ส่งรายละเอียดเพื่อรับงาน</Heading>
                    <DevSubmit issended={project.offers.items.filter(item=>item.offerOwnerID===uid).length >0} projectID={project?.id} />
                </VStack> }




                {(project?.status === "reviewing" && project?.ownerID === uid) && <VStack w="100%" alignItems={"flex-start"} p={5} paddingY={10} bg="white" rounded={"2xl"} shadow={"md"} >
                <Heading>Developer Review ⌛ </Heading>
                    {project?.offers.items.map(item=><DevList setrefreshdata={setrefreshdata} projectid={project.id} offer={item}  key={item.id} />)}


                </VStack>}




                {(project?.status === "developing" || project?.status === "done") && <VStack overflow={"hidden"} w="100%" alignItems={"flex-start"} p={5} paddingY={10} bg="white" rounded={"2xl"} shadow={"md"}>
                 <Heading>Developer Update 🐜</Heading>
                  <VerticalTimelineFix>
                  {project?.updates?.items?.map((item,idx)=><TimeLineElement 
                  time={item.updatedAt}
                  title={item.title} subtitle={item.subtitle} description={item.description} 
                  type={idx === 0 ? "primary" : "secondary"} key={item.id} />) }
                  </VerticalTimelineFix>
                    
                </VStack>}
            </VStack>

        </CropContainer>
        </>
    )
}

export default project