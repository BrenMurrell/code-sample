import albumsReducer from './albums'

const singleAlbum = {
  name: 'Single test album',
  artist: '1',
  condition: 'Good',
  notes: '',
  spotifyId: 'sid1',
  image: 'image1.jpg'
}

const multipleAlbums = [
  { name: 'Single test album', artist: '1', condition: 'Good', notes: '', spotifyId: 'sid1', image: 'image1.jpg' },
  { name: 'Single test album 2', artist: '2', condition: 'Good', notes: '', spotifyId: 'sid2', image: 'image2.jpg' },
  { name: 'Single test album 3', artist: '3', condition: 'Good', notes: '', spotifyId: 'sid3', image: 'image3.jpg' }
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
    expect(finalState).not.toEqual(initialState)
  })

  test('Ensure ADD_ALBUM works', () => {
    const initialState = multipleAlbums
    const action = {
      type: 'ADD_ALBUM',
      album: singleAlbum
    }
    const finalState = albumsReducer(initialState, action)
    expect(finalState).toHaveLength(4)
  })

  test.todo('Ensure DELETE_ALBUM works')
  test.todo('Ensure UPDATE_ALBUM works')
})
