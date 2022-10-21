// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(operation, variables) {
  const REACT_APP_BEARER_TOKEN = `1|ts3nxwxIrzjsbwwjvDCNG5GZJ2J7v4YbhTs5Tp20`

  // Fetch data from GitHub's GraphQL API:
  const response = await fetch('http://ndt-todos.test/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${REACT_APP_BEARER_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  })

  // Get the response as JSON
  return response.json()
}

export default fetchGraphQL
