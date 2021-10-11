import React from 'react'
import { connect } from 'react-redux'

import LineBreakPara from './LineBreakPara'

const Album = (props) => {
  const id = parseInt(props.match.params.id)
  const singleAlbum = props.albums.find(album => album.id === id)
  return (
    <>
      {singleAlbum && (
        <>
          <h1 className="album__meta album__meta--primary">{singleAlbum.name}</h1>
          <h2 className="album__meta album__meta--secondary">{singleAlbum.artistName}</h2>
          <h3></h3>
          <article className="single-album">
            <div className="single-album__block single-album__block--cover">
              <img className="single-album__image" src={singleAlbum.image} alt={`${singleAlbum.name} cover art`} />
            </div>
            <div className="single-album__block single-album__block--player">
              <iframe src={`https://open.spotify.com/embed/album/${singleAlbum.spotifyId}`} width="300" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media" className="single-album__player"></iframe>

            </div>
            <div className="single-album__block single-album__block--meta">
              <h4>Notes</h4>
              <LineBreakPara text={singleAlbum.notes} />
            </div>
          </article>
        </>
      )}
    </>
  )
}
const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums
  }
}

export default connect(mapStateToProps)(Album)
