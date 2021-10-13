const request = require('supertest')
const server = require('../server')

// const db = require('../db/albumsDb')

jest.mock('../db/albumsDb', () => {
  return {
    getAlbumsAll: () => Promise.resolve(
      [{
        id: 1, name: 'Test album 1', artist: 1, condition: 'Average', notes: 'This is one of my all time favourite albums. Really can\'t beat listening to the opening with it\'s wild thumping heartbeat at ear bleeding volume. A wonder in modern musical production.\nVinyl in okay condition, sleeve fairly tatty.', image: 'https://vinylbase.s3.amazonaws.com/images/darkside.jpg', spotifyId: '4LH4d3cOWNNsVw41Gqt2kv'
      }, {
        id: 2, name: 'Test album 2', artist: 3, condition: 'Excellent', notes: 'Includes full colour booklet with lyrics and original artwork.', image: 'https://vinylbase.s3.amazonaws.com/images/war-of-the-worlds.jpg', spotifyId: '7ligZljXfUtcKPCotWul5g'
      }, {
        id: 3, name: 'Test album 3', artist: 4, condition: 'Great', notes: 'Bought from Greytown. Really good condition.', image: 'https://vinylbase.s3.amazonaws.com/images/making-movies.jpg', spotifyId: '3wvclpO3LJmpSQGQ9gBa2a'
      }, {
        id: 4, name: 'Test album 4', artist: 4, condition: 'Good', notes: 'Vinyl is in good condition, sleeve is pretty rough', image: 'https://vinylbase.s3.amazonaws.com/images/dire-straits.jpg', spotifyId: '2rCS6Xwx32V27pvgFzLzlT'
      }]
    ),
    getAlbumById: () => Promise.resolve({
      id: 1, name: 'Dark Side of the Tests', artist: 1, condition: 'Average', notes: 'This is one of my all time favourite albums. Really can\'t beat listening to the opening with it\'s wild thumping heartbeat at ear bleeding volume. A wonder in modern musical production.\nVinyl in okay condition, sleeve fairly tatty.', image: 'https://vinylbase.s3.amazonaws.com/images/darkside.jpg', spotifyId: '4LH4d3cOWNNsVw41Gqt2kv'
    }),
    addAlbum: () => Promise.resolve([12]),
    updateAlbum: () => Promise.resolve(1),
    deleteAlbum: () => Promise.resolve(1)
  }
})

describe('Album backend API routes tests', () => {
  test('CREATE: .post /api/v1/albums creates a new record', () => {
    const newAlbum = {
      name: 'Dark Side of the Tests', artist: 1, condition: 'Average', notes: 'This is one of my all time favourite albums. Really can\'t beat listening to the opening with it\'s wild thumping heartbeat at ear bleeding volume. A wonder in modern musical production.\nVinyl in okay condition, sleeve fairly tatty.', image: 'https://vinylbase.s3.amazonaws.com/images/darkside.jpg', spotifyId: '4LH4d3cOWNNsVw41Gqt2kv'
    }

    const expected = 'Dark Side of the Tests'

    return request(server)
      .post('/api/v1/albums')
      .send(newAlbum)
      .then(res => {
        const actual = res.body.name
        return expect(actual).toEqual(expected)
      })
  })

  test('READ: .get /api/v1/albums gets all albums', () => {
    const expected = 4
    expect.assertions(2)
    return request(server)
      .get('/api/v1/albums')
      .then(res => {
        const actual = res.body
        expect(actual).toHaveLength(expected)
        expect(actual[2].name).toEqual('Test album 3')
        return null
      })
  })

  test('READ: .get /api/v1/albums/:id gets a single album', () => {
    const expected = 'Dark Side of the Tests'
    expect.assertions(1)
    return request(server)
      .get('/api/v1/albums/1')
      .then(res => {
        const actual = res.body
        return expect(actual.name).toEqual(expected)
      })
  })

  test('UPDATE: .patch /api/v1/albums/:id updates a single album', () => {
    const expected = 'Dark Side of the Tests'
    expect.assertions(1)
    return request(server)
      .patch('/api/v1/albums/1')
      .send({ artist: 2 })
      .then(res => {
        const actual = res.body
        return expect(actual.name).toEqual(expected)
      })
  })

  test('DELETE: .delete /api/v1/albums/:id deletes a single album', () => {
    const expected = 1

    return request(server)
      .delete('/api/v1/albums/1')
      .then(res => {
        const actual = res.body
        return expect(actual).toEqual(expected)
      })
  })
})
