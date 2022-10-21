import {ChakraProvider} from '@chakra-ui/react'
import {RelayEnvironmentProvider} from 'react-relay'
import {Environment, Network, RecordSource, Store} from 'relay-runtime'
import fetchGraphQL from './relay/fetchFunction'
import TodoIndex from './sections/TodoIndex'

const environment = new Environment({
  network: Network.create(fetchGraphQL),
  store: new Store(new RecordSource()),
})

function App() {
  return (
    <RelayEnvironmentProvider environment={environment}>
      <ChakraProvider>
        <TodoIndex />
      </ChakraProvider>
    </RelayEnvironmentProvider>
  )
}

export default App
