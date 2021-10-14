import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { deleteAlbumThunk } from '../actions/albums'

import ButtonGroup from './ButtonGroup'
import Button from './Button'
import LineBreakPara from './LineBreakPara'
import Modal from './Modal'

const Album = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { albums } = props

  const id = parseInt(props.match.params.id)
  const singleAlbum = props.albums.find(album => album.id === id)

  const performDelete = (id) => {
    props.dispatch(deleteAlbumThunk(id))
  }

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
              <ButtonGroup>
                <Button buttonText='Update' buttonFunc={() => props.history.push(`/albums/${singleAlbum.id}/edit`)} />
                <Button buttonStyle='warn' buttonFunc={() => setModalVisible(true)} buttonText='Delete' />
              </ButtonGroup>
            </div>
          </article>
        </>
      )}
      {(!singleAlbum && albums.length) && (
        <Redirect to='/albums' />
      )}
      { (modalVisible && singleAlbum) && (
        <Modal title="Are you sure?">
          <p>Are you really sure you want to delete {singleAlbum.name}?</p>
          <p>There is <strong><em>no</em></strong> undo</p>
          <ButtonGroup>
            <Button buttonFunc={() => setModalVisible(false)} buttonText='Cancel' />
            <Button buttonFunc={() => performDelete(singleAlbum.id)} buttonText='Delete' buttonStyle='warn' />
          </ButtonGroup>
        </Modal>
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
