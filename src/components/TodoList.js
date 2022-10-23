import {Flex, Stack, Text, Divider} from '@chakra-ui/react'
import TodoListItem from './TodoListItem'
import {useLazyLoadQuery} from 'react-relay/hooks'
import {graphql} from 'babel-plugin-relay/macro'
import TodoCreateModal from './TodoCreateModal'

export default function TodoList() {
  const {todos} = useLazyLoadQuery(
    graphql`
      query TodoListQuery {
        todos {
          id
          title
          description
          completed
          user {
            id
            name
          }
        }
      }
    `,
    {}
  )

  return (
    <Flex gap="4">
      <Stack
        flex="1"
        alignItems="flex-start"
        spacing="4"
        padding="6"
        rounded="2xl"
        backgroundColor="blackAlpha.100"
      >
        <Text fontSize="xl" paddingInline="2" fontWeight="bold">
          📋 Tasks
        </Text>
        <Divider />

        <TodoCreateModal />

        <Stack width="full">
          {todos
            .filter((todo) => !todo.completed)
            ?.map((task) => (
              <TodoListItem key={task.id} task={task} />
            ))}
        </Stack>
      </Stack>
      <Stack
        flex="1"
        alignItems="flex-start"
        spacing="4"
        padding="6"
        rounded="2xl"
        backgroundColor="blackAlpha.100"
        todo
      >
        <Text fontSize="xl" paddingInline="2" fontWeight="bold">
          ✅ Completed
        </Text>
        <Divider />
        <Stack width="full">
          {todos
            .filter((todo) => todo.completed)
            ?.map((task) => (
              <TodoListItem key={task.id} task={task} />
            ))}
        </Stack>
      </Stack>
    </Flex>
  )
}
