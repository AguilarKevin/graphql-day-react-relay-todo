import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Textarea,
  useDisclosure,
  useToken,
} from '@chakra-ui/react'
import {faPlusSquare} from '@fortawesome/pro-duotone-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {useMutation} from 'react-relay/hooks'
// import {graphql} from 'babel-plugin-relay/macro'
import {FastField, Form, Formik} from 'formik'

export default function TodoCreateModal() {
  const [pink200] = useToken('colors', ['blue.200'])

  const {isOpen, onOpen, onClose} = useDisclosure()

  // const [commit, isInFlight] = useMutation(graphql`
  //   mutation TodoListCreateMutation($input: TodoInput!) {
  //     todoCreate(input: $input) {
  //       id
  //       title
  //       description
  //       completed
  //       user {
  //         id
  //         name
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <Button
        leftIcon={
          <FontAwesomeIcon
            icon={faPlusSquare}
            color={`${pink200}`}
            fontSize="26px"
          />
        }
        onClick={onOpen}
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
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Todo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                title: '',
                description: '',
              }}
              onSubmit={handleSubmit}
            >
              <Stack as={Form} id="todo-create-form">
                <FastField name="title">
                  {({field, meta}) => (
                    <FormControl>
                      <FormLabel>Title</FormLabel>
                      <Input {...field} />
                    </FormControl>
                  )}
                </FastField>
                <FastField name="description">
                  {({field, meta}) => (
                    <FormControl>
                      <FormLabel>description</FormLabel>
                      <Textarea {...field} />
                    </FormControl>
                  )}
                </FastField>
              </Stack>
            </Formik>
          </ModalBody>

          <ModalFooter gap="4">
            <Button
              colorScheme="blue"
              form="todo-create-form"
              // isLoading={isInFlight}
              type="submit"
            >
              Submit
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )

  function handleSubmit(values, formikBag) {
    // commit({
    //   variables: {
    //     input: {
    //       title: values.title,
    //       description: values.description,
    //     },
    //   }
    //   updater: (store) => {
    //     const newTodo = store.getRootField('todoCreate')
    //     const todos = store.getRoot().getLinkedRecords('todos')
    //     store.getRoot().setLinkedRecords([...todos, newTodo], 'todos')
    //   },
    //   onCompleted: () => onClose(),
    // })
  }
}
