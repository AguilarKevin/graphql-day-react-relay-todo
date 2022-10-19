import React from 'react'
import {ChakraProvider, theme} from '@chakra-ui/react'
import TodoIndex from './sections/TodoIndex'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <TodoIndex />
    </ChakraProvider>
  )
}

export default App
