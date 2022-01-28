/*
import {gql} from 'apollo-boost'

export const GET_SONGS = gql`
query getSongs {
  songs(order_by: {created_at: desc}) {
    artist
    duration
    id
    thumbnail
    title
    url
  }
}

`*/
import {gql} from 'apollo-boost'

export const GET_QUEUED_SONGS = gql`
    query  getQueuedSongs {
        queue @client {
        id
        duration
        title
        artist
        thumbnail
        url
     }
    }
`