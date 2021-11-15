import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = {
  heading:"Prompt",
  body:"Prompt"
}

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
  },
  styles:{
    global:{
      "html, body":{
        backgroundColor: "gray.50"
      }
    }
  },
  
  fonts,
  breakpoints,
})

export default theme
