import {ChakraProvider} from '@chakra-ui/react'
import TodoIndex from './sections/TodoIndex'

function App() {
  return (
    <ChakraProvider resetCSS>
      <TodoIndex />
    </ChakraProvider>
  )
}

export default App
