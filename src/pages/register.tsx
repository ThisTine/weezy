import {Container,Link,VStack} from '@chakra-ui/react'
import NextLink from 'next/link'
import RegisterComp from '../components/RegisterComp'

const register = ()=>{
    return(
        <Container width="100vw" height="100vh">
            <VStack alignItems={"flex-start"} spacing={10} maxW={"container.sm"} width={"100%"} bg="white" mt={10} p={10} shadow={"base"} rounded={"2xl"}>
            <RegisterComp/>
            <NextLink href={"/login"}>
            <Link href="/login">Login</Link>
            </NextLink>
            </VStack>


        </Container>
    )
}
export default register