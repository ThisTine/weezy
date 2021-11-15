import { Container, VStack, Link } from "@chakra-ui/react"
import { useRouter } from "next/dist/client/router"
import { useEffect, useState } from "react"
import VerifyComp from "../../components/VerifyComp"
import NextLink from 'next/link'

const verify = ()=>{
    const router = useRouter()
    const [email,setemail] = useState<string>()
    useEffect(()=>{
        let {email} = router.query
        if(email){
            if( typeof email !== "string"){
                email = email[0]
            }
            setemail(email)
        }
    },[router.query])
    return(
        <Container width="100vw" height="100vh">
            <VStack alignItems={"flex-start"} spacing={10} maxW={"container.sm"} width={"100%"} bg="white" mt={10} p={10} shadow={"base"} rounded={"2xl"}>
            {email && <VerifyComp email={email}/>}
            <NextLink href="/login">
            <Link href="/login" >Login</Link>
            </NextLink>
            </VStack>


        </Container>
    )
}

export default verify