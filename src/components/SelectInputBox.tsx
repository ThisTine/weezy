import { VStack, Heading, Input, HStack, Button, Grid, Box } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { SelectInputBoxProps } from "../etc/types"


const SelectInputBox = ({value,id,question,isback,back,forward,choices,isother,placeholder,isrequire}:SelectInputBoxProps)=>{
    const [select,setselect] = useState(value?.value ? choices.includes(value.value) ? value.value : "other" : "")
    const [othertext,setothertext] = useState(value?.value ? !choices.includes(value.value) ? value.value : "" : "")
    return(
        <VStack spacing={5} alignItems={"flex-start"} w={"100%"}  >
            <Heading>{question}</Heading>
            <Grid templateColumns={{base:"repeat(1,1fr)",lg:"repeat(2,1fr)"}} gap={5} width="100%" >
                {choices.map((item,idx)=><Button size="lg" key={idx} colorScheme={select === item ? "green" : "gray"}  onClick={()=>setselect(item)} >{item}</Button>)}
                {isother && <Button size="lg" onClick={()=>setselect("other")} colorScheme={select === "other" ? "green" : "gray"}> 
                <Input defaultValue={value?.value ? !choices.includes(value.value) ? value.value : "" : ""} color="black" bg="white" isInvalid={select === "other" &&
                othertext === "" } 
                onChange={(e)=>setothertext(e.target.value)}                
                placeholder={placeholder} /> </Button>}
            </Grid>

            <HStack justifyContent={isback ? "space-between"  :"flex-end"} w="100%" >
            {isback && <Button size="lg" colorScheme={"gray"}  
            rounded={"md"} onClick={()=>back({id,question,value:select==="other" ? othertext : select })} isDisabled={isrequire && (!select || (select === "other" && !othertext)) } >Back</Button>}
            <Button size="lg" colorScheme={"green"}  
            rounded={"md"} onClick={()=>forward({id,question,value:select==="other" ? othertext : select })} isDisabled={isrequire && (!select || (select === "other" && !othertext)) } >Next</Button>
            </HStack>
        </VStack>
    )
}

export default SelectInputBox