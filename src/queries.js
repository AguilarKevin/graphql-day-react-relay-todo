import {graphql} from 'babel-plugin-relay/macro'

const todosQuery = graphql`
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
`

const todoCreateMutation = graphql`
  mutation TodoListCreateMutation($input: TodoInput!) {
    todoCreate(input: $input) {
      todo {
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
  }
`

const todoUpdateCompletedMutation = graphql`
  mutation TodoListUpdateCompletedMutation($completed: boolean!, $id: ID!) {
    todoUpdateCompleted(completed: $completed, id: $id) {
      todo {
        id
        completed
      }
    }
  }
`
