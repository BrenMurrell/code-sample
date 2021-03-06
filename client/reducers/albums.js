import { SET_ALBUMS, ADD_ALBUM, DELETE_ALBUM, UPDATE_ALBUM } from '../actions/albums'

const initialState = []

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALBUMS:
      return action.albums
    case ADD_ALBUM:
      return [...state, action.album]
    case DELETE_ALBUM:
      return state.filter(album => album.id !== action.albumId)
    case UPDATE_ALBUM:
      return state.map(album => album.id === action.album.id ? action.album : album)
    default:
      return state
  }
}

export default reducer
