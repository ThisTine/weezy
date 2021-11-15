import { Button, Heading, HStack, Input, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { TextInputBoxProps } from '../etc/types'
const TextInputBox = ({value,id,placeholder,question,forward,isback,back,type,isrequire }:TextInputBoxProps)=>{
    const [text,settext] = useState<string>(value?.value || "")
    return(
        <VStack  spacing={5} alignItems={"flex-start"} w="100%" >
            <Heading>{question}</Heading>
            {type === "text" 
           && <Input defaultValue={value?.value} onChange={e=>settext(e.target.value)} isInvalid={ isrequire && !text} size="lg" variant={"outline"} placeholder={placeholder} /> }
           {type === "textarea" && <Textarea defaultValue={value?.value} isInvalid= { isrequire && !text} placeholder={placeholder} onChange={e=>settext(e.target.value)} ></Textarea>}
            <HStack justifyContent={isback ? "space-between"  :"flex-end"} w="100%" >
            {isback && <Button size="lg" colorScheme={"gray"}  
            rounded={"md"} onClick={()=>back({id,question:placeholder,value:text})} >Back</Button>}
            <Button size="lg" colorScheme={"green"}  
            rounded={"md"} isDisabled={ isrequire && !text} onClick={()=>forward({id,question:placeholder,value:text})} >Next</Button>
            </HStack>
        </VStack>
    )
}

export default TextInputBox