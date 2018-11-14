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

class GithubAdapter {
  static runQuery(
    query,
    { headers = {}, variables = {}, fetcher = fetch } = {}
  ) {
    let body = { query }

    if (Object.keys(variables).length) {
      body.variables = variables
    }

    return fetch('https://api.github.com/graphql', {
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
}

GithubAdapter.runQuery(initialQuery + queryFragment, {
  variables,
  fetcher,
}).then(console.log)
