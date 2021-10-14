import { addArtistAPI, getAllArtistsAPI, updateArtistAPI, deleteArtistAPI } from '../api/artists'

export const SET_ARTISTS = 'SET_ARTISTS'
export const ADD_ARTIST = 'ADD_ARTIST'
export const UPDATE_ARTIST = 'UPDATE_ARTIST'
export const DELETE_ARTIST = 'DELETE_ARTIST'

export const addArtist = (artist) => {
  return {
    type: ADD_ARTIST,
    artist
  }
}

export const setArtists = (artists) => {
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

export const addArtistThunk = (artistData) => {
  return dispatch => {
    return addArtistAPI(artistData)
      .then(newArtist => {
        return dispatch(addArtist(newArtist))
      })
  }
}

export const getArtistsAllThunk = () => {
  return dispatch => {
    return getAllArtistsAPI()
      .then(artists => {
        return dispatch(setArtists(artists))
      })
  }
}

export const updateArtistThunk = (id, artistData) => {
  return dispatch => {
    return updateArtistAPI(artistData)
      .then(updatedArtist => {
        return dispatch(updateArtist(updatedArtist))
      })
  }
}

export const deleteArtistThunk = (id) => {
  return dispatch => {
    return deleteArtistAPI(id)
      .then(() => {
        return dispatch(deleteArtist(id))
      })
  }
}
