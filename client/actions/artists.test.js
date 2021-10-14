import { setArtists, addArtist, deleteArtist, updateArtist } from './artists'

const singleArtist = {
  name: 'Single test artist'
}

const multipleArtists = [
  { name: 'Single test artist' },
  { name: 'Single test artist 2' },
  { name: 'Single test artist 3' }
]

describe('Artist action creator tests', () => {
  test('setArtists action creator works', () => {
    const action = setArtists(multipleArtists)
    expect(action.type).toEqual('SET_ARTISTS')
    expect(action.artists).toHaveLength(3)
  })

  test('addArtist action creator works', () => {
    const action = addArtist(singleArtist)
    expect(action.type).toEqual('ADD_ARTIST')
    expect(action.artist).toEqual(singleArtist)
  })

  test('updateArtist action creator works', () => {
    const action = updateArtist(singleArtist)
    expect(action.type).toEqual('UPDATE_ARTIST')
    expect(action.artist).toEqual(singleArtist)
  })

  test('deleteArtist action creator works', () => {
    const action = deleteArtist(3)
    expect(action.type).toEqual('DELETE_ARTIST')
    expect(action.id).toEqual(3)
  })
})
