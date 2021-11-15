import { Badge, Box, Button, CircularProgress, Grid, Heading, HStack, Input, InputGroup, InputLeftAddon, Text, useToast, VStack } from "@chakra-ui/react"
import { useContext, useEffect, useState } from "react"
import CropContainer from "../components/CropContainer"
import SelectInputBox from "../components/SelectInputBox"
import TextInputBox from "../components/TextInputBox"
import mockup from '../etc/mockupquestion.json'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { ProjDetailInterface } from "../etc/types"
import { API, graphqlOperation } from "aws-amplify"
import { createProject } from "../graphql/mutations"
import { CreateProjectInput, Project } from "../API"
import { AuthContext } from "../contexts/AuthContextProvider"
import { useRouter } from "next/router"

const create = ()=>{
    const [projdetail,setprojdetail] = useState<ProjDetailInterface[]>([])
    const router = useRouter()
    const {uid,isloading,isloggedin,role} = useContext(AuthContext)
    const [q,setq] = useState(0);
    const toast = useToast({position:'top-left',status:"success"})
    const [isbtnloading,setisloading] = useState(false)
    useEffect(()=>{
        if(!isloading && isloggedin && role === "developer"){
            toast({status:"error",title:"Error",description:"Developer cannot create project"})
            router.replace("/dashboard")
        }
    },[isloading,isloggedin,role])
    const forward = (value:ProjDetailInterface)=>{
        let isrep = false
        const projdetailreplace = projdetail.map(item=>{
            if(item.id === value.id){
                isrep = true
                return value
            }
            return item
        })
        if(isrep){
            setprojdetail(projdetailreplace)
        }else{
            setprojdetail([...projdetail,value])
        }
        setq(q+1)
    }
    const back = (value:ProjDetailInterface)=>{
        let isrep = false
        const projdetailreplace = projdetail.map(item=>{
            if(item.id === value.id){
                isrep = true
                return value
            }
            return item
        })
        if(isrep){
            setprojdetail(projdetailreplace)
        }else{
            setprojdetail([...projdetail,value])
        }
        setq(q-1)
    }
    const [mode,setmode] = useState<string>();
    const [link,setlink] = useState<string>();

    const submit  = async ()=>{
        setisloading(true)
        try{
            const input:CreateProjectInput = {
                name: projdetail.filter(item=>item.id === "title")[0].value,
                description: projdetail.filter(item=>item.id === "description")[0].value,
                other: JSON.stringify(projdetail),
                ownerID: uid,
                status: "reviewing",
                designtool: "link",
                designdata: link
            }
            const data = await API.graphql(graphqlOperation(createProject,{input:input})) as {data:{createProject:Project}}
            if(data.data.createProject.id){
            toast({title:"Success !"})
            router.replace(`/project/${data.data.createProject.id}`)
            }
        }catch(err){
            toast({status:"error",title:"Error",description:err.message})
        }
        setisloading(false)

    }

    const ondesigntools = async ()=>{
        setisloading(true)
        try{
            const input:CreateProjectInput = {
                name: projdetail.filter(item=>item.id === "title")[0].value,
                description: projdetail.filter(item=>item.id === "description")[0].value,
                other: JSON.stringify(projdetail),
                ownerID: uid,
                status: "designing",
                designtool: "weezy",
            }
            const data = await API.graphql(graphqlOperation(createProject,{input:input})) as {data:{createProject:Project}}
            if(data.data.createProject.id){
            toast({title:"Success !"})
            router.replace(`/design/${data.data.createProject.id}`)
            }
        }catch(err){
            toast({status:"error",title:"Error",description:err.message})
        }
        setisloading(false)

    }

    return(
    <CropContainer containerProps={{minH:"100vh",mb:10}}>
        <VStack shadow={"base"} spacing={5} alignItems={"flex-start"}  bg="white" p={10} rounded={"2xl"} w={"100%"} >
        {mockup.map((item,idx) =>{
            if(idx === q){
                if(item.type==="text" || item.type==="textarea"){
                    return <TextInputBox key={idx} id={item.id} question={item.question} 
                    placeholder={item.placeholder} isrequire={item?.isrequire || false} forward={forward}
                    type={item.type}
                    isback={ idx > 0 }
                    value={projdetail.filter(dax=>(dax.id === item.id))[0]}
                    back={back}
                />
                }
                if(item.type === "select"){
                    return <SelectInputBox id={item.id}  key={idx} question={item.question} 
                    placeholder={item.placeholder} isrequire={item?.isrequire || false} forward={forward}
                    isback={ idx > 0 }
                    back={back}
                    value={projdetail.filter(dax=>(dax.id === item.id))[0]}
                    choices={item.choices}
                    isother={true}
                    />
                }
            }
        }        
            ) }
        
        { q >= mockup.length &&
        <>
            <VStack alignItems={"center"} width={"100%"} >
                <Heading > คุณมี Design สำหรับ เว็บไซต์ของคุณเเล้วหรือยัง ? </Heading>
                { !mode && <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}} gap={5} >
                     <VStack p={10} justifyContent={"center"}
                     cursor={"pointer"} rounded={"2xl"} 
                     bgGradient={"linear(to-b,red.100,red.300)"} onClick={()=>setmode("figma")} > <Heading >Figma / Adobe XD</Heading> </VStack>
                    <VStack p={10}  justifyContent={"center"} 
                    
                    onClick={isloading ? ()=>{} : ()=>ondesigntools()} cursor={"pointer"} rounded={"2xl"} bgGradient={"linear(to-b,purple.100,purple.300)"} >
                    {isloading ? <CircularProgress size="100px" thickness={5} isIndeterminate /> : <> <Text>เริ่ม Design ด้วย</Text> 
                    <Heading> Designing tool </Heading>
                    <Text>ของเรา</Text>
                    <Badge colorScheme={"gray"} >Beta</Badge>
                    </>}
                    </VStack>
                </Grid> }

                {mode === "figma" && <VStack bg="blue.100" spacing={10} rounded="3xl" pos={"relative"} w="100%" p={10} pt={0} >
                <HStack w="100%" pt={5} >
                    <Button onClick={()=>setmode(null)} > <ChevronLeftIcon/>  </Button>
                    <Heading size={"md"}> Figma / Adobe XD Link </Heading>
                </HStack>
                 <VStack w="100%" pb={10}> <InputGroup  width="100%" size="lg">
                    <InputLeftAddon>🔗</InputLeftAddon>
                    <Input bg="white" placeholder="https://www.figma.com/file/m1jx3r9n5ksP2YrOXLUnTL" onChange={(e)=>setlink(e.target.value)} />
                    </InputGroup></VStack> </VStack> }
            </VStack>
            <HStack justifyContent={"space-between"} width="100%">
            <Button onClick={()=>back({id:"design",question:"design",value:"figma"})} size="lg"  >Back</Button>
            {(link && mode === "figma" )&&<Button colorScheme={"green"} size="lg" onClick={()=>submit()} isLoading={isbtnloading} >ค้นหา Dev 💻</Button>}
            </HStack>
        </>
        }

    </VStack>
        
        
        
    </CropContainer>
    )
}

export default create