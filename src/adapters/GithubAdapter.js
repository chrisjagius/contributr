const fetcher = require('isomorphic-fetch')
const CONFIG = require('../../config.json')

let cursor

const queryFragment = `
pageInfo {
  hasNextPage
  hasPreviousPage
  endCursor
  startCursor
}
nodes {
    name
    languages(first: 1, orderBy: {field: SIZE, direction: DESC}) {
      edges {
        node {
          name
        }
      }
    }
    issues(first: 100, labels: $labels) {
      edges {
        node {
          title
          number
          url
          closed
        }
      }
    }
  }
}
}
}
`

const initialQuery = `
query ($username: String!, $labels: [String!]) {
  repositoryOwner(login: $username) {
    repositories(first: 100, privacy: PUBLIC) {
`

const nextQuery = `
query ($username: String!, $labels: [String!], $cursor: String!) {
  repositoryOwner(login: $username) {
    repositories(first: 100, privacy: PUBLIC, after: $cursor) {
`

const previousQuery = `
query ($username: String!, $labels: [String!], $cursor: String!) {
  repositoryOwner(login: $username) {
    repositories(first: 100, privacy: PUBLIC, before: $cursor) {
`

const queryVariables = {
  username: 'FreeCodeCamp', //needs to be dynamic
  labels: [
    'first timers welcome',
    'first-timers-only',
    'Level:Starter',
    'good first issue',
    'beginner',
    'good for beginner',
    'starter bug',
    'Good for New Contributors',
    'good-first-contribution',
    'help wanted',
  ],
}

function runQuery(
  query,
  { headers = {}, variables = {}, fetcher = fetch } = {}
) {
  let body = { query }

  if (Object.keys(variables).length) {
    body.variables = variables
  }

  return fetcher('https://api.github.com/graphql', {
    method: 'POST',
    headers: Object.assign(
      {
        Authorization: 'token ' + CONFIG.apiKey,
      },
      headers
    ),
    body: JSON.stringify(body),
  }).then(res => res.json())
}

function setCursor(data) {
  const { pageInfo } = data
  if (pageInfo.hasNextPage) {
    cursor = pageInfo.endCursor
  }
  if (pageInfo.hasPreviousPage) {
    cursor = pageInfo.startCursor
  }

  return data
}

export default class GithubAdapter {
  static getRepos() {
    const variables = Object.assign({}, queryVariables)
    return runQuery(initialQuery + queryFragment, {
      variables,
      fetcher,
    })
      .then(resp => resp.data.repositoryOwner.repositories)
      .then(setCursor)
  }

  static getNextRepos() {
    const variables = Object.assign({ cursor }, queryVariables)
    return runQuery(nextQuery + queryFragment, {
      variables,
    })
      .then(resp => resp.data.repositoryOwner.repositories)
      .then(setCursor)
  }

  static getPrevRepos() {
    const variables = Object.assign({ cursor }, queryVariables)
    return runQuery(previousQuery + queryFragment, {
      variables,
      fetcher,
    })
      .then(resp => resp.data.repositoryOwner.repositories)
      .then(setCursor)
  }
}

// console.log({ cursor })
// GithubAdapter.getRepos()
//   .then(() => console.log({ cursor }))
//   .then(GithubAdapter.getNextRepos)
//   .then(console.log)
