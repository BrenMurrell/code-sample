import { getAllAlbumsAPI, deleteAlbumAPI, updateAlbumAPI } from '../api/albums'

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

export const deleteAlbum = (albumId) => {
  return {
    type: DELETE_ALBUM,
    albumId
  }
}

export const getAllAlbumsThunk = () => {
  return dispatch => {
    return getAllAlbumsAPI()
      .then(albums => {
        return dispatch(setAlbums(albums))
      })
  }
}

export const deleteAlbumThunk = (id) => {
  return dispatch => {
    return deleteAlbumAPI(id)
      .then(() => {
        return dispatch(deleteAlbum(id))
      })
  }
}

export const updateAlbumThunk = (album) => {
  return dispatch => {
    return updateAlbumAPI(album.id, album)
      .then(updatedAlbum => {
        return dispatch(updateAlbum(updatedAlbum))
      })
  }
}
