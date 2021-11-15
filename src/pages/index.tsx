import {
  Box,
  Heading,
  VStack,
  Text,
  Stack,
  Grid,
  Table,
  Tr,
  Th,
  Thead,
  Tbody,
  Td,
  Input,
  useToast,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  HStack
} from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import lottie from 'lottie-web'
import logo from '../animation/logo2.json'
import designicon from "../animation/design.json"
import Span from '../components/Span'
import question from '../animation/question.json'
import axios, { AxiosResponse } from 'axios'
import Aos from 'aos'
import NextLink from 'next/link'
import { AuthContext } from '../contexts/AuthContextProvider'



const Index = () => {
  const [islottie,setislottie] = useState(false)
  const toast = useToast({position:'top-left',status:"error"})
  const [type,settype] = useState<"developer"|"owner">()
  const [email,setemail] = useState<string>();
  const [isloading,setisloading] = useState(false)
  const { isloggedin } = useContext(AuthContext)
  const signup = async()=>{
    setisloading(true)
    try{
      const data:AxiosResponse<any , any> = await axios.post('/api/register',{email,type})
      // console.log(data.data)
      if(data.data.isok === true){
        toast({title:"ลงทะเบียนรับข่าวสารสำเร็จ !",status:'success'})
      }else{
      toast({title:"Error",description:data.data.message})
      }
    }catch(err){
      toast({title:"Error",description:"Unexpected error"})
    }
    setisloading(false)
    onClose()
  }
  const checkemail = (data:string)=>{
    const emailtype = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
    return emailtype.test(data)
  }
  const [isscroll,setisscroll] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure()

  let scroll = 0;

  useEffect(()=>{
    const getScroll = ()=>{
      if(scroll - window.pageYOffset > 0 || window.pageYOffset === 0 ){
        setisscroll(true);
      }else{
        setisscroll(false);
      }
      scroll = window.pageYOffset
    }
    Aos.init()
    
    window.addEventListener('scroll',getScroll)
    return ()=>window.removeEventListener('scroll',getScroll)
  },[])

  useEffect(()=>{
    const unsub = ()=>{ 
      if(!islottie){
        lottie.loadAnimation({
          container: document.querySelector("#logo"),
          animationData: logo,
          loop:false
        })
        lottie.loadAnimation({
          container: document.querySelector("#design"),
          animationData:designicon,
        })
        lottie.loadAnimation({
          container: document.querySelector("#question"),
          animationData:question,

        })
        setislottie(true)
      }

  }
    return unsub()
  },[])
  return(
  <>
        <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>กรอกข้อมูล</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading size="md" >คุณคือ ?</Heading>
          <Stack direction={"row"} mt={5} width={"100%"}>
            <Button flex="1" colorScheme={type === "developer" ?  "red" : "gray"} onClick={()=>settype( type === "developer" ? null : "developer")} >Developer</Button>
            <Button flex="1" colorScheme={type === "owner" ?  "red" : "gray"}  onClick={()=>settype( type === "owner" ? null : "owner")}>บุคคลทั่วไป</Button>
          </Stack>
          <Box mt={5} >
            <Text>อีเมล์</Text>
          <Input placeholder='tine@thistine.com' type="email" onChange={e=>setemail(e.target.value)}   />
          </Box>
          </ModalBody>
          <ModalFooter>
          <Button colorScheme="green" isDisabled={!type || !checkemail(email) } onClick={signup} isLoading={isloading} >ฉันสนใจจะรับข่าวสารจาก Weezy</Button>

          </ModalFooter>
        </ModalContent>
      </Modal>
    
      <Box  w="100%" paddingY={3} pos="fixed" top="0" transform={`translateY(${isscroll ?  "0%" :"-100%"})`} shadow="base" transition={"all 0.2s"} bg="white" zIndex={999}>
      <HStack justifyContent={"flex-end"} width="95%" >
      <NextLink href={isloggedin ? "/dashboard" : "/register" } >
        <Button size="md" colorScheme={"blue"}  rounded={"full"} as="a" href={isloggedin ? "/dashboard" : "/register" } >{isloggedin ? "เข้าสู่ระบบ" : "เริ่มต้นใช้งาน"}</Button>
        </NextLink>
      <Button colorScheme={"purple"} onClick={onOpen} rounded={"full"} >ฉันสนใจ Project นี้</Button>

      </HStack>
      </Box>
  
  <VStack spacing={0} bg="white" >
    <VStack pos="relative" w="100%" overflow="hidden"  bgGradient="linear(to-br,#FF00C7,#FF9900)" justifyContent="flex-start" h="100vh" alignItems="center">
    <Stack dir="column" w={["70%","90%","80%"]} justifyContent={"center"} alignItems={"center"} h="100%" spacing={5}>
    <Box w={["95%","80%","30%"]} id="logo" mt={10}></Box>
      <VStack pb={20}>
      <Text as="h1" fontSize="8xl" fontWeight="bold" data-aos="fade-up" color="white">Weezy</Text>
      <Text color="white" fontSize="xl" data-aos="fade"  data-aos-delay="200" >You design We refine</Text>
      <NextLink href={isloggedin ? "/dashboard" : "/register" } >
      <Button colorScheme={"blue"} size="lg" rounded={"full"} as="a" href={isloggedin ? "/dashboard" : "/register" }  > {isloggedin ? "เข้าสู่ระบบ" : "เริ่มต้นใช้งาน Weezy !"} </Button>
      </NextLink>
      </VStack>
    </Stack>
      
      <Box className="hero-line">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
      </svg>
    </Box>
    </VStack>
    <VStack paddingY={40} pos="relative" bg="white">
      <VStack w={["95%","80%","60%"]} spacing={10}>
      <Heading textAlign="center" size="2xl" data-aos="fade-up" > <Span>Weezy</Span> คืออะไร ?</Heading>
      <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}} gap={5}>
        <Box id="design"></Box>
        <VStack justifyContent={"center"} mt={10}>
          <Text fontSize="2xl" data-aos="fade-up" data-aos-delay="100" lineHeight="tall" > <Span>Weezy</Span>  เป็น One-stop service platform ที่จะทำให้ การออกแบบ
           Website หรือ Web Application การค้นหา และ ติดต่อdeveloper สะดวกและเป็นระบบมากยิ่งขึ้น</Text>
        </VStack>
      </Grid>
      <Box>
        
      </Box>
      </VStack>
      <div className="hero-line">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="dark"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="dark"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="dark"></path>
    </svg>
