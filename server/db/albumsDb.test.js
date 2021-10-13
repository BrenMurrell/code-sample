/* eslint-disable promise/no-nesting */
const knex = require('knex')
const config = require('./knexfile').test

const testDb = knex(config)

const db = require('./albumsDb')

beforeAll(() => {
  return testDb.migrate.latest()
})

beforeEach(() => {
  return testDb.seed.run()
})

describe('Album database tests', () => {
  test('CREATE: Can add a new album', () => {
    const newAlbum = {
      name: 'Test Album',
      artist: 1,
      condition: 'Test condition'
    }

    const expected = 'Test Album'

    return db.addAlbum(newAlbum, testDb)
      .then(newIds => {
        const actual = newIds[0]
        expect(actual).toEqual(11)
        return actual
      })
      .then(newId => {
        return db.getAlbumById(newId, testDb)
          .then(newAlbum => {
            const actual = newAlbum.name
            return expect(actual).toEqual(expected)
          })
      })
  })

  test('READ: can select a single album by id', () => {
    const expected = 'Making Movies'

    return db.getAlbumById(3, testDb)
      .then(actual => {
        return expect(actual.name).toEqual(expected)
      })
  })

  test('READ: can select all albums', () => {
    const expected = 10

    return db.getAlbumsAll('name', testDb)
      .then(actual => {
        return expect(actual).toHaveLength(expected)
      })
  })

  test('UPDATE: can update an album in the database', () => {
    const newData = {
      name: 'Updated album',
      artist: 2
    }

    const expected = 'Updated album'

    const albumId = 3

    return db.updateAlbum(albumId, newData, testDb)
      .then(() => {
        return db.getAlbumById(albumId, testDb)
          .then(actual => {
            return expect(actual.name).toEqual(expected)
          })
      })
  })

  test('DELETE: can delete an album from the database', () => {
    const albumToDelete = 1
    const expected = 9

    expect.assertions(3)

    return db.deleteAlbum(albumToDelete, testDb)
      .then(deleteCount => {
        return expect(deleteCount).toBeTruthy()
      })
      .then(() => {
        return db.getAlbumById(albumToDelete, testDb)
          .then(album => {
            return expect(album).toBeFalsy()
          })
      })
      .then(() => {
        return db.getAlbumsAll('name', testDb)
          .then(albums => {
            return expect(albums).toHaveLength(expected)
          })
      })
  })
})
