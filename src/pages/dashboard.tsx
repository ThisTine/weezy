import { Badge, Box, Button, Heading, HStack, Skeleton, useToast, VStack } from "@chakra-ui/react"
import CropContainer from "../components/CropContainer"
import NextLink from 'next/link'
import ProgressTab from "../components/ProgressTab"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContextProvider"
import { useRouter } from "next/router"
import { API, graphqlOperation } from "aws-amplify"
import { listProjects, searchProjects } from "../graphql/queries"
import { Project, SearchProjectsQuery } from "../API"
import { getProjectStatus } from "../functions/getProjectStatus"

const Dashboard = ()=>{
    const router = useRouter()
    const {aka,isloading,isloggedin,uid,role} = useContext(AuthContext)
    const toast = useToast({position:'top-left',status:"success"})
    const [projects,setprojects] = useState<Project[]>([])
    const [isloadingdata,setisloading] = useState(true)
    const getdata = async ()=>{
            try{
                let alldata: {data:SearchProjectsQuery};
                if(role !== "developer"){
                    alldata = await API.graphql(graphqlOperation(searchProjects,{filter:{ownerID:{match:uid}}})) as {data:SearchProjectsQuery}
                }else{
                    alldata = await API.graphql(graphqlOperation(searchProjects,{filter:{developerID:{match:uid}}})) as {data:SearchProjectsQuery}
                }
                // console.log(alldata)
                if(alldata.data.searchProjects.items){
                    setprojects(alldata.data.searchProjects.items)
                }
            }catch(err){
                console.log(err)
                toast({status:"error",title:"Error",description:err.message})
            }
            setisloading(false)

    }
    useEffect(()=>{
        if(!isloading && isloggedin && uid && role ){
            getdata()
        }
    },[isloading,isloggedin,uid,role])
    useEffect(()=>{
        if(!isloading && !isloggedin){
            router.replace("/login")
        }
    },[isloading,isloggedin])
    return (
    <CropContainer containerProps={{minH:"100vh",mb:10}} >


        
        {role==="developer" && <HStack w="100%" paddingY={5} justifyContent={"center"} > <Button rounded={"full"} colorScheme={"green"} > งานที่ทำอยู่</Button> 
        <NextLink href={"/work"}><Button rounded={"full"}>หางานที่เปิดอยู่</Button></NextLink>  </HStack>}
        <Heading>สวัสดี, คุณ {aka} 👋</Heading>

        {isloadingdata && <VStack w="100%" spacing={5}>
            <VStack cursor={"pointer"} w="100%" bg="white" p={5} paddingY={10} shadow={"lg"} rounded={"xl"} >
            <HStack width={"100%"} justifyContent={"space-between"} >
                <VStack alignItems={"flex-start"}   >
                    <Skeleton w="100%" h={10} />
                    <Skeleton w="100%" h={5} />

                </VStack>
                <Skeleton w="100%" h={10} />

            </HStack>
            <Skeleton w="100%" h={10} />
        </VStack>
        <VStack cursor={"pointer"} w="100%" bg="white" p={5} paddingY={10} shadow={"lg"} rounded={"xl"} >
            <HStack width={"100%"} justifyContent={"space-between"} >
                <VStack alignItems={"flex-start"}   >
                    <Skeleton w="100%" h={10} />
                    <Skeleton w="100%" h={5} />

                </VStack>
                <Skeleton w="100%" h={10} />

            </HStack>
            <Skeleton w="100%" h={10} />
        </VStack>
        <VStack cursor={"pointer"} w="100%" bg="white" p={5} paddingY={10} shadow={"lg"} rounded={"xl"} >
            <HStack width={"100%"} justifyContent={"space-between"} >
                <VStack alignItems={"flex-start"}   >
                    <Skeleton w="100%" h={10} />
                    <Skeleton w="100%" h={5} />

                </VStack>
                <Skeleton w="100%" h={10} />

            </HStack>
            <Skeleton w="100%" h={10} />
        </VStack>
        </VStack>}
        
        {role==="customer" && <>
        {projects.length > 0 ? <> <VStack width={"100%"} mt={10} spacing={10}>
            {projects.map(item=> <ProgressTab color={getProjectStatus(item.status).color} key={item.id} detail={getProjectStatus(item.status).detailstatus}
            id={item.id} name={item.name} progressname={getProjectStatus(item.status).status} progress={getProjectStatus(item.status).percent}  /> )}

        </VStack>
        <NextLink href="/create" >
        <VStack mt={20} p={20} cursor={"pointer"} as="a" href="/create" bgGradient={"linear(to-b,purple.300,purple.400)"} rounded={"2xl"} shadow={"lg"} >
            
            <Heading color="white" >สร้าง Project ✨</Heading>
            
        </VStack>
        </NextLink> 
         </> :
        <>
        {!isloadingdata && <VStack mt={20} p={20} bgGradient={"linear(to-b,yellow.100,yellow.200)"} rounded={"2xl"} shadow={"lg"} >
            <Heading color="gray.600" >เหมือนคุณยังไม่ได้สร้าง Project เลย ?</Heading>
            <NextLink href="/create" >
            <Button colorScheme={"purple"} rounded={"full"} size="lg" as="a" href="/create" >สร้าง Project ✨</Button>
            </NextLink>
        </VStack>}
        
        </>
        }

        </>}
        {(role === "developer" && projects?.length > 0 ) && <VStack width={"100%"} mt={10} spacing={10}>
            {projects.map(item=> <ProgressTab key={item.id} detail={getProjectStatus(item.status).detailstatus}
            id={item.id} name={item.name} progressname={getProjectStatus(item.status).status} progress={getProjectStatus(item.status).percent}  /> )}

        </VStack> }

        
        {(role === "developer" && !projects) && <VStack mt={20} p={20} bgGradient={"linear(to-b,purple.100,purple.200)"} rounded={"2xl"} shadow={"lg"} >
            <Heading color="gray.600" >เหมือนคุณยังไม่รับงาน Project เลย ?</Heading>
            <NextLink href="/work" >
            <Button colorScheme={"green"} rounded={"full"} size="lg" as="a" href="/work" >หา Project ที่เปิดอยู่ ✨</Button>
            </NextLink>
        </VStack>}

    </CropContainer>
    )
}

export default Dashboard