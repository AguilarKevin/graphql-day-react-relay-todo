import {Flex, Stack, Text, Button, useToken, Divider} from '@chakra-ui/react'
import {faPlusSquare} from '@fortawesome/pro-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import TodoListItem from './TodoListItem'

const tasks = {
  todo: [
    {
      id: 1,
      title: 'Learn React',
      description: 'Learn React and Chakra UI',
      completed: false,
      user: {
        id: 1,
        name: 'Kevin',
      },
    },
    {
      id: 3,
      title: 'Learn Node.js',
      description: 'Learn Node.js and Express',
      completed: false,
      user: {
        id: 1,
        name: 'Kevin',
      },
    },
  ],
  completed: [
    {
      id: 2,
      title: 'Learn Next.js',
      description: 'Learn Next.js',
      completed: true,
      user: {
        id: 1,
        name: 'Kevin',
      },
    },
  ],
}

export default function TodoList() {
  const [pink200] = useToken('colors', ['blue.200'])

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
          📋 Tasks - {tasks?.todo?.length ?? 0}
        </Text>
        <Divider />
        <Button
          leftIcon={
            <FontAwesomeIcon
              icon={faPlusSquare}
              color={`${pink200}`}
              fontSize="26px"
            />
          }
          variant="outline"
          rounded="2xl"
          size="lg"
          paddingBlock="7"
          width="100%"
          justifyContent="flex-start"
          iconSpacing="4"
        >
          Add new task
        </Button>

        <Stack width="full">
          {tasks?.todo?.map((task) => (
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
          ✅ Completed - {tasks?.completed?.length ?? 0}
        </Text>
        <Divider />
        <Stack width="full">
          {tasks?.completed?.map((task) => (
            <TodoListItem key={task.id} task={task} />
          ))}
        </Stack>
      </Stack>
    </Flex>
  )
}
