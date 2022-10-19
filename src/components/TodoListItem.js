import {Checkbox, Flex, Stack, Text} from '@chakra-ui/react'
import Proptypes from 'prop-types'

function TodoListItem({task: {title, description, completed, user}}) {
  return (
    <Flex
      backgroundColor="whiteAlpha.100"
      rounded="xl"
      paddingInline="6"
      paddingBlock="2"
      gap="4"
      width="100%"
    >
      <Checkbox size="lg" isChecked={completed} />
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
    id: Proptypes.number.isRequired,
    title: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    completed: Proptypes.bool.isRequired,
    user: Proptypes.shape({
      id: Proptypes.number.isRequired,
      name: Proptypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default TodoListItem
