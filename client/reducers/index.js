import { combineReducers } from 'redux'

import albums from './albums'
import artists from './artists'

export default combineReducers({
  albums,
  artists
})
