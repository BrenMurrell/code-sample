import { getAllArtistsAPI } from '../api/artists'

export const SET_ARTISTS = 'SET_ARTISTS'
export const ADD_ARTIST = 'ADD_ARTIST'
export const DELETE_ARTIST = 'DELETE_ARTIST'

const setArtists = (artists) => {
  return {
    type: SET_ARTISTS,
    artists
  }
}

export const updateArtist = (artist) => {
  return {
    type: UPDATE_ARTIST,
    artist
  }
}

export const deleteArtist = (id) => {
  return {
    type: DELETE_ARTIST,
    id
  }
}

export const getArtistsAll = () => {
  return dispatch => {
    return getAllArtistsAPI()
      .then(artists => {
        return dispatch(setArtists(artists))
      })
  }
}
