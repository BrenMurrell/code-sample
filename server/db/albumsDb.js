const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'

const connection = knex(config[env])

const getAlbumsAll = (orderField = 'name', db = connection) => {
  return db('albums')
    .select('*', 'artists.name as artistName', 'albums.id as id', 'albums.name as name')
    .join('artists', 'artists.id', 'albums.artist')
    .orderBy(orderField)
}

const getAlbumById = (id, db = connection) => {
  return db('albums')
    .select('*', 'artists.name as artistName', 'albums.id as id', 'albums.name as name')
    .join('artists', 'artists.id', 'albums.artist')
    .first()
    .where('albums.id', id)
}

const getAlbumsByArtist = (artistId, orderField = 'name', db = connection) => {
  return db('albums')
    .select()
    .where('artist', artistId)
    .orderBy(orderField)
}

const updateAlbum = (albumId, newData, db = connection) => {
  return db('albums')
    .update(newData)
    .where('id', albumId)
    .then(() => {
      return getAlbumById(albumId)
    })
}

const addAlbum = (newAlbum, db = connection) => {
  return db('albums')
    .insert(newAlbum)
}

const deleteAlbum = (albumId, db = connection) => {
  return db('albums')
    .del()
    .where('id', albumId)
}

module.exports = {
  addAlbum,
  getAlbumsAll,
  getAlbumsByArtist,
  getAlbumById,
  updateAlbum,
  deleteAlbum
}
