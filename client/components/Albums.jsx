import React from 'react'
import { connect } from 'react-redux'

import AlbumTile from './AlbumTile'

const Albums = ({ albums }) => {
  return (
    <>
      <h1>Albums</h1>
      <div className="albums">
        {albums.map(album => {
          return (
            <AlbumTile key={album.id} album={album} artistName={album.artistName}/>
          )
        })}
      </div>
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(Albums)
