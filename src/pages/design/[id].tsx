import { useCallback, useContext, useEffect, useState } from 'react';
import grapesjs from 'grapesjs'
import "grapesjs/dist/css/grapes.min.css";
import "grapesjs/dist/grapes.min.js";
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js'
import 'grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css'
import { Badge, Box, Button, CircularProgress, Heading, HStack, useToast, VStack } from '@chakra-ui/react';
import NextLink from 'next/link'
import { API, graphqlOperation } from 'aws-amplify';
import { updateProject } from '../../graphql/mutations';
import { Project, UpdateProjectInput } from '../../API';
import { useRouter } from 'next/router';
import { getProject } from '../../graphql/queries';
import { getid } from '../../functions/getId';
import { AuthContext } from '../../contexts/AuthContextProvider';


const design = ()=>{
    const {uid} = useContext(AuthContext)
    const [editor,seteditor] = useState<any>()
    const router = useRouter()
    const [project,setProject] = useState<Project>()
    const toast = useToast({position:'top-left',status:"success",isClosable:true})
    const [isiniting,setisiniting] = useState(true)
    const [isloading,setisloaing] = useState(false) 
    const [ison,setison] = useState(true)

    const getdata = async ()=>{
        try{
            const projectdata = await API.graphql(graphqlOperation(getProject,{id:getid(router.query.id)})) as {data:{getProject:Project}}
            if(projectdata.data.getProject){
                setProject(projectdata.data.getProject)
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        if(router.query.id){
            getdata()
        }
    },[router.query.id])

    useEffect(()=>{
        if(project){
            setisiniting(false)
            const ined = grapesjs.init({
                container:"#weezydesign",
                plugins:["gjs-preset-webpage"],
                fromElement: false,
                components: JSON.parse(project.designdata)?.html  || "" ,
                style: JSON.parse(project.designdata)?.css || "" ,
                panels: { defaults: [] },
                height:"calc(100vh - 50px)",
                width:"100vw",
                editable: false,
                storageManager: {
                    autoload: false,
                  }
            })
            
            ined.runCommand('sw-visibility')
                ined.on("load",()=>{
                    if(!(project.ownerID === uid || project.developerID === uid)){
                    ined.runCommand("core:preview")
                }
                })

            seteditor(ined)
        }
    },[project])

    const submitdata = async ()=>{
        const html = editor.getHtml()
        const css = editor.getCss()
        const input:UpdateProjectInput = {
            id: project?.id ,
            designdata: JSON.stringify({css:css,html:html})
        } 
        setisloaing(true)
        try{
            if(project && (project.ownerID === uid || project.developerID === uid) ){
                await API.graphql(graphqlOperation(updateProject,{input}))
            }else{
                throw new Error("You cannot save this file !")
            }
            toast({title:"Success"})

        }catch(err){
            toast({title:"Error",description:"Please try again!"+err,status:"error"})
            console.log(err)
        }
        setisloaing(false)
    }

    const saveandnext = async ()=>{
        await submitdata()
        setisloaing(true)
        const input:UpdateProjectInput = {
            id: project?.id ,
            status:"reviewing"
        } 
        setisloaing(true)
        try{
            await API.graphql(graphqlOperation(updateProject,{input}))
            toast({title:"Success"})
            router.replace(`/project/${project.id}`)
        }catch(err){
            toast({title:"Error",description:"Please try again!",status:"error"})
            console.log(err)
        }
        setisloaing(false)
    }


    
    

    return(
        <Box>

        <HStack justifyContent={"space-between"} paddingX={10} w="100%" h="50px" > 
        <NextLink href="/dashboard" >
            <HStack as="a" href="/dashboard" > <Heading size="md" >Weezy</Heading> <Badge colorScheme="gray" >editor beta 0.1</Badge> </HStack>
        </NextLink>
        { (project?.ownerID === uid || project?.developerID === uid) &&  <HStack>
        <Button colorScheme={"blue"} rounded={"full"} onClick={()=>submitdata()} isLoading={isloading} > {project?.status === "designing" ? "💾 Save draft" : "💾 Save"}</Button>
        {project?.status === "designing" && <Button colorScheme={"green"} rounded={"full"} onClick={()=>saveandnext()} isLoading={isloading} > 💾 Save and Finish</Button>}
        </HStack>}
        </HStack>
        {isiniting && <VStack w="100%" p={20}>
            <CircularProgress size={"200px"} isIndeterminate />
            <Heading>We are getting your design from our database !</Heading>
        </VStack>}
        <div id="weezydesign"></div>
        </Box>
    )
}

export default design