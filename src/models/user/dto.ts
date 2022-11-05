import { gql } from 'graphql-tag'

export const SIGN_UP = gql`
  mutation signup($data: SignupInput!) {
    signup(data: $data) {
      accessToken
      refreshToken
    }
  }
`
