/* eslint-disable promise/no-nesting */
const express = require('express')
const router = express.Router()

const db = require('../db/artistsDb')

router.get('/', (req, res) => {
  return db.getArtistsAll()
    .then(artists => {
      return res.json(artists)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id', (req, res) => {
  const artistId = req.params.id

  return db.getArtistById(artistId)
    .then(artist => {
      return res.json(artist)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.delete('/:id', (req, res) => {
  const artistId = req.params.id

  return db.deleteArtist(artistId)
    .then(artist => {
      return res.json(artist)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.get('/:id/albums', (req, res) => {
  const artistId = req.params.id

  return db.getAlbumsByArtist(artistId)
    .then(artist => {
      return res.json(artist)
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.post('/', (req, res) => {
  const artist = req.body
  return db.addArtist(artist)
    .then(ids => {
      return db.getArtistById(ids[0])
        .then(newArtist => {
          return res.json(newArtist)
        })
    })
    .catch(err => {
      console.log(err.message)
    })
})

router.patch('/:id', (req, res) => {
  const id = req.params.id
  const artistData = req.body
  return db.updateArtist(id, artistData)
    .then(() => {
      return db.getArtistById(id)
        .then(updatedArtist => {
          return res.json(updatedArtist)
        })
    })
})

module.exports = router
