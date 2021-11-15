import { Box, Button, Heading, HStack, Stack, useBreakpointValue } from "@chakra-ui/react"
import NextLink from 'next/link'
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContextProvider"
const NavBar = ()=>{
    const {isloggedin,role} = useContext(AuthContext)
    const hidden = useBreakpointValue({base:true,md:false})
    return(
        <Stack direction={"row"} w="100%" justifyContent={"space-between"} minH="64px" p={3} paddingX={10} alignItems={"center"} bg="white" shadow={"base"} >
            <NextLink href={isloggedin ? "/dashboard" : "/"} >
            <Box as="a" href={isloggedin ? "/dashboard" : "/"} > <Heading size="md" >Weezy</Heading> </Box>
            </NextLink>
            {isloggedin && <HStack>
            {role !== "developer" && <NextLink href="/create" >
            <Button rounded={"3xl"} colorScheme={"purple"} hidden={hidden}  as="a" href="/create"  > ✨ Create new </Button>
            </NextLink>}
            <NextLink href="/account" >
            <Button rounded={"3xl"} colorScheme={"green"} as="a" href="/account" > 🙍 Account </Button>
            </NextLink>
            </HStack>}

        </Stack>
    )
}

export default NavBar