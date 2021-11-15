import { VStack, Textarea, InputGroup, Input, InputRightAddon, Box,Button, useToast, Heading, Text } from "@chakra-ui/react"
import { API, graphqlOperation } from "aws-amplify"
import { useContext, useState } from "react"
import {useForm} from 'react-hook-form'
import { CreateOfferInput } from "../API"
import { AuthContext } from "../contexts/AuthContextProvider"
import { createOffer } from "../graphql/mutations"

interface DevSubmitInterface {
    description: string,
    price:number
}
const DevSubmit = ({projectID,issended}:{projectID:string,issended:boolean})=>{
    const { register,watch,formState:{isSubmitting},handleSubmit } = useForm<DevSubmitInterface>()
    const toast = useToast({position:'top-left',status:"success",isClosable:true})
    const { uid } = useContext(AuthContext)
    const [isalready,setisalready] = useState(issended)

    const submit = async({description,price}:DevSubmitInterface)=>{
        try{
            const input:CreateOfferInput = {
                description,
                price,
                projectID,
                offerOwnerID:uid
            }
            await API.graphql(graphqlOperation(createOffer,{input}))
            setisalready(true)
            toast({title:"success !"})
        }catch(err){
            toast({status:"error",title:"Error",description:err.message})
        }
    }
    return(
        <>
        {isalready ?
             <VStack w="100%" paddingY={20} >
        <Heading>เหมือนว่าคุณเคยส่งรายละเอียดงานไปแล้ว !</Heading>
        <Text>โปรดรอเจ้าของงานตอบกลับผ่าน Email</Text>
    </VStack> :
        <VStack w="100%" alignItems={"flex-end"} spacing={3} as="form" onSubmit={handleSubmit(handleSubmit(submit))}>
                        <Textarea {...register("description",{required:true})} placeholder="Project detail" ></Textarea>
                        <InputGroup>
                        <Input {...register("price",{required:true})} type="number" placeholder="20,000" />
                        <InputRightAddon>บาท</InputRightAddon>
                        </InputGroup>
                        <Box pt={10}>
                        <Button size="lg" colorScheme={"green"} type="submit" isDisabled={!watch("description") || !watch("price")} isLoading={isSubmitting} >Submit</Button>
                        </Box>
        </VStack>}
        </>
    )
}

export default DevSubmit