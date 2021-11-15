import { Avatar, Box, Grid, Heading, HStack, VStack,Text, Divider, Skeleton } from "@chakra-ui/react"
import { API, graphqlOperation } from "aws-amplify"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { GetUserQuery, User } from "../../API"
import CropContainer from "../../components/CropContainer"
import { getUser } from "../../graphql/queries"

const Dev = ()=>{
    const router = useRouter()
    const [userdata,setuserdata] = useState<User>()
    const [isfinding,setisfinding] = useState(true)
    useEffect(()=>{
        const getdata = async()=>{
            try{
             const query = router.query 
             const user = await (API.graphql(graphqlOperation(getUser,{id:query.id})) as Promise<{data:GetUserQuery}> )
            //  console.log(user)
             if(user.data.getUser && user.data.getUser.role === "developer"){
                 setuserdata(user.data.getUser)
             }
            }catch(err){
             console.log(err.message)
            }
            setisfinding(false)
         }
         if(router.query.id){
             
            getdata()
         }
    },[router.query])
    return(
        <CropContainer>
            
            <VStack w="100%" bg="white" p={10} paddingX={{base:3,md:10}} rounded={"2xl"} shadow={"lg"} >
                <Avatar size="2xl" />
            {(!userdata && !isfinding) && <Heading>Developer not found</Heading>}

                {(isfinding || userdata) &&  <><Heading> {(!userdata && !isfinding) && <Skeleton w="100%" h="50px" />} { userdata?.firstname } {userdata?.lastname}</Heading>

                <HStack paddingY={5} justifyContent={"flex-start"} w="100%"  > <Heading size="lg" color={"gray.700"} whiteSpace={"nowrap"} >About 😉 </Heading>
                 <Divider colorScheme={"black"} /> </HStack> 
                 <VStack w="100%" alignItems={"flex-start"}>
                 {(!userdata && isfinding) && <Skeleton w="100%" h="30px" />}
                 {(!userdata && isfinding) && <Skeleton w="100%" h="30px" />}
                 {(!userdata && isfinding) && <Skeleton w="100%" h="30px" />}
                 {(!userdata && isfinding) && <Skeleton w="100%" h="30px" />}

                    { userdata && <Text fontSize={"xl"}>  {userdata?.description} </Text>}
                 </VStack>

                <HStack paddingY={5} justifyContent={"flex-start"} w="100%"  > <Heading size="lg" color={"gray.700"} whiteSpace={"nowrap"} >Previous Work 🖊️ </Heading>
                 <Divider colorScheme={"black"} /> </HStack> 
                <Grid w="100%" templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}} gap={3} > 
                {(!userdata && isfinding) && <VStack  w="100%" bg="gray.200" p={5} rounded={"md"} > <Skeleton w="100%" h="30px" />
                    <Skeleton w="100%" h="16px" />
                    <Skeleton w="100%" h="16px" />
                    </VStack> }
                {(!userdata && isfinding) && <VStack  w="100%" bg="gray.200" p={5} rounded={"md"} > <Skeleton w="100%" h="30px" />
                    <Skeleton w="100%" h="16px" />
                    <Skeleton w="100%" h="16px" />
                    </VStack> }
                {(!userdata && isfinding) && <VStack  w="100%" bg="gray.200" p={5} rounded={"md"} > <Skeleton w="100%" h="30px" />
                    <Skeleton w="100%" h="16px" />
                    <Skeleton w="100%" h="16px" />
                    </VStack> }
                {(!userdata && isfinding) && <VStack  w="100%" bg="gray.200" p={5} rounded={"md"} > <Skeleton w="100%" h="30px" />
                    <Skeleton w="100%" h="16px" />
                    <Skeleton w="100%" h="16px" />
                    </VStack> }
                {userdata?.works && userdata.works.items.map(item=>{
                    return(
                    <Box key={item.id} w="100%" bg="gray.200" p={5} rounded={"md"} > <Heading>{item.title}</Heading> 
                    <Text>Detail: {item.detail} </Text>
                    <Text> {item.time} </Text>
                    </Box>
                    )
                })}
                </Grid> </>}
            </VStack>
        </CropContainer>
    )
}

export default Dev