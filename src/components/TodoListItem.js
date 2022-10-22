import {Checkbox, Flex, Stack, Text} from '@chakra-ui/react'
import Proptypes from 'prop-types'
// import {useMutation} from 'react-relay/hooks'
// import {graphql} from 'babel-plugin-relay/macro'

function TodoListItem({task: {id, title, description, completed, user}}) {
  // const [commit, isInFlight] = useMutation(graphql`
  //   mutation TodoListItemTodoUpdateCompletedMutation(
  //     $completed: Boolean!
  //     $todoId: ID!
  //   ) {
  //     todoUpdateCompleted(completed: $completed, todoId: $todoId) {
  //       id
  //       completed
  //     }
  //   }
  // `)

  return (
    <Flex
      backgroundColor="whiteAlpha.100"
      rounded="xl"
      paddingInline="6"
      paddingBlock="2"
      gap="4"
      width="100%"
    >
      <Checkbox
        size="lg"
        isChecked={completed}
        onChange={() => {
          // commit({
          //   variables: {
          //     completed: !completed,
          //     todoId: id,
          //   },
          //   updater: (store) => {
          //     const todo = store.get(id)
          //     todo.setValue(!completed, 'completed')
          //   },
          // })
        }}
      />
      <Stack
        spacing="0"
        letterSpacing="tight"
        textDecoration={completed ? 'line-through' : 'none'}
      >
        <Text fontSize="lg" fontWeight="bold" textColor="blue.200">
          {title}
        </Text>
        <Text fontSize="sm">{description}</Text>
      </Stack>
    </Flex>
  )
}

TodoListItem.propTypes = {
  task: Proptypes.shape({
    id: Proptypes.string.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired,
    user: Proptypes.shape({
      id: Proptypes.string.isRequired,
      name: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default TodoListItem
