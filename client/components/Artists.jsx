import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AlbumTile from './AlbumTile'

const Artists = ({ artists }) => {
  return (
    <>
      <h1>Artists</h1>
      {artists.map(artist => {
        return (
          <div className="grid-section" key={artist.id}>
            <div className="grid-section__header">
              <h2 className="grid-section__title">{artist.name}</h2>
              <p className="grid-section__link"><Link to={`/artists/${artist.id}`}>See artist</Link></p>
            </div>
            {artist.albums.length
              ? (
                <div className='albums'>
                  {artist.albums.map(album => {
                    return <AlbumTile key={album.id} album={album} artistName={artist.name} />
                  })}
                </div>
              ) : (
                <p>No albums by this artist</p>
              )}
          </div>
        )
      })}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    artists: globalState.artists
  }
}

export default connect(mapStateToProps)(Artists)