</div>
    </VStack>
    <VStack w="100%" pt={10} pb={40} bg="#001220" pos="relative" >
    <Box marginY={10} marginX={5}>
    <Heading color={"white"} data-aos="fade-up">ถ้าเราต้องการจะทำ Web-Application ซักตัวหนึ่ง เรามักจะมีคำถามมากมาย</Heading>
    </Box>
      <VStack  w={["95%","80%","60%"]} spacing={10}>
        <Grid templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}}>
        <Grid templateColumns="repeat(2,1fr)"  gap={5}>
          {["ทำยังไง ?","จะหา designer ที่ไหน ?","แล้ว design งานจะตรงใจเราแค่ไหน ?","จะหา developer จากไหน ?","แล้ว developer ที่หาได้จะดีแค่ไหน ?","ทั้งหมดราคาเท่าไหร่ ?"].map((item,id)=>{
            return(
              <VStack data-aos="flip-up" data-aos-delay={(id*50)} key={id} p={5} justifyContent="center"  bgGradient={"linear(to-br,#FF00C7,#FF9900)"} rounded={"2xl"}>
                <Heading size="md" color="white">{item}</Heading>
              </VStack>
            )
          })}
        </Grid>
        <Box id="question"></Box>
        </Grid>

      </VStack>
      <div className="custom-shape-divider-bottom-1634567472">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V6c0,21.6,291,111.46,741,110.26,445.39,3.6,459-88.3,459-110.26V0Z" className="shape-fill"></path>
    </svg>
    </div>
    </VStack>
    <VStack paddingY={40} bg="white" >
     <Box  mb={10}>
     <Heading data-aos="fade-up">Workflow การทำงานแสนง่ายของ Weezy </Heading>
     </Box>
      <Stack direction={["column","row","row"]}>
        {["designหน้าเว็บด้วยtools ของ weezy","ติดต่อหาdeveloper ผ่าน contractของเรา","ติดตามงาน คอยหา feedback","ได้เว็บไซต์เป็นของคุณเอง"].map((item,id)=><Box 
        position={"relative"} 
        data-aos="fade-up"
        data-aos-delay={id*50}
        bg="teal.100" 
        rounded={"3xl"}
        shadow={"lg"}
        overflow={"hidden"}
        p={10} key={item} > <Text zIndex={1} pos={"relative"} >{item}</Text> <Text opacity={0.2} filter="blur(3px)"  fontSize={"9xl"} pos="absolute" zIndex="0" top="0" right="0" >{id+1}</Text> </Box>)}
      </Stack>
    </VStack>
    <VStack pb={10} pt={10} bg="white">
      <Box pb={20}>
      <Heading size="xl" data-aos="fade-up" id="end"> <Span>Weezy</Span> เกิดมาเพื่อสิ่งนี้ !</Heading>
      </Box>
      <Grid  templateColumns={{base:"repeat(1,1fr)",md:"repeat(2,1fr)"}} gap={10} >
        <Table data-aos="fade-up" data-aos-delay="100" data-aos-anchor="#end">
          <Thead>
            <Tr>
              <Th> <Heading size="md">เพราะ <Span>Weezy</Span></Heading> </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>ช่วยหาdeveloper</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td>ช่วยคุณdesign web-app</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td>ช่วยให้คุณคุยกับ dev ได้ง่ายมากขึ้น</Td>
              <Td>✔️</Td>
            </Tr>
            <Tr>
              <Td>ช่วยให้คุณเสร็จงานได้เร็วมากยิ่งขึ้น</Td>
              <Td>✔️✔️✔️</Td>
            </Tr>
          </Tbody>
        </Table>
        <VStack justifyContent="center" data-aos="fade-up" data-aos-delay="150" data-aos-anchor="#end">
          <Heading size="md">ทิ้งอีเมลไว้เพื่อบอกว่าคุณสนใจ !</Heading>
          <Button onClick={onOpen} colorScheme={"teal"} width="100%"  >ลงทะเบียนความสนใจ</Button>
          {/* <Button colorScheme={"purple"} as="a" href="https://forms.gle/dncGcfYnF7h3wu5r9" target={"_blank"} width="100%" >ลงทะเบียนเพื่อทดสอบบริการของเรา</Button> */}

        </VStack>
      </Grid>
    </VStack>
    


    </VStack>
    </>
)}

export default Index
