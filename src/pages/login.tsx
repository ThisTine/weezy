import {Box, Button, Container, Flex, Heading, HStack, Input, InputGroup, InputLeftAddon, InputRightAddon, Link, VStack} from '@chakra-ui/react'
import LoginComp from '../components/LoginComp'
import NextLink from 'next/link'

const Login = ()=>{
    return(
        <Container width="100vw" height="100vh">
            <VStack alignItems={"flex-start"} spacing={10} maxW={"container.sm"} width={"100%"} bg="white" mt={10} p={10} shadow={"base"} rounded={"2xl"}>
                <LoginComp/>
            <HStack w="100%" justifyContent={"space-between"}>

            <NextLink href={"/register"}>
            <Link href="/register">Register</Link>
            </NextLink>

            <NextLink href={"/resetpassword"}>
            <Link href="/resetpassword">Forgot password ?</Link>
            </NextLink>
            </HStack>
            
            </VStack>

        </Container>
    )
}

export default Login