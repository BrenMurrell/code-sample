import artistsReducer from './artists'

const singleArtist = {
  id: 1,
  name: 'Single test artist'
}

const multipleArtists = [
  { id: 1, name: 'Single test artist' },
  { id: 2, name: 'Single test artist 2' },
  { id: 3, name: 'Single test artist 3' }
]

describe('artist reducer tests', () => {
  test('Ensure SET_ARTISTS works', () => {
    const initialState = []
    const action = {
      type: 'SET_ARTISTS',
      artists: multipleArtists
    }

    const finalState = artistsReducer(initialState, action)
    expect(finalState).toHaveLength(3)
    expect(finalState[2].name).toEqual('Single test artist 3')
    expect(initialState).not.toBe(finalState)
  })

  test('Ensure ADD_ARTIST works', () => {
    const initialState = multipleArtists
    const action = {
      type: 'ADD_ARTIST',
      artist: singleArtist
    }
    const finalState = artistsReducer(initialState, action)
    expect(finalState).toHaveLength(4)
    expect(initialState).not.toBe(finalState)
  })

  test('Ensure DELETE_ARTIST works', () => {
    const initialState = multipleArtists
    const action = {
      type: 'DELETE_ARTIST',
      artistId: 2
    }

    expect(initialState).toHaveLength(3)
    const finalState = artistsReducer(initialState, action)
    expect(finalState).toHaveLength(2)
    expect(initialState).not.toBe(finalState)
  })
  test('Ensure UPDATE_ARTIST works', () => {
    const initialState = multipleArtists
    const action = {
      type: 'UPDATE_ARTIST',
      artist: { id: 2, name: 'Changed name' }
    }
    const finalState = artistsReducer(initialState, action)
    expect(finalState).toHaveLength(3)
    expect(finalState[1].name).toEqual('Changed name')
    expect(finalState).not.toBe(initialState)
  })
})
