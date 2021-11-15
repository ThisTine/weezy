import { VStack, HStack, Badge, Heading, Progress, Text, Avatar } from "@chakra-ui/react"
import { FC } from "react"
import { ProgressTabProps } from "../etc/types"
import { getDetailColor, getProgressIcon } from "../functions/Icons"
import NextLink from 'next/link'
const ProgressTab:FC<ProgressTabProps> = ({id,detail,name,progress,progressname,description,owner,issubmitted,color})=>{

    return(
        <NextLink href={`/project/${id}`}>
        <VStack cursor={"pointer"} as="a" href={`/project/${id}`} w="100%" bg="white" p={5} paddingY={10} shadow={"lg"} rounded={"xl"} >
            <HStack width={"100%"} justifyContent={"space-between"} >
                <VStack alignItems={"flex-start"}   >
                    {owner ? <Badge colorScheme={issubmitted ? "gray"  :"green"} >{issubmitted ? "Submitted" : "Opening"}</Badge> : <Badge colorScheme={ getDetailColor(detail)} fontSize="0.8em" >{detail}</Badge>}
                    <Heading>{name}</Heading>
                    {description && <Text whiteSpace={"pre-line"}> {description} </Text>}
                </VStack>
                {!owner && <Heading>{progressname} {getProgressIcon(progressname)}</Heading>}
                {owner && <VStack pr={5}> <Avatar/> <Heading>{owner.firstname}</Heading> </VStack>}
            </HStack>
            {!owner && <Progress rounded={"3xl"} colorScheme={color || "gray"  } value={progress} size={"md"} width={"100%"} /> }
            
        </VStack>
        </NextLink>
    )
}

export default ProgressTab