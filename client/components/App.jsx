import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { getAllAlbumsAction } from '../actions/albums'
import { getArtistsAll } from '../actions/artists'

import Albums from './Albums'
import Album from './Album'
import AlbumEdit from './AlbumEdit'
import Artists from './Artists'
import Header from './Header'
import Home from './Home'
import Footer from './Footer'

const App = ({ dispatch }) => {
  useEffect(() => {
    dispatch(getAllAlbumsAction())
    dispatch(getArtistsAll())
  })

  return (
    <>
      <Header />
      <main className='app'>
        <Route exact path='/' component={Home} />
        <Route exact path='/albums' component={Albums} />
        <Route exact path='/albums/:id' component={Album} />
        <Route exact path='/albums/:id/edit' component={AlbumEdit} />
        <Route path='/artists' component={Artists} />
      </main>
      <Footer />
    </>
  )
}

export default connect()(App)
