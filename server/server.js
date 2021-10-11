const express = require('express')
const path = require('path')

const server = express()

// MIDDLEWARE
server.use(express.static(path.join(__dirname, 'public')))
server.use(express.urlencoded({ extended: true }))

// ROUTES

const albumRoutes = require('./routes/albumRoutes')
const artistRoutes = require('./routes/artistRoutes')

server.use('/api/v1/albums', albumRoutes)
server.use('/api/v1/artists', artistRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

module.exports = server
