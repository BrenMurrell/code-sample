import { getAllAlbumsAPI } from '../api/albums'

export const ADD_ALBUM = 'ADD_ALBUM'
export const SET_ALBUMS = 'SET_ALBUMS'
export const UPDATE_ALBUM = 'UPDATE_ALBUM'
export const DELETE_ALBUM = 'DELETE_ALBUM'

export const addAlbum = (album) => {
  return {
    type: ADD_ALBUM,
    album
  }
}

export const setAlbums = (albums) => {
  return {
    type: SET_ALBUMS,
    albums
  }
}

export const updateAlbum = (album) => {
  return {
    type: UPDATE_ALBUM,
    album
  }
}

export const deleteAlbum = (id) => {
  return {
    type: DELETE_ALBUM,
    id
  }
}

export const getAllAlbumsAction = () => {
  return dispatch => {
    return getAllAlbumsAPI()
      .then(albums => {
        return dispatch(setAlbums(albums))
      })
  }
}
