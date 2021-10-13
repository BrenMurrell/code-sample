/* eslint-disable promise/no-nesting */
const knex = require('knex')
const config = require('./knexfile').test

const testDb = knex(config)

const db = require('./artistsDb')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('Artist database tests', () => {
  test('CREATE: Can add a new artist', () => {
    const newArtist = {
      name: 'Test Artist'
    }

    const expected = 'Test Artist'

    return db.addArtist(newArtist, testDb)
      .then(newIds => {
        const actual = newIds[0]
        expect(actual).toEqual(10)
        return actual
      })
      .then(newId => {
        return db.getArtistById(newId, testDb)
          .then(newArtist => {
            const actual = newArtist.name
            return expect(actual).toEqual(expected)
          })
      })
  })

  test('READ: can select a single artist by id', () => {
    const expected = 'Jeff Wayne'

    return db.getArtistById(3, testDb)
      .then(actual => {
        return expect(actual.name).toEqual(expected)
      })
  })

  test('READ: can select all artists', () => {
    const expected = 8

    return db.getArtistsAll('name', testDb)
      .then(actual => {
        return expect(actual).toHaveLength(expected)
      })
  })

  test('UPDATE: can update an artist in the database', () => {
    const newData = {
      name: 'Updated artist'
    }

    const expected = 'Updated artist'

    const artistId = 1

    return db.updateArtist(artistId, newData, testDb)
      .then(() => {
        return db.getArtistById(artistId, testDb)
          .then(actual => {
            return expect(actual.name).toEqual(expected)
          })
      })
  })

  test('DELETE: can delete an artist from the database', () => {
    const artistToDelete = 1
    const expected = 7

    // expect.assertions(3)

    return db.deleteArtist(artistToDelete, testDb)
      .then(deleteCount => {
        return expect(deleteCount).toBeTruthy()
      })
      .then(() => {
        return db.getArtistById(artistToDelete, testDb)
          .then(artist => {
            return expect(artist).toBeFalsy()
          })
      })
      .then(() => {
        return db.getArtistsAll('name', testDb)
          .then(artists => {
            return expect(artists).toHaveLength(expected)
          })
      })
  })
})
