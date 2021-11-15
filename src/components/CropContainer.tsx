import { Container, ContainerProps } from "@chakra-ui/react"
import { FC } from "react"

type CropContainerProps = {
    containerProps?: ContainerProps
}

const CropContainer:FC<CropContainerProps> = ( {children,containerProps})=>{
    return(
    <Container maxW="container.lg" mt={5} {...containerProps}>
        {children}
    </Container>)
}

export default CropContainer