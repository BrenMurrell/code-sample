import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { updateAlbumThunk } from '../actions/albums'
import { getArtistsAllThunk } from '../actions/artists'

import ButtonGroup from './ButtonGroup'
import Button from './Button'
import Input from './Input'
import Modal from './Modal'
import TextArea from './TextArea'

const AlbumEdit = (props) => {
  const id = parseInt(props.match.params.id)
  const { dispatch, artists, albums } = props
  const singleAlbum = albums.find(album => album.id === id)

  const [formData, setFormData] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    setFormData(singleAlbum)
  }, [singleAlbum])

  const handleSubmit = (e) => {
    e.preventDefault()
    return dispatch(updateAlbumThunk(formData))
      .then(() => {
        setModalVisible(true)
        return dispatch(getArtistsAllThunk())
      })
  }

  const changeHandler = (e) => {
    console.log(e.target.value)
    console.log(formData)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <h1>Update album</h1>
      {formData && (
        <form className='form' onSubmit={handleSubmit}>
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='name'
            label='Album name'
            name='name'
            placeholder='Enter album name'
            value={formData.name}
            required
          />
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='condition'
            label='Condition'
            name='condition'
            placeholder='Vinyl / Cover condition'
            value={formData.condition}
          />
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='image'
            label='Image URL'
            name='image'
            placeholder='URL to a (square) image'
            value={formData.image}
          />
          <Input
            changeHandler={(e) => changeHandler(e)}
            id='spotifyId'
            label='Spotify Id'
            name='spotifyId'
            placeholder='Can be extracted from sharing link'
            value={formData.spotifyId}
          />
          <TextArea
            changeHandler={(e) => changeHandler(e)}
            id='notes'
            label='Album notes'
            name='notes'
            placeholder='Any notes about your personal copy of this album'
            value={formData.notes}
          />
          <div className='field'>
            <label htmlFor='artist' className='field__label'>Artist</label>
            <select
              onChange={(e) => changeHandler(e)}
              value={formData.artist}
              name='artist'
              id='artist'
              className='field__input'>
              <option value=''>Select one...</option>
              {artists.map(artist => {
                return <option key={artist.id} value={artist.id}>{artist.name}</option>
              })}
            </select>
          </div>
          <Button
            buttonText='Submit'
          />
        </form>
      )}
      {modalVisible && (
        <Modal title='Updated!'>
          <p>Successfully updated {formData.name}</p>
          <ButtonGroup>
            <Button buttonFunc={() => props.history.push(`/albums/${formData.id}`)} buttonText='Close' />
          </ButtonGroup>
        </Modal>
      )}
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    albums: globalState.albums,
    artists: globalState.artists
  }
}

export default connect(mapStateToProps)(AlbumEdit)
