import albumsReducer from './albums'

const singleAlbum = {
  id: 1,
  name: 'Single test album',
  artist: '1',
  condition: 'Good',
  notes: '',
  spotifyId: 'sid1',
  image: 'image1.jpg'
}

const multipleAlbums = [
  { id: 1, name: 'Single test album', artist: '1', condition: 'Good', notes: '', spotifyId: 'sid1', image: 'image1.jpg' },
  { id: 2, name: 'Single test album 2', artist: '2', condition: 'Good', notes: '', spotifyId: 'sid2', image: 'image2.jpg' },
  { id: 3, name: 'Single test album 3', artist: '3', condition: 'Good', notes: '', spotifyId: 'sid3', image: 'image3.jpg' }
]

describe('album reducer tests', () => {
  test('Ensure SET_ALBUMS works', () => {
    const initialState = []
    const action = {
      type: 'SET_ALBUMS',
      albums: multipleAlbums
    }

    const finalState = albumsReducer(initialState, action)
    expect(finalState).toHaveLength(3)
    expect(finalState[2].name).toEqual('Single test album 3')
    expect(initialState).not.toBe(finalState)
  })

  test('Ensure ADD_ALBUM works', () => {
    const initialState = multipleAlbums
    const action = {
      type: 'ADD_ALBUM',
      album: singleAlbum
    }
    const finalState = albumsReducer(initialState, action)
    expect(finalState).toHaveLength(4)
    expect(initialState).not.toBe(finalState)
  })

  test('Ensure DELETE_ALBUM works', () => {
    const initialState = multipleAlbums
    const action = {
      type: 'DELETE_ALBUM',
      albumId: 2
    }

    expect(initialState).toHaveLength(3)
    const finalState = albumsReducer(initialState, action)
    expect(finalState).toHaveLength(2)
    expect(initialState).not.toBe(finalState)
  })
  test('Ensure UPDATE_ALBUM works', () => {
    const initialState = multipleAlbums
    const action = {
      type: 'UPDATE_ALBUM',
      album: { id: 2, name: 'Changed name' }
    }
    const finalState = albumsReducer(initialState, action)
    expect(finalState).toHaveLength(3)
    expect(finalState[1].name).toEqual('Changed name')
    expect(finalState).not.toBe(initialState)
  })
})
