import { setAlbums, addAlbum, deleteAlbum, updateAlbum } from './albums'

const singleAlbum = {
  name: 'Single test album',
  artist: '8',
  condition: 'Good',
  notes: '',
  spotifyId: '6hmmX5UP4rIvOpGSaPerV8',
  image: 'https://vinylbase.s3.amazonaws.com/images/1603657379736tracy-chapman.jpg'
}

const multipleAlbums = [
  { name: 'Single test album', artist: '1', condition: 'Good', notes: '', spotifyId: 'sid1', image: 'image1.jpg' },
  { name: 'Single test album 2', artist: '2', condition: 'Good', notes: '', spotifyId: 'sid2', image: 'image2.jpg' },
  { name: 'Single test album 3', artist: '3', condition: 'Good', notes: '', spotifyId: 'sid3', image: 'image3.jpg' }
]

describe('Album action creator tests', () => {
  test('setAlbums action creator works', () => {
    const action = setAlbums(multipleAlbums)
    expect(action.type).toEqual('SET_ALBUMS')
    expect(action.albums).toHaveLength(3)
  })

  test('addAlbum action creator works', () => {
    const action = addAlbum(singleAlbum)
    expect(action.type).toEqual('ADD_ALBUM')
    expect(action.album.artist).toEqual('8')
  })

  test('updateAlbum action creator works', () => {
    const action = updateAlbum(singleAlbum)
    expect(action.type).toEqual('UPDATE_ALBUM')
    expect(action.album).toEqual(singleAlbum)
  })

  test('deleteAlbum action creator works', () => {
    const action = deleteAlbum(3)
    expect(action.type).toEqual('DELETE_ALBUM')
    expect(action.albumId).toEqual(3)
  })
})
