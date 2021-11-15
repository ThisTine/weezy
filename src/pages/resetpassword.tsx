import { Container, VStack, HStack, Link, Box, Button} from "@chakra-ui/react"
import NextLink from 'next/link'
import { useState } from "react"
import ResetPasswordComp from "../components/ResetPasswordComp"
import ResetPwdComp from "../components/ResetPwdComp"
import VerifyComp from "../components/VerifyComp"
const resetpassword = ()=>{
    const [email,setemail] = useState<string>()
    const [code,setcode] = useState<string>()

    return(
        <Container width="100vw" height="100vh">
        <VStack alignItems={"flex-start"} spacing={10} maxW={"container.sm"} width={"100%"} bg="white" mt={10} p={10} shadow={"base"} rounded={"2xl"}>
        {!email ? <ResetPwdComp setemail={setemail} /> :
        !code ? <VStack w="100%" alignItems={"flex-start"} spacing={10} > 
            <Button rounded={"full"} onClick={()=>setemail(null)} >Change email address</Button>
            <VerifyComp email={email} setconcode={setcode} issended={true} /> </VStack>: <ResetPasswordComp email={email} code={code} />}

        <HStack w="100%" justifyContent={"space-between"}>
        <NextLink href={"/login"}>
        <Link href="/login">Login</Link>
        </NextLink>

        <NextLink href={"/register"}>
        <Link href="/register">Register</Link>
        </NextLink>
        </HStack>
        
        </VStack>

    </Container>
    )
}

export default resetpassword