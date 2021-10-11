/* eslint-disable promise/no-nesting */
const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'

const connection = knex(config[env])

function getArtistsAll (orderField = 'name', db = connection) {
  return db('artists').select()
    .orderBy(orderField)
    .then(artists => {
      return db('albums')
        .then(albums => {
          const artistsWithAlbums = artists.map(artist => {
            artist.albums = albums.filter(album => album.artist === artist.id)
            return artist
          })
          return artistsWithAlbums
        })
    })
}

function getArtistById (id, db = connection) {
  return db('artists')
    .select()
    .where('artists.id', id)
    .first()
    .then(artist => {
      return db('albums')
        .where('albums.artist', artist.id)
        .then(albums => {
          artist.albums = albums
          return artist
        })
    })
}

function addArtist (artist, db = connection) {
  return db('artists').insert(artist)
}

function updateArtist (id, data, db = connection) {
  return db('artists')
    .update(data)
    .where('id', id)
}

function deleteArtist (id, db = connection) {
  return db('artists')
    .del()
    .where('id', id)
    .then(ids => {
      return ids
    })
}

module.exports = {
  addArtist,
  getArtistsAll,
  getArtistById,
  updateArtist,
  deleteArtist
}
