import { Box } from "@chakra-ui/react"

const Span = ({children})=>{
    return(<Box as="span" paddingX={3} paddingY={1.5} rounded="xl" color="white" fontWeight="bold" shadow="2xl" bgGradient="linear(to-tr,#FF00C7,#FF9900)">
        {children}
    </Box>)
}

export default Span