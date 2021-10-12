/* eslint-disable promise/no-nesting */
const express = require('express')
const router = express.Router()

const db = require('../db/albumsDb')

router.get('/', (req, res) => {
  return db.getAlbumsAll()
    .then(albums => {
      return res.json(albums)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const album = req.body
  return db.addAlbum(album)
    .then(ids => {
      res.json(ids[0])
      return null
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  return db.getAlbumById(id)
    .then(album => {
      return res.json(album)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  return db.deleteAlbum(id)
    .then(rows => {
      return res.json(rows)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const albumId = req.params.id
  const newData = req.body
  delete newData.artistName

  return db.updateAlbum(albumId, newData)
    .then(updatedAlbum => {
      return res.json(updatedAlbum)
    })
    .catch(err => {
      console.log(err)
    })
})

module.exports = router
