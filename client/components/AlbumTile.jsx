import React from 'react'
import { Link } from 'react-router-dom'

const AlbumTile = ({ album, artistName }) => {
  return (
    <div className='album'>
      <div className='album__inner'>
        <Link className="album__link" to={`/albums/${album.id}`}>
          <img className='album__image' src={album.image} alt={`${album.name} cover art`} />
        </Link>
        <h3 className="album__meta album__meta--primary">{album.name}</h3>
        <h4 className='album__meta album__meta--secondary'>{artistName}</h4>
      </div>
    </div>
  )
}

export default AlbumTile
