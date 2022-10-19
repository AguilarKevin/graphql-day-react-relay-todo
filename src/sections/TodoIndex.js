import {Container, Text, Stack} from '@chakra-ui/react'
import TodoList from '../components'

export default function TodoIndex() {
  return (
    <Container
      paddingBlock="10"
      minHeight="100vh"
      maxHeight="100vh"
      maxWidth="container.lg"
    >
      <Stack spacing="4">
        <Stack spacing="0" lineHeight="shorter">
          <Text fontSize="4xl" letterSpacing="tight" fontWeight="bold">
            Hello, Kevin 👋
          </Text>
          <Text fontSize="lg" letterSpacing="tighter" textColor="blue.200">
            My todo list
          </Text>
        </Stack>
        <TodoList />
      </Stack>
    </Container>
  )
}
