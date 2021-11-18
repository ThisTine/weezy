import { Box, Button, ChakraProvider, Container, HStack,useDisclosure,Modal, ModalBody,Text, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Progress, VStack,} from '@chakra-ui/react'
import "../css/index.css"
import theme from '../theme'
import { AppProps } from 'next/app'
import { useEffect, useState } from 'react'
import 'aos/dist/aos.css';
import Head from 'next/head'
import "@fontsource/prompt/300.css"
import "@fontsource/prompt"
import Script from 'next/script'
import NavBar from '../components/NavBar'
import NextNProgress from 'nextjs-progressbar';
import { useRouter } from 'next/router'
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports.js';
import AuthContextProvider from '../contexts/AuthContextProvider'
Amplify.configure({ ...awsconfig, ssr: true });
function MyApp({ Component, pageProps }: AppProps) {
  const [ison,setison] = useState(true)
  const router = useRouter()
  const [path,setpath] = useState<string>()

  useEffect(()=>{
    setpath(router.pathname)
  },[router.pathname])

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Script
      strategy='lazyOnload'
      src={'https://www.googletagmanager.com/gtag/js?id=G-F5HMHS3X6X'}
      />
      <Script 
      strategy='lazyOnload'>
         {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
       gtag('js', new Date());
        gtag('config', 'G-F5HMHS3X6X');`}
      </Script>
      <Head>
        <title>Weezy | You design We refine</title>
        <link rel="shortcut icon" href="/logo2.png"/>
        <meta property="og:url"            content="https://weezy.thistine.com"       />
        <meta property="og:title" content="Weezy | You design We refine"          />
        <meta property="og:description" content="Weezy-One-stop service platform ที่จะทำให้การออกแบบ Web Application และการค้นหา ติดต่อdeveloper สะดวกและเป็นระบบมากยิ่งขึ้น" />
        <meta property="og:image" content="https://weezy.thistine.com/ogimage2.jpg"  />
      </Head>
      <NextNProgress />
      <Modal isOpen={(path === "/login" || path === "/register") ? ison : false} onClose={()=>setison(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Weezy is running on beta</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>บริการ weezy ของเราให้บริการเป็น versoion beta อยู่ ณ ขณะนี้</Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="gray" mr={3} onClick={()=>setison(false)}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <AuthContextProvider>
      {/* <NavBar/>  */}
      {(path && path !== "/design/[id]") && <NavBar/> }

      
      <Component {...pageProps} />
      </AuthContextProvider>
      <VStack p={5}>
      <Text>Copyright © 2021 Weezy(Beta) All rights reserved.</Text>
    </VStack>
    </ChakraProvider>
  )
}

export default MyApp
