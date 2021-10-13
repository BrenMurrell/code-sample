const request = require('supertest')
const server = require('../server')

// const db = require('../db/artistsDb')

jest.mock('../db/artistsDb', () => {
  return {
    getArtistsAll: () => Promise.resolve(
      [{
        id: 1, name: 'Test artist 1'
      }, {
        id: 2, name: 'Test artist 2'
      }, {
        id: 3, name: 'Test artist 3'
      }, {
        id: 4, name: 'Test artist 4'
      }]
    ),
    getArtistById: () => Promise.resolve({
      id: 1, name: 'Test Floyd'
    }),
    addArtist: () => Promise.resolve([12]),
    updateArtist: () => Promise.resolve(1),
    deleteArtist: () => Promise.resolve(1)
  }
})

describe('Artist backend API routes tests', () => {
  test('CREATE: .post /api/v1/artists creates a new record', () => {
    const newArtist = {
      name: 'Test Artist'
    }

    const expected = 'Test Floyd'

    return request(server)
      .post('/api/v1/artists')
      .send(newArtist)
      .then(res => {
        const actual = res.body.name
        return expect(actual).toEqual(expected)
      })
  })

  test('READ: .get /api/v1/artists gets all artists', () => {
    const expected = 4
    expect.assertions(2)
    return request(server)
      .get('/api/v1/artists')
      .then(res => {
        const actual = res.body
        expect(actual).toHaveLength(expected)
        expect(actual[2].name).toEqual('Test artist 3')
        return null
      })
  })

  test('READ: .get /api/v1/artists/:id gets a single artist', () => {
    const expected = 'Test Floyd'
    expect.assertions(1)
    return request(server)
      .get('/api/v1/artists/1')
      .then(res => {
        const actual = res.body
        return expect(actual.name).toEqual(expected)
      })
  })

  test('UPDATE: .patch /api/v1/artists/:id updates a single artist', () => {
    const expected = 'Test Floyd'
    expect.assertions(1)
    return request(server)
      .patch('/api/v1/artists/1')
      .send({ artist: 2 })
      .then(res => {
        const actual = res.body
        return expect(actual.name).toEqual(expected)
      })
  })

  test('DELETE: .delete /api/v1/artists/:id deletes a single artist', () => {
    const expected = 1

    return request(server)
      .delete('/api/v1/artists/1')
      .then(res => {
        const actual = res.body
        return expect(actual).toEqual(expected)
      })
  })
})
